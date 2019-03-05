// 广播对象
let crop = {}

// 存放回调函数
crop.list = {}

// 事件监听
crop.on = function(key, fn) {
  if (!this.list[key]) {
    this.list[key] = []
  }
  this.list[key].push(fn) // 将回调函数存储入对应的事件列表中
}

crop.emit = function() {
  const [key, ...params] = arguments,
    fns = this.list[key]

  if (!fns || !fns.length) {
    return false
  }

  fns.forEach(fn => {
    fn.apply(this, params)
  })
}

// test
crop.on('join', (position, salary) => {
  console.log('您的职位是' + position)
  console.log('您期望的薪水是' + salary)
})

crop.on('other', (skill, hobby) => {
  console.log('您的技能有' + skill)
  console.log('你的爱好是' + hobby)
})

crop.emit('join', '前端', 10000)
crop.emit('other', '歌手', '足球')
