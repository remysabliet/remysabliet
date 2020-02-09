"use strict";

const merge = require("webpack-merge");
const configs = require("./webpack.common");
const paths = require("./paths");

const entryConfig = [
  // Include an alternative client for WebpackDevServer. A client's job is to
  // connect to WebpackDevServer by a socket and get notified about changes.
  // When you save a file, the client will either apply hot updates (in case
  // of CSS changes), or refresh the page (in case of JS changes). When you
  // make a syntax error, this client will display a syntax error overlay.
  // Note: instead of the default WebpackDevServer client, we use a custom one
  // to bring better experience for Create React App users. You can replace
  // the line below with these two lines if you prefer the stock client:
  // require.resolve('webpack-dev-server/client') + '?/',
  // require.resolve('webpack/hot/dev-server'),
  require.resolve('react-dev-utils/webpackHotDevClient') // Websocket for hot reloading (to be disable on prod)
]

const devConf = merge(configs, {
  mode: "development",
  entry: entryConfig,
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