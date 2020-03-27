Game.Reversi = (function () {
    console.log('hallo, vanuit module Reversi')

    //Configuratie en state waarden
    let _configMap = {
        apiPath: '/api/spel/',
        idOfGame: 0
    }

    // Private function init
    const _init = function (id) {
        console.log("Game.Template starting...")
        _configMap.idOfGame = id
        getGameState(id)
    }

    const showFiche = function (kleur, y, x) {
        if(kleur == 0) {
            $('.' + 'div_' + x + '_' + y).removeClass("fiche-black");
            $('.' + 'div_' + x + '_' + y).removeClass("fiche-white");
            //$('.' + 'div_' + x + '_' + y).addClass("fiche-none");
        } else {
            $('.' + 'div_' + x + '_' + y).removeClass("fiche-black");
            $('.' + 'div_' + x + '_' + y).removeClass("fiche-white");

            var color = kleur == 1 ? 'white' : 'black';
            //$('.' + 'div_' + x + '_' + y).removeClass("fiche-none");
            $('.' + 'div_' + x + '_' + y).addClass("fiche-" + color);
        }
    }

    const clearBoard = function () {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                $('.' + 'div_' + i + '_' + j).removeClass("fiche-black");
                $('.' + 'div_' + i + '_' + j).removeClass("fiche-white");
            }
        }
    }

    const showQuote = function() {
        $('.quote-container').append(Game.Template.parseTemplate("quote", {
            quote: Game.Api.quote
        }))
    }

    const getGameState = function(id) {
        $.get(_configMap.apiPath + id)
        .then((data) => {
            let bord = data.bord
            for (let i = 0; i < 7; i++) {
                for (let j = 0; j < 7; j++) {
                    const element = bord[i][j];
                    showFiche(element, i, j)
                }   
            }
        })
    }

    const Move = function (y, x) {
        $.get(_configMap.apiPath + _configMap.idOfGame + "/" + y + "/" + x)
        .then((response) => {
            console.log(response);
            getGameState(_configMap.idOfGame)
        })
    }

    const updateChartData = function() {
        
    }

    // Waarde/object geretourneerd aan de outer scope
    return {
        init: _init,
        showFiche: showFiche,
        clearBoard: clearBoard,
        showQuote: showQuote,
        getGameState: getGameState,
        Move: Move
    }
})()