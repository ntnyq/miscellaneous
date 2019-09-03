const config = {
  dist: 'dist',
  scss: {
    src: 'src/scss/**/*.scss',
    dest: 'src/css',
  },
  css: {
    dest: 'dist/css',
  },
  js: {
    src: 'src/js/**/*.js',
    dest: 'dist/js',
  },
  img: {
    src: 'src/img/**/*.{jpg,jpeg,png,gif,svg}',
    dest: 'dist/img',
  },
  html: {
    src: 'src/*.{html,ico}',
    dest: 'dist',
  },
  static: {
    src: 'src/static/**',
    dest: 'dist/static',
  },
  fonts: {
    src: 'src/fonts/**',
    dest: 'dist/fonts',
  },
}

module.exports = config
