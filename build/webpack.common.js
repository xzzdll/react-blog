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
  {
    test: /\.css$/, use: [
      'style-loader',
      'css-loader',
      'sass-loader'
    ]
  },
  {
    test: /\.scss$/, use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1
        }
      },
      'sass-loader'
    ]
  },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: "img/[name].[ext]",
    }
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: {
      loader: 'url-loader',
      options: {
        limit: 10000,
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
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      cacheGroups: {
        common: {
          name: 'common',
          test: /node_modules/,
          chunks: 'initial',
          priority: -10,
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
