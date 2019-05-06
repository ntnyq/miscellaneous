module.exports = {
  mode: 'development',

  entry: './src/main.js',

  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },

  resolveLoader: {
    modules: [
      `${__dirname}/lib/loaders`
    ]
  },

  module: {
    rules: [
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
  },

  devServer: {
    contentBase: './dist',
    overlay: {
      warnings: true,
      errors: true
    },
    open: true
  }
}
