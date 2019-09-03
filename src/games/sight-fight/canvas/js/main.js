'use strict'

var Game = function Game(query, callback) {
  var countDown = void 0,
    cc = document.querySelector(query),
    cc2 = cc.cloneNode(false),
    width = cc.width,
    height = cc.height,
    ctx = cc.getContext('2d'),
    rows = 2,
    cols = 2,
    isGameOver = !0,
    changeValue = 2,
    diff = {},
    core = 0,
    _timer = void 0,
    cp = void 0

  var fillColor = function fillColor(w, h, color) {
    cc2.width = w
    cc2.height = h

    var ctx2 = cc2.getContext('2d'),
      PI2 = Math.PI * 2

    ctx2.strokeStyle = '#fff'
    ;(ctx2.fillStyle = color), ctx2.beginPath()
    ctx2.fillRect(0, 0, w, h)
    ctx2.beginPath()
    ctx2.strokeRect(0, 0, w, h)
    ctx2.fillStyle = '#fff'
    ctx2.beginPath()
    ctx2.arc(0, 0, 2, 0, PI2)
    ctx2.arc(w, 0, 2, 0, PI2)
    ctx2.fill()
    ctx2.beginPath()
    ctx2.arc(0, h, 2, 0, PI2)
    ctx2.arc(w, h, 2, 0, PI2)
    ctx2.fill()
  }

  var goAndPlay = function goAndPlay() {
    var colors = getColors(),
      dx = void 0,
      dy = void 0

    diff.x = (rows * Math.random()) | 0
    diff.y = (cols * Math.random()) | 0
    diff.w = (width / rows++ + 0.5) | 0
    diff.h = (height / cols++ + 0.5) | 0

    fillColor(diff.w, diff.h, colors.color)

    ctx.beginPath()
    cp = ctx.createPattern(cc2, 'repeat')
    ctx.fillStyle = cp
    ctx.fillRect(0, 0, width, height)

    ctx.beginPath()
    ctx.fillStyle = colors.color2
    ctx.fillRect(
      diff.w * diff.x + 3,
      diff.h * diff.y + 3,
      diff.w - 6,
      diff.h - 6
    )
  }

  var getColors = function getColors() {
    var result = {},
      color = [],
      color2 = void 0

    color[0] = (Math.random() * 360) | 0
    color[1] = (Math.random() * 50) | (0 + 50)
    color[2] = (Math.random() * 90) | 0
    color2 = color.slice() // copy array
    color[1] += '%'
    color[2] += '%)'

    color2[2] += color2[2] - changeValue < 0 ? changeValue : -changeValue
    color2[1] += '%'
    color2[2] += '%)'

    result.color = 'hsl(' + color.join(',')
    result.color2 = 'hsl(' + color2.join(',')
    changeValue = Math.max(0.001, changeValue - 0.02)

    return result
  }

  cc.addEventListener(
    'click',
    function(e) {
      if (!isGameOver) {
        var bound = this.getBoundingClientRect(),
          scale = width / bound.width,
          sx = (e.clientX - bound.left) * scale,
          sy = (e.clientY - bound.top) * scale

        if (
          sx > diff.w * diff.x &&
          sy > diff.h * diff.y &&
          sx < diff.w * (diff.x + 1) &&
          sy < diff.w * (diff.y + 1)
        ) {
          callback && callback(++core, countDown)
          goAndPlay()
        }
      }
    },
    !1
  )

  this.start = function(second) {
    if (isGameOver) {
      isGameOver = !1
      countDown = second
      rows = 2
      cols = 2
      changeValue = 2
      core = 0

      _timer = setInterval(function() {
        if (countDown < 1) {
          isGameOver = !0
          clearInterval(_timer)
          callback && callback(core, 0)
        } else {
          callback && callback(core, countDown--)
        }
      }, 1000)

      goAndPlay()
    }
  }
}

var span = document.querySelectorAll('span'),
  game = new Game('.stage', function(core, countDown) {
    span[0].textContent = core
    span[1].textContent = countDown

    if (!countDown) {
      alert(
        core > 30
          ? '厉害了我的哥'
          : core > 20
          ? '还有两把刷子'
          : core > 10
          ? '一般啦'
          : '跪了把？哈哈哈！！！'
      )
    }
  })

document.querySelector('input').addEventListener(
  'click',
  function() {
    game.start(30)
  },
  !1
)
