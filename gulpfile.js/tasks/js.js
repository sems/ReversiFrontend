const {src, dest} = require('gulp');
const order = require('gulp-order');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const gulpSass = require('gulp-sass');
const uglify = require('gulp-uglify');

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
        .pipe(concat('main.min.css'))
        .pipe(dest('./dist/css'))
        .pipe(dest(backendPath + "css/"));
	}
};

exports.sass = sass; 
exports.js = fn;  