const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')

const resolve = dir => path.join(__dirname, '..', dir)

module.exports = merge(baseWebpackConfig, {
  mode: 'development',

  devtool: 'inline-source-map',

  plugins: [new webpack.HotModuleReplacementPlugin()],

  devServer: {
    hot: true,
    contentBase: resolve('dist'),
    compress: true,
    port: 8080,
  },
})
