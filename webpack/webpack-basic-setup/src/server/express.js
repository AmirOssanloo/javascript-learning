import express from 'express';
import path from 'path';

const port = 8080;
const server = express();
const webpack = require('webpack');
const config = require('../../config/webpack.dev.js');
const compiler = webpack(config);

const webpackDevMiddleware = require('webpack-dev-middleware')(
  compiler,
  config.devServer
);
  
const webpackHotMiddleware = require('webpack-hot-middleware')(
  compiler
);
const staticMiddleware = express.static('dist');

server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);
server.use(staticMiddleware);
server.listen(port, () => {
  console.log(`Listen to port ${port}`);
});