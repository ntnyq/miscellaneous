const EndWebpackPlugin = require('./lib/plugins/end-webpack-plugin')
const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
  mode,

  entry: './src/main.js',

  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },

  resolveLoader: {
    modules: [`${__dirname}/lib/loaders`],
  },

  module: {
    rules: [
      {
        test: /\.xml$/,
        use: ['xml-loader'],
      },
    ],
  },

  plugins: [
    new EndWebpackPlugin(
      stats => {
        console.log(stats)
      },
      err => {
        console.log(err)
      }
    ),
  ],

  devServer: {
    contentBase: './dist',
    overlay: {
      warnings: true,
      errors: true,
    },
    open: true,
  },
}
