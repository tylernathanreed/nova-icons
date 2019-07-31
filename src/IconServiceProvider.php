<?php

namespace Reedware\NovaIcons;

use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\ServiceProvider;

class IconServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Nova::serving(function(ServingNova $event) {

            Nova::script('icons', __DIR__.'/../dist/js/icons.js');
            Nova::style('icons', __DIR__.'/../dist/css/icons.css');

        });
    }
}
