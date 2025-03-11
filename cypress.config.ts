import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { preprocessor } from "@badeball/cypress-cucumber-preprocessor/browserify";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    preprocessor(config, {
      typescript: require.resolve("typescript"),
    })
  );
  return config;
}

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    watchForFileChanges: false,
    defaultCommandTimeout: 50000,
    pageLoadTimeout: 50000,
    waitForAnimations: false,

    setupNodeEvents,
  },
  env: {
    "TAGS": "@runThis"
  },
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      quiet: true,
      overwrite: false,
      html: false,
      json: true
    }
  }
});
