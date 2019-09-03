const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const resolve = (...args) => path.resolve(__dirname, ...args)

const config = require('./config.json')
const isProduction = () => process.env.NODE_ENV === 'production'

const pkg = require('./package.json')
const now = new Date()
const banner = `CSS animation v${pkg.version}
${pkg.repository.url}

Copyright (c) 2018-${now.getFullYear()} ${pkg.author}
Released under the ${pkg.license} license

Date: ${now.toISOString()}`

/**
 * Create multi-page entries and html-webpack-plugin config
 */
function buildEntiesAndHTML() {
  let entries = {}
  let htmls = []
  const pluginConfig = {
    hash: true,
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
    },
    chunksSortMode: 'dependency',
  }
  const pages = glob.sync('src/views/*/index.js')

  pages.forEach(page => {
    const obj = path.parse(page)
    const outputName = obj.dir.split('/').slice(-1)[0]

    entries[outputName] = `./${page}`
    htmls.push(
      new HtmlWebpackPlugin({
        ...config,
        ...pluginConfig,
        template: `./${obj.dir}/index.pug`,
        filename: `./${outputName}.html`,
        chunks: [outputName],
      })
    )
  })

  return {
    entries,
    htmls,
  }
}

module.exports = {
  mode: isProduction() ? 'production' : 'development',

  entry: {
    ...buildEntiesAndHTML().entries,
  },

  output: {
    path: resolve('dist'),
    publicPath: isProduction() ? './' : '/',
    filename: 'js/[name][hash:8].js',
    chunkFilename: './js/[id].[chunkhash].js',
  },

  resolve: {
    extensions: ['.js', '.json', '.scss', '.css'],
    alias: {
      '@': resolve('src'),
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [resolve('src')],
        use: ['babel-loader'],
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isProduction() ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },

      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000,
              name: 'img/[name].[hash:7].[ext]',
            },
          },
        ],
      },

      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]',
        },
      },

      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
    ],
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },

  plugins: [
    ...buildEntiesAndHTML().htmls,
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name][contenthash:8].css',
      chunkFilename: '[id].css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([
      {
        from: resolve('static'),
        to: 'dist',
        ignore: ['.*'],
      },
    ]),
    ...(isProduction()
      ? [new webpack.BannerPlugin(banner)]
      : [new webpack.HotModuleReplacementPlugin()]),
  ],

  devServer: {
    contentBase: resolve('dist'),
    port: 9527,
    open: true,
    overlay: true,
    hot: true,
  },
}
