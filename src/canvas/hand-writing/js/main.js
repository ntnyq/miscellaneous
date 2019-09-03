/*
 * @Author: Emmet
 * @Date:   2017-01-21 16:32:26
 * @Last Modified by:   M S I
 * @Last Modified time: 2017-11-05
 */
// 计算画布尺寸
var canvasWidth = Math.min(500, $(window).width() - 20)
var canvasHeight = canvasWidth
// 临时变量
var strokeColor = 'black'
var isMouseDown = false
var lastLoc = { x: 0, y: 0 }
var lastTimeStamp = 0
var lastLineWidth = -1
// 获取画布
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
// 设置画布尺寸
canvas.width = canvasWidth
canvas.height = canvasHeight

$('#controller').css('width', canvasWidth + 'px')
// 画出工作区域
drawGrid()
// 清除画布内内容
$('#clear_btn').click(function(e) {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)
  drawGrid()
})
// 点击选色按钮的样式改变
$('.color_btn').click(function(e) {
  $('.color_btn').removeClass('color_btn_selected')
  $(this).addClass('color_btn_selected')
  strokeColor = $(this).css('backgroundColor')
})

function beginStroke(point) {
  isMouseDown = true
  lastLoc = windowToCanvas(point.x, point.y)
  lastTimeStamp = new Date().getTime()
}

function endStroke() {
  isMouseDown = false
}

function moveStroke(point) {
  var curLoc = windowToCanvas(point.x, point.y)
  var curTimeStamp = new Date().getTime()
  var s = calcDistance(curLoc, lastLoc)
  var t = curTimeStamp - lastTimeStamp

  var lineWidth = calcLineWidth(t, s)
  console.log(lineWidth)

  // draw
  ctx.beginPath()
  ctx.moveTo(lastLoc.x, lastLoc.y)
  ctx.lineTo(curLoc.x, curLoc.y)

  ctx.strokeStyle = strokeColor
  ctx.lineWidth = lineWidth
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.stroke()

  lastLoc = curLoc
  lastTimeStamp = curTimeStamp
  lastLineWidth = lineWidth
}

canvas.onmousedown = function(e) {
  e.preventDefault()
  beginStroke({ x: e.clientX, y: e.clientY })
}

canvas.onmouseup = function(e) {
  e.preventDefault()
  endStroke()
}
canvas.onmouseout = function(e) {
  e.preventDefault()
  endStroke()
}
canvas.onmousemove = function(e) {
  e.preventDefault()
  if (isMouseDown) {
    moveStroke({ x: e.clientX, y: e.clientY })
  }
}

canvas.addEventListener('touchstart', function(e) {
  e.preventDefault()
  touch = e.touches[0]
  beginStroke({ x: touch.pageX, y: touch.pageY })
})
canvas.addEventListener('touchmove', function(e) {
  e.preventDefault()
  if (isMouseDown) {
    touch = e.touches[0]
    moveStroke({ x: touch.pageX, y: touch.pageY })
  }
})
canvas.addEventListener('touchend', function(e) {
  e.preventDefault()
  endStroke()
})

var maxLineWidth = 10
var minLineWidth = 3
var maxStrokeV = 10
var minStrokeV = 0.1

function calcLineWidth(t, s) {
  var v = s / t

  var resultLineWidth

  if (v <= minStrokeV) {
    resultLineWidth = maxLineWidth
  } else if (v >= maxStrokeV) {
    resultLineWidth = minLineWidth
  } else {
    resultLineWidth =
      maxLineWidth -
      ((v - minStrokeV) / (maxStrokeV - minStrokeV)) *
        (maxLineWidth - minLineWidth)
  }

  if (lastLineWidth == -1) {
    return resultLineWidth
  }
  return (resultLineWidth * 1) / 3 + (lastLineWidth * 2) / 3 // 平滑处理
}

function calcDistance(loc1, loc2) {
  return Math.sqrt(
    (loc1.x - loc2.x) * (loc1.x - loc2.x) +
      (loc1.y - loc2.y) * (loc1.y - loc2.y)
  )
}

function windowToCanvas(x, y) {
  var bbox = canvas.getBoundingClientRect()
  return { x: Math.round(x - bbox.left), y: Math.round(y - bbox.top) }
}

function drawGrid() {
  ctx.save()

  ctx.strokeStyle = 'rgb(230, 11, 9)'

  ctx.beginPath()
  ctx.moveTo(3, 3)
  ctx.lineTo(canvasWidth - 3, 3)
  ctx.lineTo(canvasWidth - 3, canvasHeight - 3)
  ctx.lineTo(3, canvasHeight - 3)
  ctx.closePath()

  ctx.lineWidth = 6
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(canvasWidth, canvasHeight)

  ctx.moveTo(canvasWidth, 0)
  ctx.lineTo(0, canvasHeight)

  ctx.moveTo(canvasWidth / 2, 0)
  ctx.lineTo(canvasWidth / 2, canvasHeight)

  ctx.moveTo(0, canvasHeight / 2)
  ctx.lineTo(canvasWidth, canvasHeight / 2)

  ctx.lineWidth = 1
  ctx.stroke()

  ctx.restore()
}
