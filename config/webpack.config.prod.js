"use strict";

const merge = require("webpack-merge");
const TerserPlugin = require('terser-webpack-plugin');
const config = require("./webpack.common");

const prodConf = merge(config, {
  mode: "production",
  optimization: {
    minimizer: [new TerserPlugin()], //TersePlugin replace Uglify and does accept ES6 code
  }
}) 

// console.log("Webpack build config",prodConf)

module.exports = prodConf;
