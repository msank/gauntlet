exports.config = {

  allScriptsTimeout: 50000,

  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Spec patterns are relative to the location of this config.
  specs: [
    'spec/**/*_spec.js'
  ],

  //browsers: ['Chrome'],

  multiCapabilities: [{
    'browserName': 'firefox'
  }, {
    'browserName': 'chrome',
     'chromeOptions': {
        // Get rid of --ignore-certificate yellow warning
        args: ['--no-sandbox', '--test-type=browser'],
        // Set download path and avoid prompting for download even though
        // this is already the default on Chrome but for completeness
        prefs: {
            'download': {
                'prompt_for_download': false,
                'default_directory': 'spec/o/',
            },
        },
    }
  }
  ],

  
  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: 'http://localhost:8000',

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 10000
  },

  onPrepare: function() {
    browser.getCapabilities().then(function (cap) {
      browser.browserName = cap.caps_.browserName;
    });



  }





};
