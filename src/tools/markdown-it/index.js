const path = require('path')
const fs = require('fs-extra')
const MarkdowIt = require('markdown-it')
const highlightJs = require('highlight.js')
const pug = require('pug')

const md = new MarkdowIt({
  highlight: function(str, lang) {
    if (lang && highlightJs.getLanguage(lang)) {
      try {
        return highlightJs.highlight(lang, str).value
      } catch (__) {}
    }

    // use external default escaping
    return ''
  },
})

// Optional, but makes sense as you really want to link to something
md.use(require('markdown-it-anchor'))
md.use(require('markdown-it-table-of-contents'))

const MARKDOWN_FILES_PATH = 'src/md'
const OUTPUT_PATH = 'dist'

function renderMarkdownFiles(files) {
  return new Promise(resolve => {
    const htmls = []

    files.forEach(file => {
      const data = fs.readFileSync(
        path.join(MARKDOWN_FILES_PATH, file),
        'utf-8'
      )
      const title = path.basename(file, '.md')

      const html = pug.renderFile('src/tmpl/index.pug', {
        title,
        content: md.render(data),
      })

      htmls.push({
        title,
        html,
      })
    })
    resolve(htmls)
  })
}

;(async () => {
  const files = await fs.readdir(MARKDOWN_FILES_PATH)
  const htmls = await renderMarkdownFiles(files)

  fs.ensureDir(OUTPUT_PATH)

  htmls.forEach(({ html, title }) => {
    fs.writeFileSync(
      path.join(OUTPUT_PATH, `${title}.html`),
      html,
      { flag: 'w' },
      () => {
        console.log(`Files ${title} write finished!`)
      }
    )
  })
})()
