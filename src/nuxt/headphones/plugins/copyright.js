import { isBrowser } from '~/env/esm'

if (isBrowser) {
  const copyText = () => {
    return [
      ``,
      `著作权归作者所有。`,
      `商业转载请联系作者获得授权，非商业转载请注明出处。`,
      `作者：ntnyq`,
      `链接：${window.location.href}`,
      `来源：https://ntnyq.com`,
      ``
    ].join('\n')
  }

  const buildText = (content) => content + copyText()
  const buildHtml = (content) => content + copyText()

  document.addEventListener('copy', (evt) => {
    if (!window.getSelection) return
    if (!window.clickCopy) {
      const content = window.getSelection().toString()

      evt.clipboardData.setData('text/plain', buildText(content))
      evt.clipboardData.setData('text/html', buildHtml(content))

      evt.preventDefault()
    }
  })
}
