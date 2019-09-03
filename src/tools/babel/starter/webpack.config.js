const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development'

const resolve = (...args) => path.resolve(__dirname, ...args)

module.exports = {
  mode,

  entry: './src/main.js',

  output: {
    path: resolve('dist'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [resolve('src')],
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  optimization: {
    minimizer: [],

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

  plugins: [
    ...(mode === 'development'
      ? [new webpack.HotModuleReplacementPlugin()]
      : []),

    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: true,
    }),
  ],

  devServer: {
    contentBase: resolve(),
    open: true,
    port: 9527,
    hot: true,
    compress: true,
  },
}
