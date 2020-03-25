Game.Api = (function () {
    let _configMap = {
        quote: "",
    }

    const _init = function () {
        Game.Data.getQuoteFromApi().then(d => {
            _configMap.quote = d.en + " - " + d.author;
        })
    }

    const getQuote = function () {
        return _configMap.quote;
    }

    return {
        init: _init,
        quote: getQuote
    }
})()
