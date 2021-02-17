const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "../dist"),
    open: true,
    compress: true,
    hot: true,
    port: 8080
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
