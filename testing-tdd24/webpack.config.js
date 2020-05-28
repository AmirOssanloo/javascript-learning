const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const environment = process.env.NODE_ENV || 'development';

const config = {
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          rootMode: 'upward'
        },
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

if (environment === 'development') {
  config.devtool = 'source-map';
  config.devServer = {
    host: 'localhost',
    port: 8080,
    historyApiFallback: {
      index: '/'
    },
    hot: true,
    overlay: true
  };
} else {
  config.plugins = [...config.plugins, new CleanWebpackPlugin()];
}

module.exports = config;