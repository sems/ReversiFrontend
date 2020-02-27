Game.Reversi = (function () {
    console.log('hallo, vanuit module Reversi')

    //Configuratie en state waarden
    let configMap = {

    }

    // Private function init
    const privateInit = function () {
        console.log("private init Module");
    }

    // Waarde/object geretourneerd aan de outer scope
    return {
        init: privateInit
    }

})()