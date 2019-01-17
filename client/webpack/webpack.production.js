const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./webpack.paths');

module.exports = {
  mode: 'production',
  output: {
    filename: '[name].min.js',
    path: paths.public
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.src + '/index.html',
      inlineSource: /\.(js|css)$/
    })
  ]
};