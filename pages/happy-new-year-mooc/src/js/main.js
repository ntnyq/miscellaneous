window.onload = () => {
  const $ = document.querySelector

  const EVEN = 'ontouchstart' in window ? 'touchstart' : 'click'

  music.addEventListener(
    EVEN,
    () => {
      if (audio.paused) {
        music.classList.add('play')
        audio.play()
      } else {
        music.classList.remove('play')
        audio.pause()
      }
    },
    false,
  )

  audio.addEventListener(
    'ended',
    () => {
      // 播放完毕停止动画
      music.classList.remove('play')
    },
    false,
  )

  // 页面切换
  page1.addEventListener(
    EVEN,
    () => {
      page1.style.display = 'none'
      page2.style.display = 'block'
      page3.style.display = 'block'
      page3.style.top = '100%'

      setTimeout(function() {
        page2.classList.add('fadeOut')
        page3.classList.add('fadeIn')
      }, 5500)
    },
    false,
  )
}
