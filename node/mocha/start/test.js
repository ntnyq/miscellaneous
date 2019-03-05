let assert = require('assert')

describe('Array', function(argument) {
  describe('#indexOf', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1, 2, 3].indexOf(4))
    })
  })
})

describe('Math', function() {
  it('should test if 3 * 3 = 9', function() {
    assert.equal(9, 3 * 3)
  })

  it('should test if (3 - 4) * 8 = -8', function() {
    assert.equal(-8, (3 - 4) * 8)
  })

  it('should test if 1 + 2 = 2', function() {
    assert.equal(2, 1 + 2)
  })
})
