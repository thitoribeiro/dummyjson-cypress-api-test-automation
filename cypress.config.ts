import { defineConfig } from 'cypress'
import installLogsPrinter from 'cypress-terminal-report/src/installLogsPrinter'

export default defineConfig({
  e2e: {
    baseUrl: 'https://dummyjson.com',
    supportFile: 'cypress/support/index.ts',
    specPattern: 'cypress/integration/**/*.spec.ts',
    setupNodeEvents(on, config) {
      // Plugin do Mochawesome
      require('cypress-mochawesome-reporter/plugin')(on)
      
      // Plugin para logs no terminal
      installLogsPrinter(on)

      return config
    }
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'mochawesome-report',
    overwrite: true,
    html: true,
    json: true
  }
})
