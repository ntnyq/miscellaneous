/**
 * @Author   ntnyq
 * @DateTime 2017-12-19
 * @Email    lssham@qq.com
 * @description  Promise封装ajax
 */
const ajax = options =>
  new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    let type = (options.type || 'get').toLowerCase(),
      async = options.async || true,
      url = options.url || '',
      data = options.data || null,
      contentType = options.contentType || ''
    const setData = (() => {
      let encode = encodeURIComponent
      if (data) {
        if (typeof data === 'string') {
          let name, value

          data = data.split('&')
          data.forEach((item, idx) => {
            name = item.split('=')[0]
            value = item.split('=')[1]
            data[idx] = encode(name) + '=' + encode(value)
          })

          data = data.join('&').replace('/%20/g', '+')
        } else if (typeof data === 'object') {
          let _arr = []

          for (let _name in data) {
            let _value = data[_name].toString()

            _name = encode(_name)
            _value = encode(_value)
            _arr.push(`${_name}=${_value}`)
          }

          data = _arr.join('&').replace('/%20/g', '+')
        }

        if (type === 'get') {
          url += url.indexOf('?') > -1 ? data : `?${data}`
        }
      }
    })()

    xhr.open(type, url, async)

    if (type === 'post' && !contentType) {
      xhr.setRequestHeader(
        'Content-Type',
        'application/x-www-form-urlencoded;charset=UTF-8'
      )
    } else {
      xhr.setRequestHeader('Content-Type', contentType)
    }

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          resolve(xhr.responseText)
        } else {
          reject(xhr.status, xhr.statusText)
        }
      }
    }

    xhr.send(type === 'get' ? null : data)
  })
