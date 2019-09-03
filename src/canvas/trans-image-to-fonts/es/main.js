/*
 * @Author: ntnyq
 * @UpdateAt:   2018-05-09
 * @Email: 1201485244@qq.com
 */
;(function(w, d, id, undef) {
  let cc = d.querySelector(id),
    cw = (cc.width = 400),
    ch = (cc.height = 600),
    $ = cc.getContext('2d')

  let image = new Image()

  const DISTANCE = 12,
    FONT = '字'

  image.src = './img/pic.jpg'
  // image.crossorigin = 'anonymous'; // 可解决图片跨域安全问题

  $.fillStyle = '#000'
  $.fillRect(0, 0, cw, ch)
  $.fill()

  image.addEventListener(
    'load',
    e => {
      $.drawImage(image, 0, 0, cw, ch)

      let imageData = $.getImageData(0, 0, cw, ch).data,
        last = cw,
        dots = [] // 计算后每个点的颜色

      for (let i = 0, len = imageData.length; i < len; i += 4 * DISTANCE) {
        let n

        if (i / 4 >= last) {
          last += DISTANCE * cw
          n = i / 4
          n += (DISTANCE - 1) * cw
          i = 4 * n
        }

        if (imageData[i + 3] > 0) {
          dots.push({
            x: (i / 4) % cw,
            y: i / 4 / cw,
            r: imageData[i],
            g: imageData[i + 1],
            b: imageData[i + 2],
            a: imageData[i + 3],
          })
        }
      }

      $.clearRect(0, 0, cw, ch)

      for (let i = 0, len = dots.length; i < len; i++) {
        $.fillStyle = `rgba(${dots[i].r}, ${dots[i].g}, ${dots[i].b}, ${dots[i].a})`

        /*      $.beginPath();
      $.arc(dots[i].x, dots[i].y, DISTANCE / 2, 0, 2 * Math.PI);*/

        $.textBaseline = 'middle'
        $.textAlign = 'center'
        $.font = `bold ${DISTANCE}px Arial`
        $.fillText(FONT, dots[i].x, dots[i].y)

        $.fill()
      }
    },
    !0
  )
})(window, document, '#canvas')
