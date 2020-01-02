const glob = require('glob')
const webfontsGenerator = require('vusion-webfonts-generator')

const files = glob.sync('src/icons/svg/*.svg')

webfontsGenerator(
  {
    files,
    dest: './dist',
    html: true,
    types: ['eot', 'woff2', 'woff', 'ttf', 'svg'],
  },
  err => {
    if (err) {
      console.log(err)
    } else {
      console.log('Done!')
    }
  }
)
