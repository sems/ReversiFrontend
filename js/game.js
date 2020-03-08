const apiUrl = '/api/url';

const Game = (function (url) {
    console.log("hallo, vanuit module Game!");

    //Configuratie en state waarden
    let configMap = {
        apiUrl: url
    }

    let stateMap = {
        gameState: ''
    }

    // Private function init
    const privateInit = function (callbackFunction) {
        callbackFunction();
        window.setInterval(_getCurrentGameState, 2000)
    }

    const _getCurrentGameState = function () {
        //console.log("Get gamestate");
        stateMap.gameState = Game.Model.getGameState;
    }

    // Waarde/object geretourneerd aan de outer scope
    return {
        init: privateInit
    }
})(apiUrl)