const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('../config');
const aliases = require('./aliases');
const utils = require('./utils');
const conf = process.env.NODE_ENV === 'test' ? config.test : config.dev;

module.exports = {
  entry: {
    app: 'src/index.jsx'
  },
  output: {
    path: conf.outputPath,
    publicPath: conf.assetsPublicPath,
    filename: utils.assetsPath('scripts/[name].[chunkhash].js')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]--[hash:base64:5]'
              }
            },
            { loader: 'sass-loader' }
          ]
        })
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath('styles/[name].[contenthash].css'),
      allChunks: true
    })
  ]
};
