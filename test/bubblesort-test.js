const assert = require('chai').assert
const bubbleSort = require('../lib/bubblesort')

describe('bubble sort functionality', () => {
  context('bubble sort function', () => {
    it('it sorts and array of numbers', () => {
      assert.deepEqual(bubbleSort([2, 3, 1, 5, 4]), [1, 2, 3, 4, 5])
    })
  })
})
