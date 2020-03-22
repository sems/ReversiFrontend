Game.Reversi = (function () {
    console.log('hallo, vanuit module Reversi')

    //Configuratie en state waarden
    let configMap = {

    }

    // Private function init
    const privateInit = function () {
        console.log("Game.Template starting...");
    }

    const showFiche = function (kleur, x, y) {
        if(kleur == 0) {
            $('.' + 'div_' + x + '_' + y).removeClass("fiche-black");
            $('.' + 'div_' + x + '_' + y).removeClass("fiche-white");
            //$('.' + 'div_' + x + '_' + y).addClass("fiche-none");
        } else {
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

    // Waarde/object geretourneerd aan de outer scope
    return {
        init: privateInit,
        showFiche: showFiche,
        clearBoard: clearBoard
    }

})()