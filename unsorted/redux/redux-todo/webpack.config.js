const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    hot: true,
    port: 8080,
    historyApiFallback: {
      index: '/'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname) + '/src/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}