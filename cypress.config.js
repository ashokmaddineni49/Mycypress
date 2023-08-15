const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );

      on('task', {
        log(message) {
            console.log(message + '\n');
            return null;
            // Then to see the log messages in the terminal
            // Use: cy.task("log", "my message");
        },
      })
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      require('cypress-mochawesome-reporter/plugin')(on);
      // Make sure to return the config object as it might have been modified by the plugin.
      return config
         
    },
    testIsolation: false,
    specPattern: ['cypress/e2e/features/**/*.feature','cypress/e2e/**/*.cy.js'],
    excludeSpecPattern: '**/pages/*',
    videosFolder: "cypress/reports/videos",
    screenshotsFolder: "cypress/reports/screenshots",
    reporter: 'cypress-mochawesome-reporter', 
    reporterOptions: {
      charts: true,
      reportPageTitle: 'MyReports',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: true,
    },
    projectId: "qrq1nw"
  },
});



