'strict mode'

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require("path");
const paths = require("./paths");
const getClientEnvironment = require('./env')

const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin')
const getCacheIdentifier = require('react-dev-utils/getCacheIdentifier');
var WebpackAutoInject = require('webpack-auto-inject-version');

// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
const publicPath = '/'
const publicUrl = ''
// Get environment variables to inject into our app.
const env = getClientEnvironment(publicUrl)

const IN_PRODUCTION = process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging";

if (
  !IN_PRODUCTION ||
  // Use dev env variables for webpack-bundle-analyzer
  process.env.ANALYZE === "true"
) {
  const result = require("dotenv").config();
  if (result.error) {
    throw result.error;
  }
}

// Source maps are resource heavy and can cause out of memory issue for large source files.
const shouldUseSourceMap = !IN_PRODUCTION;

const fileLoader = {
  loader: require.resolve("file-loader"),
  exclude: [/\.(js|jsx)$/, /\.html$/, /\.json$/],
  options: {
    name: "media/[name].[hash:8].[ext]"
  }
};

// Process JS with Babel{
const babelLoader = {
  test: /\.(js|jsx)$/,
  include: paths.appSrc,
  loader: require.resolve('babel-loader'),
  options: {
    customize: require.resolve(
      'babel-preset-react-app/webpack-overrides'
    ),
    // @remove-on-eject-begin
    babelrc: false,
    configFile: false,
    presets: [require.resolve('babel-preset-react-app')],
    // Make sure we have a unique cache identifier, erring on the
    // side of caution.
    // We remove this when the user ejects because the default
    // is sane and uses Babel options. Instead of options, we use
    // the react-scripts and babel-preset-react-app versions.
    cacheIdentifier: getCacheIdentifier(
      'production'
      ,[
        'babel-plugin-named-asset-import',
        'babel-preset-react-app',
        'react-dev-utils',
        'react-scripts',
      ]
    ),
    // @remove-on-eject-end
    plugins: [
      [
        require.resolve('babel-plugin-named-asset-import'),
        {
          loaderMap: {
            svg: {
              ReactComponent: '@svgr/webpack?-svgo,+ref![path]',
            },
          },
        },
      ],
    ],
    // This is a feature of `babel-loader` for webpack (not Babel itself).
    // It enables caching results in ./node_modules/.cache/babel-loader/
    // directory for faster rebuilds.
    cacheDirectory: true
  },
}

const urlLoader = (pathPrefix) => ({
  test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
  loader: require.resolve("url-loader"),
  options: {
    limit: 10000,
    name: `${pathPrefix}/media/[name].[hash:8].[ext]`
  }
});

const sourceMapLoader = {
  test: /\.(js|jsx)$/,
  loader: require.resolve("source-map-loader"),
  enforce: "pre",
  include: paths.appSrc
};

const scssLoader = {
  test: /\.scss$/,
  loaders: [
    'style-loader',
    'css-loader?modules&importLoaders=1&localIdentName=[local]',
    'sass-loader'
  ]
  // Risk of CSS file cached (and so dont take care of update) as we dont include hash inside its name 
  // ,
  // options: {
  //   name: `media/[name].[hash:8].[css]`
  // }
};

const cssLoader = {
  test: /\.css$/,
  use: [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: { importLoaders: 1 }
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebookincubator/create-react-app/issues/2677
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          autoprefixer({
            browsers: [
              '>1%',
              'last 4 versions',
              'Firefox ESR',
              'not ie < 9' // React doesn't support IE8 anyway
            ],
            flexbox: 'no-2009'
          })
        ]
      }
    }
  ]
}
const entryConf = [
  // We ship a few polyfills by default:
  require.resolve('./polyfills'),
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
  require.resolve('react-dev-utils/webpackHotDevClient')
  ,
  // Finally, this is your app's code:
  paths.appIndexJs
  // We include the app code last so that if there is a runtime error during
  // initialization, it doesn't blow up the WebpackDevServer client, and
  // changing JS code would still trigger a refresh.
]


  const outputConfig =   {
    // Next line is not used in dev but WebpackDevServer crashes without it:
    path: paths.appBuild,
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true,
    // This does not produce a real file. It's just the virtual path that is
    // served by WebpackDevServer in development. This is the JS bundle
    // containing code from all our entry points, and the Webpack runtime.
    filename: 'static/js/[name].[hash].js',
    // There are also additional JS chunk files if you use code splitting.
    chunkFilename: 'static/js/[name].[hash].chunk.js',
    // This is the URL that app is served from. We use '/' in development.
    publicPath,
    // Point sourcemap entries to original disk location (format as URL on Windows)
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
  }

