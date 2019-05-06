const loaderUtils = require('loader-utils')
const xml2js = require('xml2js')
const parser = new xml2js.Parser()

// 不要使用箭头函数 需要维护this指向
module.exports = function (source) {
  // source 为 compiler 传递给 Loader 的一个文件的原内容
  // 该函数需要返回处理后的内容
  const _this = this
  const options = loaderUtils.getOptions(_this) // 获取配置里的options
  _this.cacheable && _this.cacheable()

  parser.parseString(source, (err, result) => {
    _this.callback(err, !err && 'module.exports = ' + JSON.stringify(result))
  })

  return source
}
