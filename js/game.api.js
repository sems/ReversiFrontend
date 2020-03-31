Game.Api = (function () {
    let _configMap = {
        quote: "",
    }

    const _init = function () {
        
    }

    const getQuote = function () {
        Game.Data.getQuoteFromApi().then(d => {
            _configMap.quote = d.en + " - " + d.author;
        })
        return _configMap.quote;
    }

    return {
        init: _init,
        quote: getQuote
    }
})()
