Game.Reversi = (function () {
    console.log('hallo, vanuit module Reversi')

    //Configuratie en state waarden
    let configMap = {

    }

    // Private function init
    const privateInit = function () {
        console.log("private init Module");
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

    // Waarde/object geretourneerd aan de outer scope
    return {
        init: privateInit,
        showFiche: showFiche
    }

})()