const mix = require('laravel-mix');
const path = require('path');

mix.js('resources/js/app.js', 'js')
   .css('resources/css/app.css', 'css')
   .setPublicPath('public')
   .version();

mix.webpackConfig({
    resolve: {
        extensions: ['.*', '.wasm', '.mjs', '.js', '.jsx', '.json']
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
    }
});
