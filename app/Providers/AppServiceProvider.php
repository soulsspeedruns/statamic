<?php

namespace App\Providers;

use App\CommonMark\LinkRenderer;
use Illuminate\Support\Facades\URL;
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
        $this->configureSecureUrls();

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

    /**
     * Configure secure URLs and middleware.
     * https://laravel-news.com/url-force-https
     */
    protected function configureSecureUrls()
    {
        // Determine if HTTPS should be enforced
        $enforceHttps = $this->app->environment(['production', 'staging'])
            && ! $this->app->runningUnitTests();

        // Force HTTPS for all generated URLs
        URL::forceHttps($enforceHttps);

        // Ensure proper server variable is set
        if ($enforceHttps) {
            $this->app['request']->server->set('HTTPS', 'on');
        }
    }
}
