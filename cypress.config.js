const { defineConfig } = require('cypress');
const webpack = require('@cypress/webpack-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://toob-ruddy.vercel.app',
    specPattern: 'cypress/e2e/features/*.feature',
    supportFile: 'cypress/support/e2e.js',
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      const options = {
        webpackOptions: {
          resolve: {
            extensions: ['.js']
          },
          module: {
            rules: [
              {
                test: /\.feature$/,
                use: [
                  {
                    loader: '@badeball/cypress-cucumber-preprocessor/webpack',  // Changed this line
                    options: config
                  }
                ]
              }
            ]
          }
        }
      };

      on('file:preprocessor', webpack(options));

      return config;
    },
  }
});


