const path = require("path");
const SRC_DIR = path.resolve(__dirname, "../src");
const ASSET_DIR = path.resolve(__dirname, "../src/assets");

const { inlineSource } = require('./config');

const rules = [
  { test: /\.html$/, loader: 'html-loader' },
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader"
    }
  },
  { test: /\.(scss|css)$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: inlineSource ? 'url-loader' : 'file-loader',
    options: {
      limit: 10000,
      name: "img/[name].[ext]",
    }
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: {
      loader: inlineSource ? 'url-loader' : 'file-loader',
      options: {
        name: "font/[name].[ext]",
      }
    }
  }
];

exports = {
  entry: {
    app: `${SRC_DIR}`
  },
  resolve: {
    modules: [SRC_DIR, "node_modules"],
    extensions: [".js", ".jsx", ".css", ".scss"],
  },
  module: {
    rules
  },
  optimization: {
    sideEffects: true,
    //分包技术
    splitChunks: {
      chunks: 'all',//默认只作用于异步模块，为`all`时对所有模块生效,`initial`对同步模块有效
      minSize: 30000,//合并前模块文件的体积
      minChunks: 1,//最少被引用次数
      cacheGroups: {
        common: {
          name: 'common',
          test: /node_modules/,
          chunks: 'initial',
          priority: -10,//优先级更高
          enforce: true
        },
        styles: {
          name: 'styles',
          test: /(\.scss|\.css)$/,
          chunks: 'all',
          enforce: true,
        }
      }
    }
  },
  performance: {
    hints: false
  }
};

module.exports = exports;
