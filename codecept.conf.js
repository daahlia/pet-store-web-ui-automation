const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  //tests: './*_test.js',
  tests: './tests/*.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://petstore.octoperf.com',
      show: true,
      windowSize: '1200x900'     
    }
  },
  include: {
    I: './steps_file.js',
    //HomePage: './pages/HomePage.js',
   },
  
  bootstrap: null,
  mocha: {
    reporterOptions: {
      reportDir: "output/report-mochawesome.html"
    }
  },
  name: 'pet-store-web-ui-automation-by-sabina',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    mocha: {
      reporterOptions: {
        enabled: false
      }
    }
  }
}

