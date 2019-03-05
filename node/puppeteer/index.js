const puppeteer = require('puppeteer')
const devices = require('puppeteer/DeviceDescriptors')
const iPhone = devices['iPhone 6 Plus']

const timeout = delay => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(1)
      } catch (err) {
        reject(err)
      }
    }, delay)
  })
}

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
  })
  const page = await browser.newPage()

  await page.emulate(iPhone)

  console.log('1.打开网站')
  await page.goto('http://www.baidu.com')
  await timeout(1000)

  console.log('2.输入 前端 并且执行搜索')
  await page.tap('#index-kw')
  await page.type('#index-kw', '前端')
  await page.tap('#index-bn')

  browser.close()
}

run()
