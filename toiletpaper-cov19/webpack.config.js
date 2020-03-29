const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const environment = process.env.NODE_ENV || 'development';

let options = {
  entry: {
    assets: './src/assets.js',
    main: './src/index.js'
  },
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
        options: {
          limit: false
        },
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
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  },
  resolve: {
    extensions: ['.js']
  },
};

if (environment === 'development') {
  options.devtool = 'source-map';
  options.devServer = {
    host: '0.0.0.0',
    proxy: {
      '*': 'http://localhost:3000'
    }
  };

  options.plugins = [
    ...options.plugins,
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 8000,
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
