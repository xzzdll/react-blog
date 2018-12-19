const path = require("path");
const merge = require("webpack-merge");
const HTMLPlugin = require("html-webpack-plugin");

const common = require("./webpack.common.js");
const SRC_DIR = path.resolve(__dirname, "../src");
const DIST_DIR = path.resolve(__dirname, "../dist");

exports = merge(common, {
  mode: 'development',
  devtool: "inline-source-map",
  devServer: {
    contentBase: SRC_DIR,
    watchContentBase: true,
    hot: true,
    compress: false,
    port: 8000,
    clientLogLevel: "none",
    historyApiFallback: true
  },
  plugins: [
    new HTMLPlugin({
      template: `${SRC_DIR}/index.html`,
    })
  ],
  output: {
    path: DIST_DIR,
    filename: "bundle.js",
    chunkFilename: "[name].bundle.js",
    publicPath: '/'
  },
});


module.exports = exports;
