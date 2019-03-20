const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/main.js"
  },
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  module: {
    rules: [
    {
      test: /\.css$/,
      use: [
        {loader: "style-loader"},
        {loader: "css-loader"}
      ]
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].html"
          }
        },
        {
          loader: "extract-loader"
        },
        {
          loader: "html-loader",
          options: {
            attrs: ["img:src"]
          }
        }
      ]
    },
    {
      test: /\.(jpg|png|gif)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "images/[name].[ext]"
          }
        }
      ]
    }
  ]
  },
  devServer: {
    contentBase: "dist",
    overlay: true
  }
}