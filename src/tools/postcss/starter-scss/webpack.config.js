const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
  mode,

  entry: `${__dirname}/src/main.js`,

  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
  },

  resolve: {
    alias: {
      '@': `${__dirname}/src`,
    },

    extensions: ['.js', '.json', '.css'],
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          mode === 'production'
            ? {
                loader: MiniCssExtractPlugin.loader,
                options: { publicPath: '../' },
              }
            : 'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    ...(mode === 'development'
      ? [
          new webpack.HotModuleReplacementPlugin(),
          new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
              messages: [
                'You application is running here http://127.0.0.1:9000',
              ],
            },
            clearConsole: true,
          }),
        ]
      : [
          new CleanWebpackPlugin(),
          new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].css',
          }),
        ]),

    new CopyWebpackPlugin([
      {
        from: `${__dirname}/public`,
        to: `${__dirname}/dist`,
        ignore: ['index.html'],
      },
    ]),

    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
  ],

  devServer: {
    contentBase: `${__dirname}/dist`,
    compress: true,
    port: 9000,
    inline: true,
    hot: true,
    host: '127.0.0.1',
    quiet: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    clientLogLevel: 'warning',
  },
}
