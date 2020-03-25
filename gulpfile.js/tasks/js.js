const {src, dest} = require('gulp');
const order = require('gulp-order');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const gulpSass = require('gulp-sass');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

const handlebars = require('gulp-handlebars');
const wrap = require("gulp-wrap");
const declare = require('gulp-declare');
const mergeStream = require('merge-stream');
const path = require('path');

const fn = function (filesJs, filesJsOrder, backendPath) {  
    return function () {  
        // console.log(`Taak js is uitgevoerd, ${voornaam}!`);  
        // return Promise.resolve('Klaar');  

        return src(filesJs)
        .pipe(order(filesJsOrder, {base: './js'}))
        .pipe(concat('app.js'))
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(dest('./dist/js'))
        .pipe(uglify({compress: true}))  
        .pipe(dest(backendPath + "js/")); 
    }  
};  

const sass = function (files_sass, backendPath) {
    return function () {
        return src(files_sass)
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(dest('./dist/css'))
        .pipe(gulpSass({outputStyle: 'compressed'}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('main.min.css'))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(dest('./dist/css'))
        .pipe(dest(backendPath + "css/"));
	}
};

const htmlTask = function (path, backendPath) {
    return function () {
        return src(['index.html'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyJS: true,
            minifyCSS: true,
            removeComments: true
        }))
        .pipe(rename(function (path) {
            path.dirname += "/";
            path.basename = 'index';
            path.extname = ".html";
        }))
        .pipe(dest('./dist/'))
        .pipe(dest(backendPath));
    }
}

const vendor = function (vendorFiles, backendPath){
    return function() {
        return src(vendorFiles)
        .pipe(concat('vendor.js'))
        .pipe(dest('./dist/js'))
        .pipe(dest(backendPath + "js/")); 
    }
}

const templates = function (templateFiles, partialFiles, backendPath ) {
    return function() {
        const templates = src(templateFiles)
            .pipe(handlebars())
            .pipe(wrap('Handlebars.template(<%= contents %>)'))
            .pipe(declare({
                namespace: 'spa_templates',
                noRedeclare: true, // Avoid duplicate declarations
                processName: function(filePath) {
                    return declare.processNameByPath(filePath.replace('src\\templates\\', ''));
                }
            }))

        const partials = src([partialFiles])
            .pipe(handlebars())
            .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
                imports: {
                    processPartialName: function(fileName) {
                        return JSON.stringify(path.basename(fileName, '.js').substr(1));
                    }
                }
            }));

        return mergeStream(partials, templates)
            .pipe(concat('templates.js'))
            .pipe(dest('./dist/js/'))
            .pipe(dest(backendPath + "js/")); 
    }
}

exports.sass = sass; 
exports.js = fn;  
exports.htmlTask = htmlTask;
exports.vendor = vendor;
exports.templates = templates;