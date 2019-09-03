const webpack = require('webpack')

module.exports = {
  mode: 'development',

  entry: './src/main.js',

  output: {
    path: `${__dirname}/public`,
    filename: '[name].js',
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: `${__dirname}/src`,
      },
    ],
  },

  devServer: {
    contentBase: `${__dirname}/public`,
    open: true,
  },
}
