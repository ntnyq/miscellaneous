const babel = require('@babel/core')

const options = {
  presets: [
    [
      '@babel/preset-env',
      {
        // modules: false
      },
    ],
  ],
}

;(async () => {
  const result = await babel.transformFileAsync('src/index.js', options)

  console.log(result.code)
})()
