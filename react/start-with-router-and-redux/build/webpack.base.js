const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = dir => path.join(__dirname, '..', dir)

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/app.js',
  },

  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': resolve('src'),
    },
  },

  output: {
    path: resolve('dist'),
    filename: '[name][hash:8].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [resolve('src')],
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      publicPath: resolve('dist'),
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
  ],
}
