const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, '..') + '/public'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
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
      },
      {
        test: /\.(gif|jpg|png|svg)$/,
        loader: 'url-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    proxy: {
      '*': 'http://localhost:3000'
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