# ES6 新数据结构 Map

## 示例

``` js
const map = new Map([
  ['name', 'ntnyq'],
  [1, 'first']
])

console.log(map.size) // => 2
console.log(map.get('name')) // => ntnyq
console.log(map.has('name')) // => true
console.log(map.has('foo')) // => false

map.set('foo', 'bar')
map.delete('name')

console.log(map.has('foo')) // => true
console.log(map.has('name')) // => false
console.log(map.get('name')) // => undefined

map.set('foo', 'baz')

console.log(map.get('foo')) // => baz

console.log(map.delete('name')) // => false
console.log(map.delete('foo')) // => true

map.clear()

console.log(map.size) // => 0

```

## 特性

- __Map__ 的键是跟内存地址绑定的。如果是引用类型做键，则指向的是不同的值。
- 当两个值严格相等时，__Map__ 将其视为一个键，比如 `0` 和 `-0`。虽然 __NaN__ 不严格等于自身，不过 __Map__ 将其设为一个键。
- `set` 方法返回的是当前的 __Map__ 对象，因此可以使用链式写法。

## 属性

### size

只读属性，返回内部已存在的键的个数。

## 方法

### set

为 __Map__ 数据结构设置键值组合，返回值为当前 __Map示例__，可链式调用。

### get

获取传入的键中保存的值，若不存在此键，则返回 `undefined`

### has

判断是否有传入的键，返回一个 __布尔值__。

### delete

移除一个键，若传入的 `key` 存在，则返回 `true`，不存在则返回 `false`

### delete

清除 __Map__ 对象实例下的所有键。

## 参考资料

- [ECMAScript 6 入门](http://es6.ruanyifeng.com/#docs/set-map#Map)
