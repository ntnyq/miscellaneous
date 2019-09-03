/*
 * @Author: ntnyq
 * @Date:   2018-07-05
 */
;(function(d, w) {
  var buttons = d.querySelectorAll('button')

  var createRipple = function(e) {
    console.log(e)

    var circle = d.createElement('div'),
      size = Math.max(this.clientWidth, this.clientHeight)

    this.appendChild(circle)
    circle.style.width = circle.style.height = size + 'px'
    circle.style.left = e.offsetX /* + this.offsetLeft*/ - size / 2 + 'px'
    circle.style.top = e.offsetY /* + this.offsetTop*/ - size / 2 + 'px'
    circle.classList.add('ripple')
    setTimeout(function() {
      circle.remove()
    }, 1e3)
  }

  Array.prototype.forEach.call(buttons, function(b) {
    b.addEventListener('click', createRipple, !1)
  })
})(document, window)
