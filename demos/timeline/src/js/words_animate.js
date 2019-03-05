/*
 * @Author: ntnyq<qq: 1210485244 email: lssham@qq.com>
 * @Date:   2017-09-01
 * @Last Modified by:   M S I
 * @Last Modified time: 2017-09-01
 */
/* 获取元素 */
const $ = dom => document.querySelector(dom)

const WordsTyper = function(dom, options) {
  const defaults = {
    // 默认配置
    chars: '!<>-_\\/[]{}-=+*^?#_____',
    delay: 200,
    words: ['作者', 'ntnyq', 'QQ', '1210485244', '欢迎交流'],
    color: '#fafafa',
    background: '#212121',
  }
  options = options || {}
  this.el = $(dom)
  // Object.assign方法会顺序合共对象的可枚举属性 后面的会覆盖前面的
  this.cfg = Object.assign({}, defaults, options)
  this.update = this.update.bind(this)
}

WordsTyper.prototype = {
  init() {
    // let parent = this.el.parentNode;
    // parent.style.backgroundColor = this.cfg.background;
  },

  setText(newText) {
    const oldText = this.el.innerText // 保存旧文本
    const length = Math.max(oldText.length, newText.length) // 新旧文本的长度
    const promise = new Promise(resolve => (this.resolve = resolve)) // promise
    this.queue = [] // 定义一个队列
    Array.from(new Array(length)).forEach((item, idx) => {
      const from = oldText[idx] || '' // 旧的位置
      const to = newText[idx] || ''
      const start = Math.floor(Math.random() * 40) // 获取随机数字
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end }) // es6的对象扩展语法
    })
    cancelAnimationFrame(this.frameRequest) // 取消关键帧动画
    this.frame = 0

    this.update() // 更新
    return promise // 每次完成后 返回promise对象
  },

  update() {
    let output = '',
      complete = 0

    for (var i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]

      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="symbol">${char}</span>`
      } else {
        output += from
      }
    }

    this.el.innerHTML = output

    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  },

  randomChar() {
    return this.cfg.chars[Math.floor(Math.random() * this.cfg.chars.length)]
  },
}

const words = ['苟利国家', '生死以', '岂因', '福祸', '避趋之', '我劝你最好江公补过']

let wt = new WordsTyper('#text', { words })

let counter = 0

const next = () => {
  wt.setText(words[counter]).then(() => {
    setTimeout(next, 888)
  })
  counter = (counter + 1) % words.length
}

next()
