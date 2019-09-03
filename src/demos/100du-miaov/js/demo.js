/*
 * @Author: Administrator
 * @Date:   2016-11-04 13:24:05
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-11-08 23:36:07
 */
$(function() {
  // 切换搜索框
  ;(function() {
    var aLi = $('#menu li')
    var iNow = 0
    var oText = $('#search').find('.form .text')
    var arrText = [
      '例如：荷棠鱼坊烧鱼 或 樱花日本料理',
      '例如：昌平区育新站龙旗广场2号楼609室',
      '例如：万达影院双人情侣券',
      '例如：东莞出事了，大老虎是谁？',
      '例如：北京初春降雪，天气变幻莫测',
    ]
    var iNow = 0
    oText.val(arrText[iNow]) //可以直接在后面写，因为JQ支持链式操作

    aLi.each(function(index) {
      $(this).click(function() {
        aLi.attr('class', '')
        $(this).attr('class', 'active')

        iNow = index
        oText.val(arrText[iNow])
      })
    })

    oText.focus(function() {
      //console.log(arrText[iNow]);
      if ($(this).val() == arrText[iNow]) {
        $(this).val('')
      }
    })
    oText.blur(function() {
      if ($(this).val() == '') {
        oText.val(arrText[iNow])
      }
    })
  })()

  //update滚动效果
  ;(function() {
    var oDiv = $('.update')
    var oUl = oDiv.find('ul')
    var iH = 0
    var arrData = [
      {
        name: '畅畅',
        time: 6,
        title: '那些灿烂华美的瞬间',
        url: 'http://www.miaov.com/2013/#message',
      },
      {
        name: '萱萱',
        time: 4,
        title: '那些灿烂华美的瞬间',
        url: 'http://www.miaov.com/2013/',
      },
      {
        name: '畅畅',
        time: 5,
        title: '广东3天抓获涉黄疑犯',
        url: 'http://www.miaov.com/2013/#curriculum',
      },
      {
        name: '萱萱',
        time: 7,
        title: '那些灿烂华美的瞬间',
        url: 'http://www.miaov.com/2013/',
      },
      {
        name: '畅畅',
        time: 8,
        title: '广东3天抓获涉黄疑犯',
        url: 'http://www.miaov.com/2013/#curriculum',
      },
    ]
    var str = ''
    var oBtnUp = $('#updateUpBtn')
    var oBtnDown = $('#updateDownBtn')
    var iNow = 0
    var timer = null
    for (var i = 0; i < arrData.length; i++) {
      str +=
        '<li><a href="' +
        arrData[i].url +
        '"><strong>' +
        arrData[i].name +
        '</strong><span>' +
        arrData[i].time +
        '分钟前</span>写了一篇新文章：' +
        arrData[i].title +
        '...</a></li>'
      //alert(arrData.length);
    }
    // console.log(str);
    oUl.html(str)
    iH = oUl.find('li').height()
    oBtnUp.click(function() {
      doMove(-1)
    })
    oBtnDown.click(function() {
      doMove(1)
    })

    function doMove(num) {
      iNow += num
      if (Math.abs(iNow) > arrData.length - 1) {
        //abs取绝对值
        iNow = 0
      }
      if (iNow > 0) {
        iNow = -(arrData.length - 1)
      }
      oUl
        .stop()
        .animate(
          { top: iH * iNow },
          2000,
          'elasticOut'
        ) /*加stop避免点击多下后动画依然执行*/
    }
    function autoPlay() {
      timer = setInterval(function() {
        doMove(-1)
      }, 1500)
    }
    oDiv.hover(function() {
      clearInterval(timer)
    }, autoPlay) //注意这里函数没加括号

    autoPlay()
  })()

  //选项卡切换
  ;(function() {
    fnTab($('.tabNav1'), $('.tabCon1')) //函数可复用
    fnTab($('.tabNav2'), $('.tabCon2'))

    function fnTab(oNav, aCon) {
      var aElem = oNav.children()
      aCon
        .hide()
        .eq(0)
        .show()

      aElem.each(function(index) {
        $(this).click(function() {
          aElem.removeClass('active').addClass('')
          $(this)
            .removeClass('')
            .addClass('active')
          aElem.find('a').attr('class', 'triangle-down-gray')
          $(this)
            .find('a')
            .attr('class', 'triangle-down-red')
          aCon
            .hide()
            .eq(index)
            .show()
        })
      })
    }
  })()

  //焦点图切换
  ;(function() {
    var oDiv = $('#fade')
    var aUlLi = oDiv.find('ul li')
    var aOlLi = oDiv.find('ol li')
    var oP = oDiv.find('p')
    var arr = ['爸爸去哪儿啦~', '人像摄影中的光影感', '娇柔妩媚、美艳大方']
    var iNow = 0
    var timer = null

    fnFade()

    aOlLi.click(function() {
      iNow = $(this).index()
      fnFade()
    })
    oDiv.hover(function() {
      clearInterval(timer)
    }, autoPlay)
    function fnFade() {
      aUlLi.each(function(i) {
        if (i != iNow) {
          aUlLi
            .eq(i)
            .fadeOut()
            .css('zIndex', '1')
          aOlLi.eq(i).removeClass('active')
        } else {
          aUlLi
            .eq(i)
            .fadeIn()
            .css('zIndex', '2')
          aOlLi.eq(i).addClass('active')
        }
      })
      oP.text(arr[iNow])
    }
    function autoPlay() {
      timer = setInterval(function() {
        iNow++
        iNow %= arr.length
        fnFade()
      }, 1000)
    }
    autoPlay()
  })()

  //日历提示层
  ;(function() {
    var aSpan = $('.calender h3 span')
    var aImg = $('.calender .img')
    var oPrompt = $('.today-info')
    var oImg = oPrompt.find('img')
    var oStrong = oPrompt.find('strong')
    var oP = oPrompt.find('p')

    aImg.hover(
      function() {
        var iTop =
          $(this)
            .parent()
            .position().top - 30
        var iLeft =
          $(this)
            .parent()
            .position().left + 55

        oPrompt.show().css({ left: iLeft, top: iTop })
        oP.text($(this).attr('info'))
        oImg.attr('src', $(this).attr('src'))
        var index =
          $(this)
            .parent()
            .index() % aSpan.length //注意父级关系
        // console.log(index);
        oStrong.text(aSpan.eq(index).text())
      },
      function() {
        oPrompt.hide()
      }
    )
  })()

  //BBS高亮显示
  ;(function() {
    $('.bbs ol li').mouseover(function() {
      $('.bbs ol li')
        .removeClass('active')
        .eq($(this).index())
        .addClass('active')
    })
  })()

  //图片遮罩层
  ;(function() {
    var arr = [
      '',
      '用户1<br />人气1',
      '用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
      '用户3<br />人气3',
      '用户4<br />人气4',
      '用户5<br />人气5',
      '用户6<br />人气6',
      '用户7<br />人气7',
      '用户8<br />人气8',
      '用户9<br />人气9',
      '用户10<br />人气10',
    ]
    $('.hot-area li').mouseover(function() {
      if ($(this).index() == 0) {
        return
      }
      $(this).index()
      $('.hot-area li p').remove()
      $(this).append(
        '<p style="width:' +
          ($(this).width() - 12) +
          'px;height:' +
          ($(this).height() - 12) +
          'px">' +
          arr[$(this).index()] +
          '</p>'
      )
    })
  })()
})
