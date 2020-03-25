Game.Template = (function () {
    let _configMap = {

    }

    const _init = function () {
        console.log("Game.Template starting...");
    }

    const _getTemplate = function (templateName) {
        return spa_templates.templates[templateName]
    }

    const _parseTemplate = function (templateName, data) {
        return _getTemplate(templateName)(data)
    }

    return {
        init: _init,
        getTemplate: _getTemplate,
        parseTemplate: _parseTemplate,
    }
})()
