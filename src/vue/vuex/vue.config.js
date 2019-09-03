module.exports = {
  baseUrl: './',

  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/core/style";',
      },
    },
  },

  devServer: {
    port: 9527,
    open: true,
  },

  chainWebpack: config => {
    config.resolve.extensions.store.add('.scss')
  },
}
