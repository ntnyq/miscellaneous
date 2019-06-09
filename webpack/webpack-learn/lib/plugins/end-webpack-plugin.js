class EndWebpackPlugin {
  constructor(doneCallback, failedCallback) {
    this.doneCallback = doneCallback
    this.failedCallback = failedCallback
  }

  apply(compiler) {
    compiler.hooks.done.tap('EndWebpackPlugin', stats => {
      this.doneCallback(stats)
    })

    compiler.hooks.failed.tap('EndWebpackPlugin', err => {
      this.failedCallback(stats)
    })
  }
}

module.exports = EndWebpackPlugin
