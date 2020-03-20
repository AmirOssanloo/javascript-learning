const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const environment = process.env.NODE_ENV || 'development';

let options = {
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(gif|jpg|png|svg)$/,
        loader: 'url-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: 'Version: 1.0.0\nAuthor: Sky in the sea, LLC\nContact: amir@skyinthesea.com\n\nCopyright 2019 (c) Sky in the sea, LLC - All Rights Reserved.'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html'
    })
  ],
  resolve: {
    extensions: ['.js']
  }
};

if (environment === 'development') {
  options.plugins = [
    ...options.plugins,
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['public'] },
      notify: false
    })
  ];
} else {
  options.plugins = [
    ...options.plugins,
    new CleanWebpackPlugin()
  ];
}

module.exports = options;
