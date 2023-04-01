const path = require("path");
const { merge } = require('webpack-merge');

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "JavaScripts/[name].bundle.js",
    path: path.resolve(__dirname, "docs")
  },
});