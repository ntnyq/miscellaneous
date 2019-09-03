/*
 * @Author: Emmet
 * @Date:   2016-11-16 13:21:26
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-11-16 13:46:37
 */

$(function() {
  $('ul li').mouseover(function() {
    $(this)
      .stop()
      .animate({ width: 600 }, 500)
    $(this)
      .siblings()
      .stop()
      .animate({ width: 100 }, 500)
  })
})
