const mix = require('laravel-mix');

const sassOptions = {
    includePaths: [
        'node_modules',
        'resources/assets/js/components'
    ],
}

mix.react('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css', sassOptions)
   .sourceMaps();
