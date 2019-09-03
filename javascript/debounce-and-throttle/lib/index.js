'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
/**
 * 去抖函数 时间段内连续执行的函数调用，只让其执行一次
 *
 * @param fn
 * @param delay
 */
function debounce(fn, delay) {
  var timer = null
  return function() {
    clearTimeout(timer)
    timer = setTimeout(fn, delay)
  }
}
exports.debounce = debounce
/**
 * 节流函数 时间段内连续执行的函数，让其以比较低的频率间断地执行
 *
 * @param fn
 * @param delay
 */
function throttle(fn, delay) {
  var last = 0
  return function() {
    var current = Date.now()
    if (current - last > delay) {
      fn()
      last = current
    }
  }
}
exports.throttle = throttle
