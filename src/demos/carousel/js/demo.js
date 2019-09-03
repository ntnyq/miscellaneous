/*
 * @Author: Emmet
 * @Date:   2017-01-02 14:06:40
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-01-02 15:45:48
 */
window.onload = function() {
  var oPics = document.getElementById('pics'),
    aImgs = oPics.getElementsByTagName('img'),
    aBtns = oPics.getElementsByTagName('span'),
    oCtrls = document.getElementById('controls'),
    aLi = oCtrls.getElementsByTagName('li'),
    iNow = 0, // 默认显示第1张图片
    timer = null
  // 鼠标移入图片区域显示控制器
  oPics.onmouseover = function() {
    clearInterval(timer)
    for (var i = 0; i < aBtns.length; i++) {
      aBtns[i].style.display = 'block'
    }
    oCtrls.style.display = 'block'
    for (var j = 0; j < aLi.length; j++) {
      // 利用自定义属性在事件函数内 来做索引
      aLi[j].index = j
      aLi[j].onmouseover = function() {
        /*aImgs[this.index].className = 'active';
        aLi[this.index].className = 'active';
        // 利用中间量的变化来记住上次点击的位置 再变化后更新这个量
        aLi[iNow].className ='';
        aImgs[iNow].className = '';
        iNow = this.index;*/
        showPic(this.index)
      }
    }
    // 上一张图片按钮
    aBtns[0].onclick = function() {
      /*var  index = iNow;
      if (index < 0) {
        iNow = 4;
      }else{
        index -= 1;
        if (index >= 0) {
          showPic(index);
        }else{
          index = 4;
          showPic(index);
        }
      }*/
      var index = iNow - 1
      /*if (index < 0) {
        index += 5;
        showPic(index);
      }else{
        showPic(index);
      }*/
      index < 0 ? (index += 5) : index
      showPic(index)
    }
    // 下一张图片按钮
    aBtns[1].onclick = function() {
      var index = iNow + 1
      index %= 5
      showPic(index)
    }
  }

  timer = setInterval(function() {
    var index = iNow + 1
    index %= 5
    showPic(index)
  }, 2000)
  // 鼠标移出后隐藏控制器
  oPics.onmouseout = function() {
    for (var i = 0; i < aBtns.length; i++) {
      aBtns[i].style.display = 'none'
    }
    oCtrls.style.display = 'none'
    timer = setInterval(function() {
      var index = iNow + 1
      index %= 5
      showPic(index)
    }, 2000)
  }
  /**
   * [showPic 显示图片和更新索引]
   * @param  {[type]} num [description]
   * @return {[type]}     [description]
   */
  function showPic(num) {
    aImgs[num].className = 'active'
    aLi[num].className = 'active'
    // 利用中间量的变化来记住上次点击的位置 再变化后更新这个量
    aLi[iNow].className = ''
    aImgs[iNow].className = ''
    iNow = num
  }
}
