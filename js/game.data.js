Game.Data = (function () {
    let _configMap = {
        apiKey: "55eea571a79d521c360b1fe8f7b99b9e",
        mock: [{
            url: "api/Spel/Beurt",
            data: 0
        }]
    }

    let stateMap = {
        environment: ''
    }

    const _init = function (environment) {
        console.log("Game.Data starting...");
        if (environment === 'production' || environment === 'development') {
            stateMap.environment = environment;
        } else {
            throw new Error("Please set env to 'production' or 'development'!");
        }

    }

    const getMockData = function (url) {
        //filter mock data, configMap.mock ... oei oei, moeilijk moeilijk :-)
        const mockData = _configMap.mock;

        return new Promise((resolve, reject) => {
            resolve(mockData);
        });

    }

    const get = function (url) {
        if (stateMap.environment == 'production') {
            return $.get(url)
                .then(r => {
                    return r;
                })
                .catch(e => {
                    console.log(e.message);
                });
        }
        if (stateMap.environment == 'development') {
            return getMockData(url);
        }
    }

    return {
        init: _init,
        get: get
    }
})()