const config = require('./config');

const js = require('./tasks/js').js(config.files.js, config.files.jsOrder, config.localServerProjectPath);  

const hello = function (done) {
    console.log(`Groeten van ${config.voornaam}!`)
    done();
}

//Exports
exports.default = hello;
exports.js = js;