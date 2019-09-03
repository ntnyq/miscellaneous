module.exports = {
  publicPath: './',

  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/styles/core/style";',
      },
    },
  },

  devServer: {
    open: true,
    port: 9527,
    proxy: {
      '/api': {
        target: 'https://interface.meiriyiwen.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },

  chainWebpack: config => {
    config.resolve.extensions.store.add('.scss')
  },
}
