/*
 * @Author: Emmet
 * @Date:   2017-05-20 10:48:07
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-05-20 11:17:06
 */

/*创建画布，设置尺寸*/
var canvas = document.createElement('canvas'),
  cc = canvas.getContext('2d')

canvas.width = 512
canvas.height = 480

document.body.appendChild(canvas)

/*设置背景图片*/
var bgReady = false
var bgImage = new Image()
bgImage.onload = function() {
  bgReady = true
}
bgImage.src = 'img/background.png'

/*设置怪物图片*/
var monsterReady = false
var monsterImage = new Image()
monsterImage.onload = function() {
  monsterReady = true
}
monsterImage.src = 'img/monster.png'

/*设置英雄照片*/
var heroReady = false
var heroImage = new Image()
heroImage.onload = function() {
  heroReady = true
}
heroImage.src = 'img/hero.png'

/*游戏对象*/

var hero = {
  speed: 256, // 英雄移动速度
}
var monster = {}
var monsterCaught = 0

var keysDown = {} // 处理键盘控制

addEventListener(
  'keydown',
  function(e) {
    keysDown[e.keyCode] = true
  },
  false
)

addEventListener(
  'keyup',
  function(e) {
    delete keysDown[e.keyCode]
  },
  false
)

/*当英雄捉住怪兽后重置游戏*/
var reset = function() {
  // 重置英雄位置
  hero.x = canvas.width / 2
  hero.y = canvas.height / 2

  // 随机怪兽位置
  monster.x = 32 + Math.random() * (canvas.width - 64)
  monster.y = 32 + Math.random() * (canvas.height - 64)
}

/*更新游戏对象*/

var update = function(modifier) {
  // 当玩家按住某个方向键时
  if (38 in keysDown) {
    hero.y -= hero.speed * modifier
  }
  if (40 in keysDown) {
    hero.y += hero.speed * modifier
  }
  if (37 in keysDown) {
    hero.x -= hero.speed * modifier
  }
  if (39 in keysDown) {
    hero.x += hero.speed * modifier
  }

  // 碰撞检测
  if (
    hero.x <= monster.x + 16 &&
    monster.x <= hero.x + 16 &&
    hero.y <= monster.y + 16 &&
    monster.y <= hero.y + 16
  ) {
    ++monsterCaught // 增加捕捉次数
    reset() // 重置游戏
  }
}

// 画出游戏界面
var render = function() {
  if (bgReady) {
    cc.drawImage(bgImage, 0, 0)
  }

  if (heroReady) {
    cc.drawImage(heroImage, hero.x, hero.y)
  }

  if (monsterReady) {
    cc.drawImage(monsterImage, monster.x, monster.y)
  }

  // 分数显示
  cc.fillStyle = 'rgb(250, 250, 250)'
  cc.font = '24px Helvetica'
  cc.textAlign = 'left'
  cc.textBaseline = 'top'
  cc.fillText('Goblins caught: ' + monsterCaught, 32, 32)
}

/*游戏主要循环*/

var main = function() {
  var now = Date.now()
  var delta = now - then

  update(delta / 1000)
  render()

  then = now

  // 调用动画框架函数
  requestAnimationFrame(main)
}

/*跨浏览器调用动画框架*/
var w = window
requestAnimationFrame =
  w.requestAnimationFrame ||
  w.webkitRequestAnimationFrame ||
  w.msRequestAnimationFrame ||
  w.mozRequestAnimationFrame

/*开始游戏*/
var then = Date.now()
reset()
main()
