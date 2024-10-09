require('dotenv').config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,

  env: {
    username: process.env.CYPRESS_USERNAME,
    password: process.env.CYPRESS_PASSWORD,
    baseUrl: process.env.CYPRESS_BASE_URL
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    baseUrl: process.env.CYPRESS_BASE_URL

  },
});
