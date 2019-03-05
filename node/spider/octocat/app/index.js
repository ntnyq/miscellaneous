/*
 * @Author: ntnyq
 * @Date:   2018-04-04 20:34:46
 */
const fs = require('fs')
const http = require('https')
const cheerio = require('cheerio')
const { baseUrl, saveDir } = require('./config')

let picsUrl = [],
  curIndex = 0

const saveImage = imgSrc => {
  let saveName = imgSrc.substr(imgSrc.lastIndexOf('/') + 1)

  http.get(imgSrc, res => {
    let imageData = ''

    res.setEncoding('binary')

    res.on('data', chunk => {
      imageData += chunk
    })

    res.on('end', () => {
      let savePath = `${saveDir}${saveName}`

      fs.writeFile(savePath, imageData, 'binary', err => {
        err && console.log(err)
      })

      if (picsUrl.length) {
        curIndex++
        console.log(`正在保存第${curIndex}张图片`)
        saveImage(picsUrl.shift())
      } else {
        console.log('所有图片下载完毕')
      }
    })
  })
}

const fetchImagesData = url => {
  let pageData = ''

  http.get(url, res => {
    res.setEncoding('utf-8')

    res.on('data', chunk => {
      pageData += chunk
    })

    res.on('end', () => {
      $ = cheerio.load(pageData)

      let images = $('#wrapper .item-shell .preview-image img')

      Array.from(images).forEach(img => {
        console.log(img)

        let link = img.attribs['data-src']

        link.length && picsUrl.push(link)
      })

      console.log(`所有图片链接获取完毕，共${picsUrl.length}条`)

      picsUrl.length && saveImage(picsUrl.shift())
    })
  })
}

const start = () => {
  fetchImagesData(baseUrl)
}

module.exports = start
