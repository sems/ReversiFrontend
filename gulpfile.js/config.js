module.exports = {
    localServerProjectPath : '../../source/repos/ReversiApp/ReversiApp/wwwroot/' ,
    files: {
        sass: [
            'css/main.sass',
        ],
        js: [
            'js/**/*.js',
            'js/*.js'
        ],
        jsOrder: [
            'game.js',
            'game.data.js',
            'game.model.js',
            'game.reversi.js',
            'FeedbackWidget.js'
        ],
        vendor: [
            'vendor/*.js',
            'vendor/**/*.js',
        ],
        template: [
            'templates/**/*.hbs'
        ]
    },

    voornaam: 'Sem'
};