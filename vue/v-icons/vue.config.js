module.exports = {
  chainWebpack: config => {
    // svg loader
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()
    svgRule.exclude.add(/node_modules/)
    svgRule.include.add(`${__dirname}/src/icons`)
    svgRule
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })

    const imagesRule = config.module.rule('images')

    imagesRule.exclude.add(`${__dirname}/src/icons`)
    config.module.rule('images').test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  },
}
