/*
 * @Author: Emmet
 * @Date:   2016-11-12 11:11:56
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-06-10 22:47:02
 */

window.onload = function() {
  var obtn = document.getElementById('btn')
  var clientHeight = document.documentElement.clientHeight //获取可视窗口的高度
  obtn.style.display = 'none'
  var timer = null
  var isTop = true

  // 滚动条 滚动时候触发滚动事件     用户滚动滚轮的处理
  window.onscroll = function() {
    if (!isTop) {
      clearInterval(timer) // 滚动条不在顶端，停止滚动
    }
    isTop = false
    var osTop = document.documentElement.scrollTop || document.body.scrollTop
    if (osTop >= clientHeight) {
      obtn.style.display = 'block'
    } else {
      obtn.style.display = 'none'
    }
  }

  // 按钮的点击事件
  obtn.onclick = function() {
    //设置定时器
    timer = setInterval(function() {
      //获取滚动条距离顶端高度
      var osTop = document.documentElement.scrollTop || document.body.scrollTop
      if (osTop >= clientHeight) {
        obtn.style.display = 'block'
      } else {
        obtn.style.display = 'none'
      }
      var ispeed = Math.floor(-osTop / 5) //数学函数，去掉小数点后的部分
      //用负数是为了让距离浏览器顶部的数值可以达到0，这个可以在控制台打印出来看
      document.documentElement.scrollTop = document.body.scrollTop =
        osTop + ispeed
      isTop = true
      if (osTop === 0) {
        clearInterval(timer)
      } //判断放在里面获得osTop的最终值  否则得到的会是数组
    }, 30)
  }
}
