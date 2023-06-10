const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: process.env.CYPRESS_PROJECT_ID,
  e2e: {
    baseUrl: 'http://localhost:5173/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
