<?php

namespace App\Providers;

use App\CommonMark\LinkRenderer;
use Illuminate\Support\ServiceProvider;
use League\CommonMark\Extension\CommonMark\Node\Inline\Link;
use League\CommonMark\Extension\DefaultAttributes\DefaultAttributesExtension;
use League\CommonMark\Extension\ExternalLink\ExternalLinkExtension;
use Statamic\Facades\Markdown;
use Statamic\Markdown\Parser;
use Ueberdosis\CommonMark\HintExtension;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Markdown::addExtensions(function () {
            return [new HintExtension, new DefaultAttributesExtension, new ExternalLinkExtension];
        });

        /* Wait and see if this is merged https://github.com/statamic/cms/pull/11827 */
        /* Markdown::extend('default', function (Parser $parser) { */
        /*     $parser->addRenderer(Link::class, new LinkRenderer); */
        /**/
        /*     return $parser; */
        /* }); */

    }
}
