const moduleB = require('module-b')

const moduleA = function() {
  console.log(moduleB.sayHello())
}

export default moduleA
