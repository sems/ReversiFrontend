const config = require('./config');
const {series, parallel, watch} = require('gulp');

const browserSync = require('browser-sync').create();

const js = require('./tasks/js').js(config.files.js, config.files.jsOrder, config.localServerProjectPath);  
const sass  = require('./tasks/js').sass(config.files.sass, config.localServerProjectPath)
const htmlTask = require('./tasks/js').htmlTask('./', config.localServerProjectPath);

const vendor = require('./tasks/js').vendor(config.files.vendor, config.localServerProjectPath);
const templates = require('./tasks/js').templates(config.files.template, config.files.partialFiles, config.localServerProjectPath)

const hello = function (done) {
    console.log(`Groeten van ${config.voornaam}!`)
    done();
}

const watchFiles = () => {
    browserSync.init({server: {baseDir: './dist'}});
 
    watch('./css/*.sass', series(sass));
    watch('./css/*.scss', series(sass));
    watch('./js/*.js', series(js));
    watch('./index.html', series(htmlTask));
    watch('./templates/**/*.hbs', series(templates));
    watch('./vendor/**/*.js', series(vendor));

    watch('./dist/css/*.css').on('change', browserSync.reload);

    watch('./index.html').on('change', browserSync.reload);
 }; 
 
watchFiles.displayName = 'watch';

//Exports
exports.default = hello;
exports.js = js;
exports.sass = sass;
exports.htmlTask = htmlTask;
exports.watch = watchFiles;
exports.vendor = vendor;
exports.templates = templates;