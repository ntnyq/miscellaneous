const gulp = require('gulp')
const fontmin = require('gulp-fontmin')
const { text } = require('./config')

gulp.task('default', function() {
  return gulp
    .src('fonts/**/*.ttf')
    .pipe(fontmin({ text }))
    .pipe(gulp.dest('dist/fonts'))
})
