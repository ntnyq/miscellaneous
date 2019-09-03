'use strict'

// Blob

var data1 = 'a'
var data2 = 'b'
var data3 = '<div style="color:red;">This is a blob</div>'
var data4 = { name: 'ntnyq' }

var blob1 = new Blob([data1])
var blob2 = new Blob([data1, data2])
var blob3 = new Blob([data3])
var blob4 = new Blob([JSON.stringify(data4)])
var blob5 = new Blob([data4])
var blob6 = new Blob([data3, data4])

console.log(blob1)
console.log(blob2)
console.log(blob3)
console.log(blob4)
console.log(blob5)
console.log(blob6)

// Blob 的 slice方法
var data5 = 'abcdef'

var blob7 = new Blob([data5])
var blob8 = blob7.slice(0, 3)

console.log(blob7)
console.log(blob8)
