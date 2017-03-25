const express = require('express');
const webpack = require('webpack');
const opn = require('opn');

const config = require('../config');
const proxyMiddleware = require('http-proxy-middleware');
const conf = config.dev;

const webpackConfig = process.env.NODE_ENV === 'test'
  ? require('./webpack.base.conf')
  : require('./webpack.dev.conf')
;

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable;
const app = express();
const compiler = webpack(webpackConfig);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
});

const hotMiddleware = require('webpack-hot-middleware')(compiler);
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', (compilation) => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
    hotMiddleware.publish({ action: 'reload' });
    cb();
  });
});

// proxy api requests
Object.keys(proxyTable).forEach((context) => {
  let options = proxyTable[context];
  if (typeof options === 'string') {
    options = { target: options };
  }
  app.use(proxyMiddleware(context, options));
});

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

// serve pure static assets
const staticPath = config.dev.assetsPublicPath;
app.use(staticPath, express.static(conf.staticDirectory));

const uri = `http://localhost:${conf.port}`;

devMiddleware.waitUntilValid(() => {
  console.log(`> Listening at ${uri} \n`);
});

module.exports = app.listen(conf.port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  if (process.env.NODE_ENV !== 'testing') {
    opn(uri);
  }
});
