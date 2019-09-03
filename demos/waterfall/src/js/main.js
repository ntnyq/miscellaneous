/*
 * @Author: Emmet
 * @Date:   2017-03-04 15:19:05
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-03-05 16:31:23
 */
window.onload = function() {
  var aLi = document.querySelectorAll('li') // 获取所有的li
  var aLiH = [] // 定义数组 保存li的高度
  var flag = true // 设置标志 以防滚动事件触发时候图片多次加载

  // 一组假数据
  var data = [
    {
      src: '1.jpg',
      width: 554,
      height: 739,
      title: '再看我就吃掉你~',
    },
    {
      src: '2.jpg',
      width: 560,
      height: 314,
      title: '你还没给我晚安亲亲呢~',
    },
    {
      src: '3.jpg',
      width: 440,
      height: 532,
      title: '少小离家老大回~',
    },
    {
      src: '4.jpg',
      width: 559,
      height: 668,
      title: '陪我一起写代码吗~',
    },
    {
      src: '5.jpg',
      width: 315,
      height: 337,
      title: '你敢继续拉下去吗？',
    },
    {
      src: '6.jpg',
      width: 200,
      height: 200,
      title: '黄河入海流~',
    },
    {
      src: '7.jpg',
      width: 439,
      height: 641,
      title: '白日依山尽~',
    },
    {
      src: '8.jpg',
      width: 510,
      height: 741,
      title: '每逢佳节倍思亲~',
    },
    {
      src: '9.jpg',
      width: 423,
      height: 600,
      title: '断剑重铸之日',
    },
    {
      src: '10.jpg',
      width: 400,
      height: 565,
      title: '小荷才露尖尖角~',
    },
    {
      src: '11.jpg',
      width: 716,
      height: 640,
      title: '疑是地上霜~',
    },
    {
      src: '12.jpg',
      width: 604,
      height: 477,
      title: '床前明月光~',
    },
    {
      src: '13.jpg',
      width: 440,
      height: 622,
      title: '水墨风格~',
    },
    {
      src: '14.jpg',
      width: 500,
      height: 750,
      title: '骑士归来之时~',
    },
    {
      src: '15.jpg',
      width: 440,
      height: 586,
      title: '我吓得快从树上掉下来了~',
    },
    {
      src: '16.jpg',
      width: 401,
      height: 600,
      title: '搏击俱乐部~',
    },
  ]

  // 加载首屏图片 12张
  for (let i = 0, len = 12; i < len; i++) {
    loadImg()
  }

  /**
   * [onscroll 监听滚动事件 满足条件继续加载图片]
   * @return {[type]} [description]
   */
  window.onscroll = function() {
    var iNum = 12 // 每次加载的图片数目

    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop // 页面滚上去的高度
    var cHeight = document.documentElement.clientHeight // 可视区域的高度

    var idx = getShortLi() // 获取最短的li的索引

    var top = getTop(aLi[idx]) // 获取最短li距离顶部的高度

    // 若li的高度加上到顶部的距离 小于 可视区域的高度加上滚上去的高度 则继续加载图片
    if (top + aLi[idx].offsetHeight < cHeight + scrollTop) {
      if (flag) {
        for (let i = 0; i < iNum; i++) {
          loadImg()
          flag = false // 触发一次事件后关闭标志
        }
        flag = true // 全部加载完毕 打开标志
      }
    }
  }

  /**
   * [loadImg 导入随机图片并添加信息至li]
   * @return {[type]} [description]
   */
  function loadImg() {
    var liW = aLi[0].clientWidth - 15 // 获取li的宽度 15是padding值和border

    idx = getShortLi() // 获取最低的li的索引

    var num = getRandomNum(16) - 1 // 获取随机图片索引

    var img = document.createElement('img') // 创建img设置宽和高
    img.src = 'src/img/' + data[num].src
    img.style.width = liW + 'px'
    img.style.height = data[num].height * (liW / data[num].width) + 'px'

    var p = document.createElement('p') // 创建p标签保存文字
    p.innerHTML = data[num].title

    var div = document.createElement('div') // 创建容器
    div.appendChild(img)
    div.appendChild(p)

    aLi[idx].appendChild(div) // 将div容器及内容附加到最短的li上
  }

  /**
   * [getRandomNum 获取范围内随机数字]
   * @param  {[type]} b [description]
   * @return {[type]}   [description]
   */
  function getRandomNum(max) {
    return Math.floor(Math.random() * max + 1)
  }

  /**
   * [getShortLi 获取长度最短的li]
   * @return {[type]} [description]
   */
  function getShortLi() {
    aLi.forEach(function(ele, idx) {
      aLiH.push(ele.offsetHeight)
    })

    var minH = Math.min(...aLiH) // 利用math对象求出最小的高度

    var minIdx = '' // 最小高度的li的索引

    aLi.forEach(function(ele, idx) {
      ele.offsetHeight === minH && (minIdx = idx) // 对比求最小高度的索引
      aLiH = []
    })

    return minIdx // 返回索引
  }

  /**
   * [getTop 获取到页面根部的偏移量]
   * @param  {[type]} obj [description]
   * @return {[type]}     [description]
   */
  function getTop(obj) {
    var top = 0
    var oParent = obj.offsetParent

    while (oParent) {
      top += obj.offsetTop
      obj = obj.offsetParent
      oParent = oParent.offsetParent
    }
    return top
  }
}
