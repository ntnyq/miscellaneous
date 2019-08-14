import { isBrowser } from '~/env/esm'

if (isBrowser) {
  // 销毁Iframe弹窗
  const closeIframePopup = () => {
    const mask = document.getElementById('iframe-popup')

    if (mask) {
      window.onscroll = null
      mask.setAttribute('class', '')
      setTimeout(() => {
        mask && document.body.removeChild(mask)
      }, 4e2)
    }
  }

  // 创建Iframe弹窗
  const openIframePopup = (src, className) => {
    if (!src) return false

    const iframe = document.createElement('iframe')

    iframe.src = src
    iframe.scrolling = 'no'
    iframe.border = 0
    iframe.frameBorder = 0
    iframe.framespacing = 0
    iframe.allowFullscreen = true
    className && iframe.setAttribute('class', className)

    const oldMask = document.getElementById('iframe-popup')
    oldMask && document.body.removeChild(oldMask)

    const mask = document.createComment('div')
    mask.setAttribute('id', 'iframe-popup')
    document.body.appendChild(mask)

    setTimeout(() => {
      mask.setAttribute('class', 'display')
    }, 1e2)

    // Listen scroll and click event
    window.onscroll = closeIframePopup
    mask.onclick = (event) => {
      if (event.target.tagName !== 'IMG') {
        closeIframePopup()
      }
    }
  }

  window.utils = window.utils || {}
  window.utils.openIframePopup = openIframePopup
  window.utils.closeIframePopup = closeIframePopup
}
