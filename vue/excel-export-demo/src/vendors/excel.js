import XLSX from 'xlsx'

const win = window
const doc = win.document

export default function download(json, fileName) {
  const type = 'xlsx' // 定义导出文件的格式
  var tmpDown // 导出的内容
  var tmpData = json[0]
  json.unshift({})
  var keyMap = [] // 获取keys
  for (var k in tmpData) {
    keyMap.push(k)
    json[0][k] = k
  }
  tmpData = [] // 用来保存转换好的json

  json
    .map((v, i) =>
      keyMap.map((k, j) =>
        Object.assign(
          {},
          {
            v: v[k],
            position: (j > 25 ? getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1),
          },
        ),
      ),
    )
    .reduce((prev, next) => prev.concat(next))
    .forEach(v => (tmpData[v.position] = { v: v.v }))

  const outputPos = Object.keys(tmpData) // 设置区域 比如A1-D10
  const tmpWB = {
    SheetNames: ['mySheet'], // 表标题
    Sheets: {
      mySheet: Object.assign({}, tmpData, {
        '!ref': `${outputPos[0]}:${outputPos[outputPos.length - 1]}`, // 设置填充区域
      }),
    },
  }

  tmpDown = new Blob(
    [
      s2ab(
        XLSX.write(tmpWB, {
          bookType: type ? 'xlsx' : type,
          bookSST: false, // 格式化
          type: 'binary',
        }),
      ),
    ],
    {
      type: '',
    },
  ) // 创建二进制对象写入转换好的字节流

  saveAs(tmpDown, fileName)
}

/**
 *
 * @param {*} obj
 * @param {*} fileName
 */
function saveAs(obj, fileName) {
  const link = doc.createElement('a')
  link.download = fileName || '下载'
  link.href = win.URL.createObjectURL(obj)
  link.click()

  setTimeout(() => {
    win.URL.revokeObjectURL(obj) // 释放object URL
  }, 1e2)
}

/**
 * 字符串转字节流
 * @param {*} s
 */
function s2ab(s) {
  const buf = new ArrayBuffer(s.length)
  const view = new Uint8Array(buf)

  for (let i = 0; i !== s.length; ++i) {
    view[i] = s.charCodeAt(i) & 0xff
  }

  return buf
}

/**
 *
 * @param {*} n
 */
function getCharCol(n) {
  let s = ''
  let m = 0

  while (n > 0) {
    m = (n % 26) + 1
    s = String.fromCharCode(m + 64) + s
    n = (n - m) / 26
  }

  return s
}
