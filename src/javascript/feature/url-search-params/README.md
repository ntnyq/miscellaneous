# UrlSearchParams

## 获取

获取到的值是一个 `Iterator` 对象，可以使用 `for of`进行迭代。

``` js
const urlParams = new URLSearchParams(location.search)

for (let k of urlParams) {
  console.log(k)
}
```

## API

### 操作

- has()
- get()
- getAll()
- set()
- delete()
- append()
- toString()

### 迭代

- keys()
- values()
- entries()

## 兼容性

1. 非 IE 浏览器
2. QQ浏览器不支持。
3. IOS 10.3+

> 可以使用 [url-search-params](https://github.com/WebReflection/url-search-params) 来进行polyfill。

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams#Browser_compatibility)
- [Can-I-Use](https://caniuse.com/#search=URLSearchParams)


## 参考资料

- [利用 URLSearchParams 对象获取URL之中的查询字符串](https://github.com/justjavac/the-front-end-knowledge-you-may-not-know/issues/31)
- [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
