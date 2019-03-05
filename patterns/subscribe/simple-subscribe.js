// 广播对象
let crop = {}

// 存放回调函数
crop.list = []

// 事件监听
crop.on = function(fn) {
  this.list.push(fn) // 将回调函数存储入事件列表中
}

crop.emit = function() {
  this.list.forEach(cb => {
    cb.apply(this, arguments)
  })
}

// test
crop.on((position, salary) => {
  console.log('您的职位是' + position)
  console.log('您期望的薪水是' + salary)
})

crop.on((skill, hobby) => {
  console.log('您的技能有' + skill)
  console.log('你的爱好是' + hobby)
})

crop.emit('前端', 10000)
crop.emit('歌手', '足球')
