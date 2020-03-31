Game.Model = (function () {
    let _configMap = {

    }

    const _init = function () {
        //console.log("Game.Model starting...");
    }

    const _getGameState = function (token) {
        let url = "/api/Spel/Beurt/" + token;
        let response;
        //aanvraag via Game.Data
        Game.Data.get(url)
            .then(data => {
                if (data.value !== 0 || data.value !== 1 || data.value !== 2) {
                    throw new Error("Value out of range!");
                } else {
                    return data;
                }
            }) 
    }

    const getWeather = function () {
        let url = "http://api.openweathermap.org/data/2.5/weather?q=zwolle&apikey=55eea571a79d521c360b1fe8f7b99b9e";
        //var response = Game.Data.get(url);
        Game.Data.get(url)
            .then(data => {
                if (typeof data.main.temp !== 'undefined') {
                    console.log("Temperatuur: " + (data.main.temp - 273.15));
                } else {
                    throw new Error("Geen termperatuur gevonden.");
                }
            });
    }

    return {
        init: _init,
        getGameState: _getGameState,
        getWeather: getWeather
    }
})()
