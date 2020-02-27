const {src, dest} = require('gulp');
const order = require('gulp-order');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

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
        .pipe(dest(backendPath + "js/")); 
    }  
};  

exports.js = fn;  