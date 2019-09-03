/**
 * 去抖函数 时间段内连续执行的函数调用，只让其执行一次
 *
 * @param fn
 * @param delay
 */
export declare function debounce(fn: Function, delay: number): Function;
/**
 * 节流函数 时间段内连续执行的函数，让其以比较低的频率间断地执行
 *
 * @param fn
 * @param delay
 */
export declare function throttle(fn: Function, delay: number): Function;
