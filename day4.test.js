const assert = require('assert')
const {it, run} = require('./test')
const {meetCriteria} = require('./day4')

console.log('===== tests =====')

it('111111 should meet the cirteria', () => {
  assert.equal(meetCriteria(111111), true)
})

it('223450 should not meet the cirteria', () => {
  assert.equal(meetCriteria(223450), false)
})

it('123789 should not meet the cirteria', () => {
  assert.equal(meetCriteria(123789), false)
})

run()

console.log('===== solution =====')

const solve = (fn, min, max) => {
  let count = 0
  for (let i = min; i <= max; i++) {
    if (fn(i)) {
      count++
    }
  }
  return count
}

// solution 172851-675869
console.log('part 1: ', solve(meetCriteria, 172851, 675869))
