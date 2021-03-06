// Karma configuration
// Generated on Mon May 22 2017 11:37:56 GMT+0100 (BST)

module.exports = function(config) {
  config.set({

    // browserNoActivityTimeout: 100000,
    // concurrency: 1,
    // added -------- ^^^

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    // frameworks: ['mocha'],
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'src/**.js',
      'test/karma/**.js'
    ],

    // list of files to exclude
    exclude: [
      // 'test/**.skip'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
        'Firefox',
        // 'Chrome',
        // 'Safari'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

console.log('is loading', __dirname);
