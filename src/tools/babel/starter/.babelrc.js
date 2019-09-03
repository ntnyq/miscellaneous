module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: false,
        },
        useBuiltIns: 'usage',
      },
    ],
  ],
  plugins: [['@babel/plugin-transform-runtime']],
}
