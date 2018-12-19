const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const HTMLPlugin = require("html-webpack-plugin");
const path = require("path");
const common = require("./webpack.common.js");
const SRC_DIR = path.resolve(__dirname, "../src");
const DIST_DIR = path.resolve(__dirname, "../dist");

exports = merge(common, {
  mode: 'production',
  plugins: [
    new HTMLPlugin({
      template: `${SRC_DIR}/index.html`
    }),
    new UglifyJSPlugin()
  ],
  output: {
    path: DIST_DIR,
    filename: "bundle.js",
    chunkFilename: "[name].bundle.js",
    publicPath: './'
  },
});

module.exports = exports;
