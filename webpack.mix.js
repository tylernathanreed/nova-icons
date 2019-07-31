let mix = require('laravel-mix')

mix.setPublicPath('dist')
    .js('resources/js/icons.js', 'js')
    .sass('resources/sass/icons.scss', 'css')
