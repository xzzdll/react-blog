const env = process.env.NODE_ENV.trim();
module.exports = require(`./build/webpack.${env}.js`);