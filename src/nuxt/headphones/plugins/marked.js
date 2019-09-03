import marked from 'marked'
import Hljs from '~/plugins/highlight.js'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight(code) {
    return Hljs.highlightAuto(code).value
  }
})

const renderer = new marked.Renderer()

const paragraphRender = (text) => `<p>${text}</p>`

const headingRender = (text, level, raw) => {
  const id = raw.toLowerCase().replace(/[^a-zA-Z0-9\u4e00-\u9fa5]+/g, '-')
  return `<h${level} id=${id} alt=${id} title=${id}>${text}</h${level}>`
}

const imageRender = (src, title, alt) => {
  src = src.replace(/^http:\/\//gi, '/proxy/')

  const imageHtml = `
    <img
      class="${lozad}"
      data-src="${src}"
      title="${title || alt}"
      alt="${alt || title || src}"
      onclick="window.utils && window.utils.openImagePopup('${src}')"
    >
  `
  return imageHtml.replace(/\s+/g, ' ').replace(/\n/g, ' ')
}

renderer.heading = headingRender
renderer.image = imageRender
renderer.paragraph = paragraphRender

/**
 *
 * @param {*} content
 * @param {*} tags
 * @param {*} parseHtml
 */
export default function(content, tags, parseHtml = false) {
  if (typeof content !== 'string') return ''

  return marked(content, { renderer })
}
