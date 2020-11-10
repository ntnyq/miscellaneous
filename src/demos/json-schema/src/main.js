const Ajv = require('ajv')

const ajv = new Ajv()

const schema = {
  properties: {
    name: {
      type: 'string'
    },
    age: {
      type: 'number'
    },
    isMale: {
      type: 'boolean'
    },
    hobby: {
      type: 'array',
      items: {
        type: 'number'
      }
    }
  }
}

const data = {
  name: 'ntnyq',
  age: 28,
  isMale: true,
  hobby: [
    'reading',
    'eating'
  ]
}

const isValid = ajv.validate(schema, data)

console.log(isValid)
console.log(ajv.errors)
console.log(ajv.errorsText())
