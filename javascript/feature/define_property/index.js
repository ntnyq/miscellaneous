
/**
 * var foo = 'apple', bar = 'banane'
 *
 * console.log(a.name, b.name)
 *
 * ->
 * apple banana
 */

Object.defineProperty(String.prototype, 'name', {
  get () {
    return this.toString()
  }
})