const resolveConfig =  {
  // This allows you to set a fallback for where Webpack should look for modules.
  // We placed these paths second because we want `node_modules` to 'win'
  // if there are any conflicts. This matches Node resolution mechanism.
  // https://github.com/facebookincubator/create-react-app/issues/253
  modules: [paths.appSrc, 'node_modules'].concat(
    // It is guaranteed to exist because we tweak it in `env.js`
    process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
  ),
  // These are the reasonable defaults supported by the Node ecosystem.
  // We also include JSX as a common component filename extension to support
  // some tools, although we do not recommend using it, see:
  // https://github.com/facebookincubator/create-react-app/issues/290
  // `web` extension prefixes have been added for better support
  // for React Native Web.
  extensions: ['.js', '.json', '.jsx','.scss'],
  alias: {
    src: paths.appSrc,
    // Support React Native Web
    // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
    'react-native': 'react-native-web'
  }
}

const pluginsConfig = [
  // Generates an `index.html` file with the <script> injected.
  new HtmlWebpackPlugin({
    favicon: './src/assets/ico/favicon.ico',
    template: paths.appHtml,
    inject: true,
    production: IN_PRODUCTION,
    minify: IN_PRODUCTION && {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true
    }
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.LoaderOptionsPlugin({ options: {} }),
  // Makes some environment variables available in index.html.
  // The public URL is available as %PUBLIC_URL% in index.html, e.g.:
  // <link rel='shortcut icon' href='%PUBLIC_URL%/favicon.ico'>
  // In development, this will be an empty string.
  new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),

  // Add module names to factory functions so they appear in browser profiler.

  // Makes some environment variables available to the JS code, for example:
  // if (process.env.NODE_ENV === 'development') { ... }. See `./env.js`.
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }),
  // This is necessary to emit hot updates (currently CSS only):
  new webpack.HotModuleReplacementPlugin(),
  // Watcher doesn't work well if you mistype casing in a path so we use
  // a plugin that prints an error when you attempt to do this.
  // See https://github.com/facebookincubator/create-react-app/issues/240
  new CaseSensitivePathsPlugin(),
  // If you require a missing module and then `npm install` it, you still have
  // to restart the development server for Webpack to discover it. This plugin
  // makes the discovery automatic so you don't have to restart.
  // See https://github.com/facebookincubator/create-react-app/issues/186
  new WatchMissingNodeModulesPlugin(paths.appNodeModules),
  // Moment.js is an extremely popular library that bundles large locale files
  // by default due to how Webpack interprets its code. This is a practical
  // solution that requires the user to opt into importing specific locales.
  // https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
  // You can remove this if you don't use Moment.js:
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  new WebpackAutoInject(),
  new CleanWebpackPlugin()
]

const createConfig = () => {
  const pathPrefix = `/`;
  return {
    devtool: 'source-map',
    entry: entryConf,
    output: outputConfig,
    resolve: resolveConfig,
    module: {
      strictExportPresence: true,
      rules: [
        sourceMapLoader,
        {
          oneOf: [
            urlLoader(pathPrefix),
            babelLoader,
            scssLoader,
            // cssLoader(pathPrefix),
            fileLoader
            // ** STOP ** Are you adding a new loader?
            // Make sure to add the new loader(s) before the "file" loader.
          ]
        }
      ]
    },
    plugins: pluginsConfig,
    performance: { hints: false }
  };
};

const configs = createConfig();

module.exports = configs;
