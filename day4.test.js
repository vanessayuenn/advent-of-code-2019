const assert = require('assert')
const {it, run} = require('./test')
const {meetCriteria, meetNewCriteria} = require('./day4')

it('111111 should meet the cirteria', () => {
  assert.equal(meetCriteria(111111), true)
})

it('223450 should not meet the cirteria', () => {
  assert.equal(meetCriteria(223450), false)
})

it('123789 should not meet the cirteria', () => {
  assert.equal(meetCriteria(123789), false)
})

it('112233 should meet the new criteria', () => {
  assert.equal(meetNewCriteria(112233), true)
})

it('123444 should not meet the new criteria', () => {
  assert.equal(meetNewCriteria(123444), false)
})

it('111122 should meet the new criteria', () => {
  assert.equal(meetNewCriteria(111122), true)
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
console.log('part 2: ', solve(meetNewCriteria, 172851, 675869))
