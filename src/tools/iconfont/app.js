const glob = require('glob')
const webfontsGenerator = require('@vusion/webfonts-generator')

const files = glob.sync('src/icons/output/*.svg')

webfontsGenerator(
  {
    files,
    dest: './dist/static/fonts/iconfont',
    html: true,
    types: ['eot', 'woff2', 'woff', 'ttf', 'svg'],
    cssTemplate: './src/icons/templates/css.hbs',
  },
  err => {
    if (err) {
      console.log(err)
    } else {
      console.log('Done!')
    }
  }
)
