const arr = [1, 2, 3, 4, 5]
let text = ''

// arr.some(v => {
//   if (v === 3) {
//     return true
//   }
//   text += `${v},`
// })

arr.every(v => {
  if (v === 3) {
    return
  }
  text += `${v},`

  return true
})

// for (const v of arr) {
//   if (v === 3) {
//     break
//   }

//   text += `${v},`
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 3) {
//     break
//   }

//   text += `${arr[i]},`
// }

console.log(text)
