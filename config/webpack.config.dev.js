"use strict";

const merge = require("webpack-merge");
const configs = require("./webpack.common");
const paths = require("./paths");

const devConf = merge(configs, {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    contentBase: [
      paths.appSrc,
      paths.appPublic
    ],
    historyApiFallback: true,
    port: 3000,
    host: "localhost",
    hot: true,
    compress: false
  }
});

// console.log("Webpack dev config", devConf)

module.exports = devConf