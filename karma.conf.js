module.exports = function (config) {
  config.set({
    basePath: "./",
    frameworks: ["jasmine"],
    files: ["specs/**/*Spec.js"],
    exclude: [],
    preprocessors: {
      "specs/**/*Spec.js": ["webpack", "sourcemap"],
    },
    webpack: {
      devtool: "inline-source-map",
      mode: "development",
    },
    webpackMiddleware: {
      stats: "errors-only",
    },
    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["ChromeHeadless"],
    singleRun: false,
    concurrency: Infinity,
    customLaunchers: {
      ChromeHeadless: {
        base: "Chromium",
        flags: [
          "--no-sandbox",
          "--headless",
          "--disable-gpu",
          "--remote-debugging-port=9222",
        ],
      },
    },
  });
};
