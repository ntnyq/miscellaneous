/**
 * 二分法查找用于在 有序数组 中查找特定元素的搜索方法
 *
 * 查找步骤：
 * 1. 从数组中间开始查找，若找到则结束，若未找到，则进行下一步
 * 2. 若查找元素大于或者小于目标元素，则从包含目标元素的新区间重复步骤1
 * 3. 若某一步数组为空，则表示找不到目标元素
 *
 * @Date 2019/02/13
 */

/**
 * 循环二分法搜索
 * @param  {Array} arr 被查找的素组
 * @param  {String || Number} key 目标元素
 * @return {[Number]}  目标元素在数组中索引，不存在则为-1
 */
function binarySearchLoop(arr, key) {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    const mid = ~~((low + high) / 2) // shortcut of Math.floor()
    const target = arr[mid]

    if (key === target) {
      return mid
    } else if (key > target) {
      low = mid + 1
    } else if (key < target) {
      high = mid - 1
    } else {
      return -1
    }
  }
}

/**
 * 递归二分法搜索
 * @param  {Array} arr 被查找的素组
 * @param  {String || Number} key 目标元素
 * @param  {Number} high 搜索区间结束索引
 * @param  {Number} low  搜索区间开始索引
 * @return {[Number]}  目标元素在数组中索引，不存在则为-1
 */
function binarySearchRecursive(arr, key, high, low = 0) {
  if (low > high) return -1

  const mid = ~~((low + high) / 2)
  const target = arr[mid]

  if (key === target) {
    return mid
  } else if (key > target) {
    low = mid + 1
    return binarySearchRecursive(arr, key, high, low)
  } else if (key < target) {
    high = mid - 1
    return binarySearchRecursive(arr, key, high, low)
  } else {
    return -1
  }
}
