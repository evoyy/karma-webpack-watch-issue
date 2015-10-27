module.exports = function(config) {
    config.set({

        basePath: '',

        frameworks: ['mocha'],

        files: [
            { pattern: 'test/_tests.webpack.js', watched: false },
        ],

        plugins: [
            'karma-mocha',
            'karma-webpack',
        ],

        preprocessors: {
            'test/_tests.webpack.js': [ 'webpack' ]
        },

        port: 9876,

        colors: true,

        logLevel: config.LOG_DEBUG,

        autoWatch: true,
        singleRun: false
    });
};
