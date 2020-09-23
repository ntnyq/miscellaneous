const gulp = require('gulp')
const fs = require('fs-extra')
const glob = require('glob')
const execa = require('execa')
const webfontsGenerator = require('@vusion/webfonts-generator')

const run = (bin, args, opts = {}) => execa(bin, args, { stdio: 'inherit', ...opts })

async function icons() {
  await fs.remove('src/icons/output')
  await run('svgo', [
    '-f',
    'src/icons/origin',
    '--config=src/icons/svgo.yml',
    '-o',
    'src/icons/output',
  ])

  const p = new Promise((resolve, reject) => {
    const files = glob.sync('./src/icons/output/*.svg')
    const generateOptions = {
      files,
      dest: 'dist',
      html: true,
      fixedWidth: true,
      centerHorizontally: true,
      normalize: true,
      descent: 200,
      types: ['eot', 'woff2', 'woff', 'ttf', 'svg'],
      cssTemplate: './src/icons/templates/css.hbs',
      htmlTemplate: './src/icons/templates/html.hbs',
      templateOptions: { baseSelector: '.iconfont' },
    }

    webfontsGenerator(generateOptions, err => {
      err ? reject(err) : resolve()
    })
  })

  return p
}

exports.dev = gulp.series(icons)
