/**
 * Random number by range
 * @param {number} min Min Number
 * @param {number} max Max Number
 */
export function random(min, max) {
  return ~~(Math.random() * (max - min) + min)
}

/**
 * Random color by range
 * @param {number} min Min Number
 * @param {number} max Max Number
 */
export function randomColor(min, max) {
  return `rgb(${random(min, max)}, ${random(min, max)}, ${random(min, max)})`
}

/**
 * Loop call function in given times
 * @param {number} length loop times
 * @param {function} fn function
 */
export function loopFn(length, fn) {
  Array.apply(null, { length }).map((_, idx) => {
    typeof fn === 'function' && fn.call(null, idx)
  })
}
