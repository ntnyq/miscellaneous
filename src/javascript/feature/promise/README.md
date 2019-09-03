# Promise

即使 __Promise__ 的内容是立即被决议的，它仍然会在同步代码之后执行。

``` js
const p = Promise.resolve('abc')

p.then(console.log)
console.log('xyz')

//=> xyz abc
```



## 缺点

- 没有失败重试的机制
- 没有取消机制