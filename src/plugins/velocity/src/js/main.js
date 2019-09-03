/*
 * @Author: Emmet
 * @Date:   2017-07-15 22:40:40
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-07-16 00:34:29
 */

;(function($) {
  /* 获取元素 */

  var $container = $('.container'),
    $pop = $('.pop'),
    $box = $('.box'),
    $buddy = $('.buddy'),
    $open = $('.btn'),
    $close = $('.close'),
    $imgs = $pop.find('img')

  /* 自定义动画 */

  $.Velocity.RegisterUI('ntnyq.slideUpIn', {
    defaultDuration: 500,
    calls: [
      [
        {
          opacity: [1, 0],
          translateY: [0, 100],
        },
      ],
    ],
  })

  $.Velocity.RegisterUI('ntnyq.slideDownOut', {
    defaultDuration: 400,
    calls: [
      [
        {
          opacity: [0, 1],
          translateY: [100, 0],
        },
      ],
    ],
  })

  $.Velocity.RegisterUI('ntnyq.scaleIn', {
    defaultDuration: 400,
    calls: [
      [
        {
          opacity: [1, 0], // 两个参数后面是开始 前面是结束时候
          scale: [1, 0.3],
        },
      ],
    ],
  })

  $.Velocity.RegisterUI('ntnyq.scaleOut', {
    defaultDuration: 400,
    calls: [
      [
        {
          opacity: [0, 1], // 两个参数后面是开始 前面是结束时候
          scale: [0.3, 1],
        },
      ],
    ],
  })

  /* 定义各种动画序列 */

  var seqInit = [
    {
      elements: $container,
      properties: 'ntnyq.slideUpIn',
      options: {
        delay: 300,
      },
    },
    {
      elements: $box,
      properties: 'ntnyq.slideUpIn',
      options: {
        sequenceQueue: false, // 不使用队列顺序
      },
    },
    {
      elements: $buddy,
      properties: 'ntnyq.slideUpIn',
      options: {
        delay: 60,
      },
    },
  ]

  var seqClick = [
    {
      elements: $container,
      properties: 'ntnyq.slideDownOut',
    },
    {
      elements: $box,
      properties: 'ntnyq.slideDownOut',
      options: {
        sequenceQueue: false, // 不使用队列顺序
      },
    },
    {
      elements: $container,
      properties: 'ntnyq.slideUpIn',
    },
    {
      elements: $pop,
      properties: 'ntnyq.slideUpIn',
      options: {
        sequenceQueue: false, // 不使用队列顺序 与前面同时执行
      },
    },
    {
      elements: $imgs,
      properties: 'ntnyq.scaleIn',
    },
  ]

  var seqClose = [
    {
      elements: $imgs,
      properties: 'ntnyq.scaleOut',
    },
    {
      elements: $container,
      properties: 'ntnyq.slideDownOut',
    },
    {
      elements: $pop,
      properties: 'ntnyq.slideDownOut',
      options: {
        sequenceQueue: false, // 不使用队列顺序
      },
    },
    {
      elements: $container,
      properties: 'ntnyq.slideUpIn',
    },
    {
      elements: $box,
      properties: 'ntnyq.slideUpIn',
      options: {
        sequenceQueue: false, // 不使用队列顺序 与前面同时执行
      },
    },
  ]

  /* 定义动画序列发生条件 */

  $.Velocity.RunSequence(seqInit)

  $open.click(function(e) {
    // 点击执行动画
    $.Velocity.RunSequence(seqClick)
  })

  $close.click(function(e) {
    $.Velocity.RunSequence(seqClose)
  })
})(jQuery)
