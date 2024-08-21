const path = require('path-browserify');
const os = require('os-browserify/browser');

module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.resolve.fallback = {
        path: require.resolve("path-browserify"),
        os: require.resolve("os-browserify/browser"),
        // process: require.resolve("process/browser"),
      };
      return webpackConfig;
    },
  },
};