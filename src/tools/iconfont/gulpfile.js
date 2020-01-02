const gulp = require('gulp')
const loadPlugins = require('gulp-load-plugins')
const $ = loadPlugins()

function makeIcons() {
  return gulp
    .src(['src/icons/svg/*.svg'])
    .pipe(
      $.iconfontCss({
        fontName: 'iconfont',
        cssClass: 'icon',
        path: 'src/scss/templates/_icon.ejs',
        targetPath: 'iconfont.css',
        fontPath: './',
      })
    )
    .pipe(
      $.iconfont({
        fontName: 'iconfont',
        formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
        fontHeight: 256,
        normalize: true,
        timestamp: Date.now(),
        log () {}
      })
    )
    .pipe(gulp.dest('src/scss'))
}

exports.icon = makeIcons
