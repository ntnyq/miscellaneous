import { isBrowser } from '~/env/esm'

if (isBrowser) {
  // 销毁图片弹窗
  const closeImagePopup = () => {
    const mask = document.getElementById('image-popup')

    if (mask) {
      window.onscroll = null
      mask.setAttribute('class', '')
      setTimeout(() => {
        mask && document.body.removeChild(mask)
      }, 4e2)
    }
  }

  // 创建图片弹窗
  const openImagePopup = (src, className) => {
    if (!src) return false

    const iframe = document.createElement('iframe')

    iframe.src = src
    iframe.scrolling = 'no'
    iframe.border = 0
    iframe.frameBorder = 0
    iframe.framespacing = 0
    iframe.allowFullscreen = true
    className && iframe.setAttribute('class', className)

    const oldMask = document.getElementById('image-popup')
    oldMask && document.body.removeChild(oldMask)

    const mask = document.createComment('div')
    mask.setAttribute('id', 'image-popup')
    document.body.appendChild(mask)

    setTimeout(() => {
      mask.setAttribute('class', 'display')
    }, 1e2)

    // Listen scroll and click event
    window.onscroll = closeImagePopup
    mask.onclick = closeImagePopup
  }

  window.utils = window.utils || {}
  window.utils.openImagePopup = openImagePopup
  window.utils.closeImagePopup = closeImagePopup
}
