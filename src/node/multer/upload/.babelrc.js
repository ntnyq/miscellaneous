// See docs at https://github.com/babel/babel

module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false, // commonjs | amd | umd | systemjs | auto(default)
        useBuiltIns: false, // entry 不会在开始引入core.js中的各个模块 'usage'则会
      },
    ],
  ],
  plugins: [],
}
