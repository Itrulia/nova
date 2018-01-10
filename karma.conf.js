// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

// Install Chrome Headless
process.env.CHROME_BIN = require("puppeteer").executablePath()

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular/cli"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-phantomjs-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage-istanbul-reporter"),
      require("karma-junit-reporter"),
      require("karma-mocha-reporter"),
      require("@angular/cli/plugins/karma")
    ],
    angularCli: {
      environment: "dev"
    },
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: ["html", "lcovonly", "text-summary", "cobertura", "json"],
      fixWebpackSourcePaths: true,
      dir: "tests/coverage"
    },
    junitReporter: {
        outputDir: "tests",
        outputFile: "test-results.xml",
        useBrowserName: false
    },
    reporters: ["mocha", "kjhtml", "junit"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,
    browsers: ["ChromeHeadless"]
  });
};
