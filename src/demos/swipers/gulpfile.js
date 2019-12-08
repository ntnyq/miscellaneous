const gulp = require('gulp')
const fs = require('fs-extra')
const browserSync = require('browser-sync').create()
const loadPlugins = require('gulp-load-plugins')
const $ = loadPlugins()

const clean = () => fs.remove('dist')

function styles() {
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(
      $.sass({
        outputStyle: 'expanded',
      }).on('error', $.sass.logError)
    )
    .pipe($.postcss())
    .pipe(gulp.dest('src/css'))
    .pipe(gulp.dest('dist/css'))
}

function scripts() {
  return gulp.src('src/js/**/*.js').pipe(gulp.dest('dist/js'))
}

function images() {
  return gulp.src('src/img/**/*').pipe(gulp.dest('dist/img'))
}

function statics() {
  return gulp.src('src/static/**/*').pipe(gulp.dest('dist/static'))
}

function views() {
  return gulp.src('src/*.html').pipe(gulp.dest('dist'))
}

function server() {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
  })

  gulp.watch('src/*.html', views)
  gulp.watch('src/scss/**/*.scss', styles)
  gulp.watch('src/js/**/*.js', scripts)
  gulp.watch('src/img/**/*', images)
  gulp.watch('src/static/**/*', statics)

  gulp.watch('src/**/*').on('change', browserSync.reload)
}

exports.dev = gulp.series(
  clean,
  gulp.parallel(styles, scripts, views, statics, images),
  server
)
