const config = require('./config');

const js = require('./tasks/js').js(config.localServerProjectPath);  

const hello = function (done) {
    console.log(`Groeten van ${config.voornaam}!`)
    done();
}

//Exports
exports.default = hello;
exports.js = js;