/*
 * @Author: ntnyq
 *
 * @Date: 2018-08-29
 */
const gulp = require('gulp')
const loadPlugins = require('gulp-load-plugins')
const $ = loadPlugins()
const server = require('browser-sync').create()

const browsers = ['> 0.1%', 'last 5 version', 'not IE <= 10', 'Android >= 4.0']

const postcssPlugins = [require('autoprefixer')({ browsers })]

gulp.task('scss', () => {
  gulp
    .src('src/scss/*.scss')

    .pipe(
      $.sass({
        outputStyle: 'expanded', // 'expanded' 扩展输出格式 常用 'compressed' 压缩输出格式 'nested'  带嵌套缩进 'compact' 横行输出
      }).on('error', $.sass.logError),
    )

    .pipe($.postcss(postcssPlugins))

    .pipe(gulp.dest('src/css'))
})

gulp.task('server', () => {
  // const WATCH_FILES = ['src/*.html', 'src/css/*.css', 'src/js/*.js', 'src/img/**'];
  const WATCH_FILES = ['**']

  server.init(WATCH_FILES, {
    // Init server
    server: { baseDir: './src' },
  })

  gulp.watch('src/scss/**', ['scss'])

  gulp.watch('src/**', () => {
    server.reload({ stream: true })
  })
})

gulp.task('default', ['server'])
