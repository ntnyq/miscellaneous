# MutationObserve

__MutationObserve__ API 用于监控DOM变化并作出相应，是已弃用的 `MutationEvents` API 的替代方案。

## 示例

``` js
// 获取监控名对象
const target = document.getElementById('#id')

// 设置监控DOM节点配置
const config = {
  attributes: false,
  childList: true,
  subtree: true
}

// 监控变化回调函数 传入的为所有变化对象
const callback = function (mutationsList) {

}

// 初始化监控者对象 需传入回调
const observer = new MutationObserver(callback)

// 开始监控
observer.observe(target, config)

// 断开监控
observe.disconnect()
```

## 应用示例

- [Bilibili弹幕](https://github.com/daochouwangu/douyudanmu/blob/master/bilibilidanmu.js)

## 兼容性

IE11+

## 参考资料

- [MDN-Mutation​Observer](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)
- [Can-I-Use](https://caniuse.com/#search=Mutation)
