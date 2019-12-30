const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = (...args) => path.resolve(__dirname, ...args)

module.exports = {
  entry: './src/main.js',

  output: {
    path: resolve('dist'),
    filename: '[name].js',
  },

  module: {
    rules: [],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('public/index.html'),
    }),
  ],

  devServer: {
    contentBase: resolve('public'),
    hot: true,
  },

  cache: {
    type: 'filesystem',
  },
}
