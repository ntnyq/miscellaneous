module.exports = {
  devServer: {
    port: 9527,
    open: true,
  },
  // 编译依赖
  transpileDependencies: [/\/node_modules\/vue-echarts\//, /\/node_modules\/resize-detector\//],
}
