const fs = require('fs')
const path = require('path')
const superAgent = require('superagent')
const cheerio = require('cheerio')
const eventProxy = require('eventproxy')
const mapLimit = require('async/mapLimit')

const config = require('./config')

const ep = new eventProxy(),
  baseUrl = config.url,
  page = config.page,
  perPageQuantity = config.perPageQuantity

let results = [], // 筛选后的结果
  authorMap = [], // 作者发帖数统计
  itntermediary = [] // 中介列表

let pageUrls = []

for (let i = 0; i < page; i++) {
  pageUrls.push({
    url: `${baseUrl}${i * perPageQuantity}`,
  })
}

const start = () => {
  const getPageInfo = (pageItem, cb) => {
    // 设置访问间隔
    const delay = parseInt((Math.random() * 3e7) % 1e3, 10)

    pageUrls.forEach(pageUrl => {
      superAgent
        .get(pageUrl.url)
        // 模拟浏览器
        .set(
          'User-Agent',
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36'
        )
        .end((err, pres) => {
          const $ = cheerio.load(pres.text) // 装载页面内容
          let itemList = $('.olt tbody')
            .children()
            .slice(1, 26)

          for (let i = 0; i < itemList.length; i++) {
            const item = itemList.eq(i).children()
            const title =
              item
                .eq(0)
                .children('a')
                .text() || '' // 获取标题
            const url =
              item
                .eq(0)
                .children('a')
                .attr('href') || '' // 获取详情页链接
            const author =
              item
                .eq(1)
                .children('a')
                .text() || ''
            const markSum = item.eq(2).text() // 获取回应数量
            const lastModify = item.eq(3).text() // 获取最后修改时间
            const data = {
              title,
              url,
              author,
              markSum,
              lastModify,
            }

            ep.emit('preparePage', data)
          }
        })
    })
  }

  // 类似map方法 但是是异步的控制 限制最多运行2个
  mapLimit(
    pageUrls,
    2,
    (item, cb) => {
      // 迭代pageUrls 第一个item是单条pageUrl 第二个是回调函数
      getPageInfo(item, cb)
    },
    err => {
      if (err) {
        console.log(err)
      }
      console.log('抓取完毕')
    }
  )
}

// 在ep.emit的时候执行这里的回掉函数
ep.after('preparePage', pageUrls.length * page, data => {
  config.js
  console.log('我触发了')

  // 传入不像要的关键词 用竖线隔开
  let filterWords = /六号线/
  // let keywords = /高新|雁塔/;

  // 先统计每个人的发帖数 并以对象保存 利用对象名不重复来计数
  data.forEach(item => {
    authorMap[item.author] = authorMap[item.author]
      ? ++authorMap[item.author]
      : 1

    if (authorMap[item.author] > 4) {
      itntermediary.push(item.author) // 认为是中介
    }
  })

  itntermediary = [...new Set(itntermediary)]

  // 再次遍历
  data.forEach(item => {
    // 排序提升效率
    if (item.markSum > 100) {
      console.log('评论过多，丢弃')
      return
    }

    if (filterWords.test(item.title)) {
      console.log('标题带有不希望的词语，丢弃')
      return
    }

    if (itntermediary.includes(item.author)) {
      console.log('发帖数过多，丢弃')
      return
    }

    results.push(item)
    // if (keywords.test(item.title)) {
    //   results.push(item);
    // }
  })

  let topHtml = `<!DOCTYPE html>
                  <html lang="zh-CN">
                  <head>
                    <meta charset="UTF-8" />
                    <meta name="renderer" content="webkit" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
                    <meta name="author" content="ntnyq<1210485244@qq.com>" />
                    <title>豆瓣租房记录爬取</title>
                    <style>
                      .wrapper {
                        width: 960px;
                        margin: 0 auto;
                        border: 2px solid #aaa;
                        padding: 20px;
                      }
                      .wrapper table {
                        width: 100%;
                        border-collapse: collapse;
                      }
                      .wrapper table td,
                      .wrapper table th {
                        height: 32px;
                        border: 1px solid #ccc;
                        text-align: center;
                      }
                      .wrapper table thead tr,
                      .wrapper table tr:nth-of-type(even) {
                        background-color: #ddd;
                      }
                    </style>
                  </head>
                  <body>
                    <div class="wrapper">
                      <table>
                        <thead>
                          <tr>
                            <th>标题</th>
                            <th>总帖子楼层</th>
                            <th>最后修改时间</th>
                          </tr>
                        </thead>
                        <tbody>`,
    contentHtml = '',
    bottomHtml = `</tbody></table></div></body></html>`

  results.forEach(item => {
    contentHtml += `<tr><td><a href="${item.url}" target="_blank">${item.title}</td><td>${item.markSum}</td><td>${item.lastModify}</td></tr>`
  })

  let finalHtml = topHtml + contentHtml + bottomHtml

  console.log(finalHtml)

  // 生成文件

  fs.writeFile(
    path.resolve(__dirname, '../tmp/result.html'),
    finalHtml,
    err => {
      console.log('进入回调')

      if (err) {
        console.log('出错了')
        return console.error(err)
      }

      console.log('success')
    }
  )
})

module.exports = start
