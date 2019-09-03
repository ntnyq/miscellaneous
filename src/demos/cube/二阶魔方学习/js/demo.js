/*
 * @Author: Emmet
 * @Date:   2016-11-21 23:49:10
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-11-22 00:45:14
 */

window.onload = function() {
  var flag = false //是否启动拖曳
  document.addEventListener(
    'mousedown',
    function() {
      flag = true
    },
    false
  )
  document.addEventListener(
    'mouseup',
    function() {
      flag = false
    },
    false
  )
  var div = document.querySelector('div')
  //给DOM对象绑定鼠标移动事件
  document.addEventListener(
    'mousemove',
    function move(e) {
      if (!flag) {
        move.lastX = e.x
        move.lastY = e.y
        return
      }
      var transform = getComputedStyle(div).getPropertyValue('transform')

      console.log(
        transform +
          'rotateX(' +
          (move.lastY - e.y) / 5 +
          'deg) rotateY(' +
          (e.x - move.lastX) / 5 +
          'deg)'
      )

      div.style.setProperty(
        'transform',
        transform +
          'rotateX(' +
          (move.lastY - e.y) / 5 +
          'deg) rotateY(' +
          (e.x - move.lastX) / 5 +
          'deg)'
      )
      move.lastX = e.x
      move.lastY = e.y
    },
    false
  )
}
