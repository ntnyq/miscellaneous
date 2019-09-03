const bigObject1 = {
  foo: {
    bar: {
      baz: {
        value: 'ntnyq',
        greeting() {
          console.log(`Hello, this is ${this.value}`)
        },
      },
    },
  },
}

const bigObject2 = {
  foo: {},
}

const value1 = bigObject1.foo.bar.baz.value
const value2 = bigObject2.foo?.bar?.baz?.value
const value3 = bigObject2.foo?.bar?.baz?.value ?? 'Fallback Value'

console.log(value1)
console.log(value2)
console.log(value3)

console.log(`\n${'='.repeat(16)}\n`)

bigObject1.foo.bar.baz.greeting()
bigObject2?.foo?.bar?.baz?.greeting() ?? console.log('Fallback method')
