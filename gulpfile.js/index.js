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
    watch('./js/*.js', series(js));

    watch('./dist/css/*.css').on('change', browserSync.reload);
    watch('./dist/js/**/*.js').on('change', browserSync.reload);
    
    watch('./index.html').on('change', browserSync.reload);
 }; 
 
watchFiles.displayName = 'watch';

//Exports
exports.default = hello;
exports.js = js;
exports.sass = sass;
exports.watch = watchFiles;