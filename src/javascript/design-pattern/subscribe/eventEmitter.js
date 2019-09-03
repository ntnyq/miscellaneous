function EventEmitter() {
  // 创建空对象，不继承原型链
  this._events = Object.create(null)
}

// 默认的最多事件绑定次数
EventEmitter.defaultMaxListeners = 10

// 返回监听的事件名
EventEmitter.prototype.eventNames = function() {
  return Object.keys(this._events)
}

// 重设最大监听数
EventEmitter.prototype.setMaxListeners = function(n) {
  this._count = n
}

// 返回最大监听数
EventEmitter.prototype.getMaxListeners = function() {
  return this._count ? this._count : this.defaultMaxListeners
}

// 监听事件
EventEmitter.prototype.on = function(type, cb, flag) {
  if (!this._events) {
    this._events = Object.create(null)
  }
  // 不是newListener就应该让newListener执行以下
  if (type !== 'newListener') {
    this._events['newListener'] &&
      this._events['newListener'].forEach(listener => {
        listener(type)
      })
  }

  if (this._events[type]) {
    // 根据flag判断事件添加顺序
    if (flag) {
      this._events[type].unshift(cb)
    } else {
      this._events[type].push(cb)
    }
  } else {
    this._events[type] = [cb]
  }

  if (this._events[type].length === this.getMaxListeners()) {
    console.log('警告-警告-警告')
  }
}

// 向前添加事件
EventEmitter.prototype.prependListener = function(type, cb) {
  this.on(type, cb, true)
}

EventEmitter.prototype.prependOnceListener = function(type, cb) {
  this.on(type, cb, true)
}

// 监听一次
EventEmitter.prototype.once = function(type, cb, flag) {
  // 先绑定 调用后删除
  function wrap() {
    cb(...arguments)
    this.removeListener(type, cb)
  }

  // 自定义属性
  wrap.listen = cb
  this.on(type, wrap, flag)
}

// 删除监听类型
EventEmitter.prototype.removeListener = function(type, cb) {
  if (this._events[type]) {
    this._events[type] = this._events[type].filter(listener => {
      return cb !== listener && cb !== listener.listen
    })
  }
}

// 删除所有事件监听
EventEmitter.prototype.removeAllListener = function() {
  this._events = Object.create(null)
}

// 返回所有的监听类型
EventEmitter.prototype.listeners = function(type) {
  return this._events[type]
}

// 触发事件
EventEmitter.prototype.emit = function(type, ...args) {
  if (this._events[type]) {
    this._events[type].forEach(listener => {
      listener.call(this, ...args)
    })
  }
}

EventEmitter.prototype.addEventListener = EventEmitter.prototype.on

// 模块导出
module.exports = EventEmitter
