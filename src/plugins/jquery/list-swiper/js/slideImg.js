/*
 * @Author: Emmet
 * @Date:   2016-12-17 12:59:35
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-12-17 14:43:19
 */

$(function() {
  var cw = $('.vContentList').width()
  var page = 0
  var i = 4
  $('span.next').click(function() {
    var $parent = $(this).parents('div.vShow')
    // 获取播放列表
    var $vShow = $parent.find('div.vContentList ul')
    var $vContent = $parent.find('div.vContent')
    // 获取列表项的个数
    var len = $vShow.find('li').length
    var pageConut = Math.ceil(len / i)
    if (!$vShow.is(':animated')) {
      page++
      page %= pageConut
      $vShow.animate({ left: page * -cw }, 600)
      $parent
        .find('span')
        .eq(page)
        .addClass('cur')
        .siblings()
        .removeClass('cur')
    }
  })
})
$(function() {
  var cw = $('.vContentList').width()
  var page = 0
  var i = 4
  $('span.prev').click(function() {
    var $parent = $(this).parents('div.vShow')
    // 获取播放列表
    var $vShow = $parent.find('div.vContentList ul')
    var $vContent = $parent.find('div.vContent')
    // 获取列表项的个数
    var len = $vShow.find('li').length
    var pageConut = Math.ceil(len / i)
    if (!$vShow.is(':animated')) {
      if (page === 0) {
        page = 3
        $vShow.animate({ left: page * -cw }, 600)
      } else {
        page--
        page %= pageConut
        $vShow.animate({ left: page * -cw }, 600)
      }
      $parent
        .find('span')
        .eq(page)
        .addClass('cur')
        .siblings()
        .removeClass('cur')
    }
  })
})
