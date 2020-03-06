const config = require('./config');
const {series, parallel, watch} = require('gulp');

const browserSync = require('browser-sync').create();
const js = require('./tasks/js').js(config.files.js, config.files.jsOrder, config.localServerProjectPath);  
const sass  = require('./tasks/js').sass(config.files.sass, config.localServerProjectPath)

const hello = function (done) {
    console.log(`Groeten van ${config.voornaam}!`)
    done();
}

const watchFiles = () => {
    browserSync.init({server: {baseDir: './'}});
 
    watch('./css/*.sass', series(sass));
    watch('./css/*.scss', series(sass));
 
    watch('./css/*.scss').on('change', browserSync.reload);
    watch('./css/*.sass').on('change', browserSync.reload);
 }; 
 
watchFiles.displayName = 'watch';

//Exports
exports.default = hello;
exports.js = js;
exports.sass = sass;
exports.watch = watchFiles;