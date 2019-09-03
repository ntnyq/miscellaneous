resolve 是可递归的 执行的时候可以传入Promise实例
但是reject不行 只会拒绝  reject不一定要由编程给出 比如出现错误也会reject  throw new Error('foo') 或者语法错误

不决议 完成 或者拒绝 只能三选其一 只能决议一次

传入thenable 会封装成promise


// 构造函数的参数(是个函数)是 同步执行的

即使放在外面封装成异步的 也一样

```js

var outer = {};
var p = new Promise(function(resolve, reject) {
    outer.resolve = resolve;
    outer.reject = reject;
});
p.then(
    function (value) {
        alert(value);
    },
    function (msg) {
        alert(msg);
    }
);

setTimeout(function() {
    outer.resolve(2);
    outer.reject('no');
    outer.resolve(3);
}, 1000);
```

状态:

- pending 决议中 (可能决议，或者拒绝)
- fullfilled 已完成
- rejected 已拒绝

已决议: resolved(完成，或者拒绝)

未决议：仍然进行中

响应：onFullfilled(完成回调)  onRejcted(拒绝回调)

