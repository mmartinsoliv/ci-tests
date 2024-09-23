import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import { AllureReporter } from 'allure-playwright'

const testDir = defineBddConfig({
  features: 'sample.feature',
  steps: 'steps.js',
});

export default defineConfig({
  testDir,
  reporter: [["line"], ["allure-playwright", {
    outputFolder: "allure-results",
    
  }]],
});
