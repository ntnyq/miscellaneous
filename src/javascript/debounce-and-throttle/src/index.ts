/**
 * 去抖函数 时间段内连续执行的函数调用，只让其执行一次
 *
 * @param fn
 * @param delay
 */
export function debounce (fn: Function, delay: number): Function {
  let timer: any = null
  return (() => {
    clearTimeout(timer)
    timer = setTimeout(fn, delay)
  })
}


/**
 * 节流函数 时间段内连续执行的函数，让其以比较低的频率间断地执行
 *
 * @param fn
 * @param delay
 */
export function throttle (fn: Function, delay: number): Function {
  let last: number = 0

  return (() => {
    let current: number = Date.now()
    if (current - last > delay) {
      fn()
      last = current
    }
  })
}
