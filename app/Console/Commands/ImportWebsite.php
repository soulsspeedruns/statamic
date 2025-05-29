<?php

namespace App\Console\Commands;

use App\Data\Markdoc\GameData;
use App\Data\Markdoc\PageData;
use App\Markdoc\MarkdocConverter;
use Illuminate\Console\Command;
use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use League\CommonMark\Extension\FrontMatter\FrontMatterExtension;
use Statamic\Facades\Asset;
use Statamic\Facades\Entry;
use Symfony\Component\Yaml\Yaml;

use function config;
use function exec;
use function Laravel\Prompts\confirm;
use function Laravel\Prompts\outro;
use function Laravel\Prompts\progress;
use function Laravel\Prompts\spin;

class ImportWebsite extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:import-website {--clone : Refresh the website repository} {--force : Force the operation to run}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Imports the website data from the old repository';

    private Filesystem $storage;

    public function __construct()
    {
        parent::__construct();
        $this->storage = Storage::disk('website');
    }

    private function clone(): bool
    {
        $files = $this->storage->files();
        $directories = $this->storage->directories();

        foreach ($directories as $directory) {
            $this->storage->deleteDirectory($directory);
        }

        $this->storage->delete([...$files, ...$directories]);
        $root = config('filesystems.disks.website.root');
        $output = null;
        $retval = null;

        exec(
            "git clone https://github.com/soulsspeedruns/website.git $root &>/dev/null",
            $output,
            $retval
        );

        return $retval === 0;
    }

    private function truncate(): void
    {
        spin(
            callback: function () {
                foreach (Entry::all() as $entry) {
                    $entry->delete();
                }
            },
            message: 'Deleting all pages and games'
        );
    }

    private function importGames(): void
    {
        $gameFiles = $this->storage->files('src/content/games');

        if (empty($gameFiles)) {
            $this->error('No games found');
        }

        $speedrundotcom_slugs = [
            'ds1remaster' => 'darksoulsremastered',
            'desremake' => 'demonssouls2020',
            'ds2sotfs' => 'darksouls2sotfs',
        ];

        progress(
            label: 'Importing games',
            steps: $gameFiles,
            callback: function ($gameFile) {
                $slug = File::name($gameFile);
                $gameData = $this->storage->get($gameFile);
                $yaml = GameData::from(Yaml::parse($gameData));
                $background = $this->storage->path($yaml->assets->background);
                $img = File::get($background);
                $ext = File::extension($background);
                $mime = File::mimeType($background);
                $size = File::size($background);

                $name = "$slug.$ext";
                $file = new UploadedFile($background, $name);

                $asset = Asset::make()
                    ->container('assets')
                    ->path("games/$name")
                    ->upload($file)
                    ->save();

                Entry::make()
                    ->collection('games')
                    ->slug($slug)
                    ->data([
                        'name' => $yaml->name,
                        'speedrun_com_id' => $speedrundotcom_slugs[$slug] ?? $slug,
                        'background' => "games/$name",
                    ])->save();
            }
        );
    }

    private function importPages(): void
    {
        $pageSrc = 'src/content/pages';
        $pageFiles = $this->storage->allFiles($pageSrc);
        $frontMatterExtension = new FrontMatterExtension;
        $parser = $frontMatterExtension->getFrontMatterParser();

        $games = Entry::query()
            ->where('collection', 'games')
            ->get();

        $gameNames = $games
            ->map(fn ($game) => $pageSrc.'/'.$game->slug.'.mdoc')
            ->toArray();

        $pageFiles = array_filter($pageFiles, fn ($filename) => ! in_array($filename, $gameNames));

        if (empty($pageFiles)) {
            $this->error('No pages found');
        }

        DB::beginTransaction();

        progress(
            label: 'Importing pages',
            steps: [...$gameNames, ...$pageFiles],
            callback: function ($pageFile) use ($parser, $pageSrc) {
                $pageData = $this->storage->get($pageFile);
                $result = $parser->parse($pageData);
                $yaml = PageData::from($result->getFrontMatter());

                $slug = File::name($pageFile);
                $dirname = File::dirname($pageFile);
                $parent = null;

                if ($dirname !== $pageSrc) {
                    $parent_slug = Str::after(File::dirname($pageFile), "$pageSrc/");
                    $parent = Entry::query()
                        ->where('collection', 'pages')
                        ->where('slug', $parent_slug)
                        ->first();
                }

                $markdoc = $result->getContent();
                $markdown = MarkdocConverter::convert($markdoc);

                $entry = Entry::make()
                    ->collection('pages')
                    ->blueprint('page')
                    ->published(true)
                    ->slug($slug)
                    ->data([
                        'title' => $yaml->title,
                        'content' => $markdown,
                        'parent' => $parent?->id() ?? null,
                    ]);

                $entry->afterSave(function ($entry) use ($parent) {
                    $structure = $entry->collection()->structure()->in($entry->locale());

                    if ($parent === null) {
                        $structure->append($entry);
                    } else {
                        $structure->appendTo($parent->id(), $entry->id);
                    }

                    $structure->save();
                });

                $entry->save();

            }
        );

        DB::commit();
    }

    public function updateGamePages(): void
    {
        $games = Entry::query()
            ->where('collection', 'games')
            ->get();

        progress(
            label: 'Updating game homepages',
            steps: $games,
            callback: function ($game) {
                $homepage = Entry::query()
                    ->where('collection', 'pages')
                    ->where('slug', $game->slug)
                    ->first();

                if ($homepage) {
                    $game->set('page', $homepage->id());
                    $game->save();
                }
            }
        );
    }

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        $clone = $this->option('clone');
        $force = $this->option('force');

        if (! $force) {
            confirm(
                label: 'This command will delete all games and pages, then import the data from the old website. Are you sure?',
                required: true
            );
        }

        if ($clone || ! $this->storage->exists('package.json')) {
            $success = spin(
                callback: fn () => $this->clone(),
                message: 'Cloning the website repository'
            );

            if (! $success) {
                $this->error('Failed to clone the website repository');
            }
        }

        $this->truncate();
        $this->importGames();
        $this->importPages();
        $this->updateGamePages();

        outro('All done!');
    }
}
