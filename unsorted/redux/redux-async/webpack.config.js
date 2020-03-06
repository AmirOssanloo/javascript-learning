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
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }
        ],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    historyApiFallback: {
      index: '/'
    },
    proxy: {
      '/api/': 'http://localhost:3000'
    },
    hot: true,
    overlay: true
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