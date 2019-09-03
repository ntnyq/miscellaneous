import { Student, Teacher, area } from './lib/math'

const array = [1, 2, 3, 4, 5, 6]

class Employee {
  constructor() {}
}

new Student()
new Employee()
new Teacher()

console.log(array.includes(1))

console.log(Object.keys(array))
console.log(Object.values(array))
console.log(Object.entries(array))

const p = new Promise(resolve => {
  setTimeout(() => {
    resolve('Hello world')
  }, 2e3)
})

p.then(console.log)

console.log(area(5))
