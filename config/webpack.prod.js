const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: false,
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    filename: "js/[name].[contenthash].bundle.js"
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
});
