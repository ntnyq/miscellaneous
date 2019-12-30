const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const { NODE_ENV = 'production' } = process.env
const resolve = (...args) => path.resolve(__dirname, ...args)

const rules = [
  {
    enforce: 'pre',
    test: /\.(m?js)|vue$/,
    exclude: /node_modules/,
    include: [resolve('src')],
    loader: 'eslint-loader',
    options: {
      formatter: require('eslint-friendly-formatter'),
    },
  },

  {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      loaders: {
        css: {
          use: 'css-loader',
          fallback: 'vue-style-loader',
        },
      },
    },
  },

  {
    test: /\.m?js$/,
    exclude: /node_modules/,
    include: [resolve('src')],
    loader: 'babel-loader',
  },

  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      NODE_ENV === 'production'
        ? {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../',
            },
          }
        : 'style-loader',
      'css-loader',
      'postcss-loader',
      {
        loader: 'sass-loader',
        options: {
          prependData: '@import "@/styles/core/style";',
        },
      },
    ],
  },

  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          esModule: false,
          name: 'static/img/[name].[hash:7].[ext]',
        },
      },
    ],
  },

  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: 'static/fonts/[name].[hash:7].[ext]',
    },
  },
  {
    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: 'static/media/[name].[hash:7].[ext]',
    },
  },
]

const plugins = [
  new VueLoaderPlugin(),

  new MiniCssExtractPlugin({
    filename: 'static/css/[name].[contenthash:8].css',
    chunkFilename: 'static/css/[name].[contenthash:8].css',
  }),

  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './public/index.html',
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
    },
  }),

  new CopyWebpackPlugin([{ from: 'public', to: '' }]),

  ...(NODE_ENV === 'production'
    ? [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new CleanWebpackPlugin(),
      ]
    : [
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [
              'Your application is running here http://127.0.0.1:9527',
            ],
          },
          clearConsole: true,
        }),
      ]),
]

module.exports = {
  mode: NODE_ENV === 'development' ? 'development' : 'production',

  entry: {
    app: './src/main.js',
  },

  output: {
    path: resolve('dist'),
    filename: 'static/js/[name].[hash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].js',
  },

  resolve: {
    extensions: ['.js', '.json', '.vue', '.scss', '.css'],
    alias: {
      '@': resolve('src'),
    },
  },

  module: { rules },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'initial',
          priority: 10,
          enforce: true,
        },
      },
    },
    runtimeChunk: {
      name: 'manifest',
    },
  },

  plugins,

  devServer: {
    contentBase: resolve('dist'),
    host: '127.0.0.1',
    port: 9527,
    compress: true,
    open: true,
    hot: true,
    inline: true,
    clientLogLevel: 'warning',
    quiet: true, // necessary for FriendlyErrorsPlugin
    overlay: {
      // show warnings && errors on page
      warnings: true,
      errors: true,
    },
  },

  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
}
