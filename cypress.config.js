const { defineConfig } = require("cypress");

const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    "specPattern": "**/*.feature",
    "baseUrl": "https://opensource-demo.orangehrmlive.com",
    "videoCompression": 0,
    "video": true,
    "projectId": "v24fbf",
   // "videosFolder": "VideoRecording",
    //  "viewportWidth": 812,
    // "viewportHeight": 375,
    "defaultCommandTimeout" :20000,
    "pageLoadTimeout":120000,
    //"retries":{"runMode": 2, "openMode": 3 },

    "env":{
        
      "username" : "Admin",
      "password": "admin123",
      "url":"xyz.com",
      "neworigin": "abc.com"

    },
    setupNodeEvents(on, config) {
      // implement node event listeners here

      return require('./cypress/plugins/index.js')(on, config)
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile})
      allureWriter(on, config);
      return config;
    },
  },
});
