module.exports = ctx => ({
  parser: 'postcss-scss',
  plugins: {
    precss: {},
    autoprefixer: {},
    // ctx.env is mapping to process.env.NODE_ENV
    cssnano: ctx.env === 'production' ? {} : false,
  },
})
