const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "../src/index.jsx")
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].bundle.js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Movies UI",
      favicon: path.resolve(__dirname, "../public/favicon.ico"),
      template: path.resolve(__dirname, "../public/template.html"),
      filename: "index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      api: path.resolve(__dirname, "../src/api"),
      assets: path.resolve(__dirname, "../src/assets"),
      components: path.resolve(__dirname, "../src/components"),
      consts: path.resolve(__dirname, "../src/constants"),
      containers: path.resolve(__dirname, "../src/containers"),
      routes: path.resolve(__dirname, "../src/routes"),
      utils: path.resolve(__dirname, "../src/utils")
    }
  }
};
