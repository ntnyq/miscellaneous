let event = {
  list: {},

  on(key, fn) {
    if (!this.list[key]) {
      this.list[key] = []
    }

    this.list[key].push(fn)
  },

  emit() {
    let key = [].shift.call(arguments),
      fns = this.list[key]

    if (!fns || !fns.length) {
      return false
    }

    fns.forEach(fn => {
      fn.apply(this, arguments)
    })
  },

  remove(key, fn) {
    let fns = this.list[key]

    if (!fns) return false

    if (!fn) {
      fns && (fns = [])
    } else {
      fns.forEach((cb, i) => {
        if (cb === fn) {
          fns.splice(i, 1)
        }
      })
    }
  },
}

// test
function cat() {
  console.log('一起喵喵喵')
}

function dog() {
  console.log('一起汪汪汪')
}

event.on('pet', data => {
  console.log('接收数据')
  console.log(data)
})

event.on('pet', dog)
event.on('pet', cat)

event.remove('pet', dog)

event.emit('pet', ['二哈', '波斯猫'])
