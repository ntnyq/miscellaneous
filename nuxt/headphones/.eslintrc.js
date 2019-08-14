module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['goy', 'plugin:vue/strongly-recommended'],
  plugins: ['vue'],
  // add your custom rules here
  rules: {}
}
