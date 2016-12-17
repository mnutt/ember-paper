/* jshint node: true */

module.exports = function(environment) {
  // jscs:disable requireEnhancedObjectLiterals, validateQuoteMarks, disallowEmptyBlocks, disallowVar

  var ENV = {
    modulePrefix: 'dummy',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      rootElement: 'body'
    },
    
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' https://buttons.github.io https://api.github.com",
      'font-src': "'self' https://fonts.gstatic.com",
      'style-src': "'self' 'unsafe-inline' https://buttons.github.io https://fonts.googleapis.com",
      'connect-src': "'self'",
      'img-src': "'self' data:",
      'media-src': "'self'",
      'child-src': "'self' https://buttons.github.io"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.rootURL = '/ember-paper/release-1';
  }

  return ENV;
};
