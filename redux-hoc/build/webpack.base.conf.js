const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const config = require('../config');
const aliases = require('./aliases');
const conf = process.env.NODE_ENV === 'test' ? config.test : config.dev;

module.exports = {
  entry: {
    app: 'src/index.jsx'
  },
  output: {
    path: conf.outputPath,
    publicPath: conf.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass'],
    alias: aliases.resolveAlias
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin()
  ]
};
