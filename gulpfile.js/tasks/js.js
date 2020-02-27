const {src, dest} = require('gulp');

const fn = function (backendPath) {  
    return function () {  
        // console.log(`Taak js is uitgevoerd, ${voornaam}!`);  
        // return Promise.resolve('Klaar');  

        return src('js/*.js')
        // .pipe(order(filesJsOrder, {base: './'}))
        // .pipe(concat('app.js'))
        // .pipe(babel({
        //     presets: ['@babel/preset-env']
        // }))
        .pipe(dest('./dist/js'))
        .pipe(dest(backendPath + "js/")); 
    }  
};  

exports.js = fn;  