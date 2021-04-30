const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const nodeExternals = require("webpack-node-externals");

module.exports = merge(common, {
  entry: path.resolve(__dirname, "../server/index.js"),
  output: {
    path: path.resolve("server-build"),
    filename: "index.js"
  },
  target: "node",
  externals: [nodeExternals()],
  plugins: [],
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
      },
      {
        test: /\.css$/i,
        use: "css-loader/locals"
      }
    ]
  }
});
