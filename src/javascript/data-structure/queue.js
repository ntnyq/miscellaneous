/*
 * @Author: Emmet
 * @Date:   2017-01-19 23:33:10
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-01-19 23:40:26
 */
/**
 * [Queue JS模拟队列常用方法实现]
 */
function Queue() {
  var items = []

  this.enqueue = function(element) {
    items.push(element)
  }

  this.dequeue = function() {
    return this.shift()
  }

  this.front = function() {
    return items[0]
  }

  this.isEmpty = function() {
    return items.length === 0
  }

  this.clear = function() {
    items = []
  }

  this.size = function() {
    return items.length
  }

  this.print = function() {
    console.log(items.toString())
  }
}
