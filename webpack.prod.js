const path = require("path");
const { merge } = require('webpack-merge');

const common = require("./webpack.common");

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "JavaScripts/[name]-[hash].bundle.js",
    path: path.resolve(__dirname, "docs"),
    publicPath: "/website-onepager-handlebars-bootstrap/"
  },
  module: {
    rules: [
      {
        test: /\.(hbs)/i,
        loader: 'string-replace-loader',
        options: {
          search: '.href = \'/',
          replace: '.href = \'/website-onepager-handlebars-bootstrap/',
          flags: 'g',
        }
      },
      {
        test: /\.(hbs)/i,
        loader: 'string-replace-loader',
        options: {
          search: 'a href="/',
          replace: 'a href="/website-onepager-handlebars-bootstrap/',
          flags: 'g',
        }
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
});