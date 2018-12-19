const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const HTMLPlugin = require("html-webpack-plugin");
//node中自带的模块
const path = require("path");
const common = require("./webpack.common.js");
//相当于执行了一个cd操作
const SRC_DIR = path.resolve(__dirname, "../src");

exports = merge(common, {
  mode: 'production',
  plugins: [
    new HTMLPlugin({
      template: `${SRC_DIR}/index.html`
    }),
    new UglifyJSPlugin()
  ]
});

module.exports = exports;
