require('dotenv').config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 50000,
  retries:4,

  env: {
    username: process.env.CYPRESS_USERNAME,
    password: process.env.CYPRESS_PASSWORD,
    baseUrl: process.env.CYPRESS_BASE_URL
  },

  e2e: {
    experimentalRunAllSpecs:true, 
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    baseUrl: process.env.CYPRESS_BASE_URL

  },
});
