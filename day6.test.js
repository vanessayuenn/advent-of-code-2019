const { it, run } = require('./test')
const { processInput, countTotalOrbit } = require('./day6')
const assert = require('assert')

it('my own test input', () => {
  const input = ['COM)aaa','aaa)bbb','bbb)ccc','ccc)ddd','COM)eee','COM)fff']
  const m = processInput(input)
  assert.equal(countTotalOrbit(m), 12)
})

it('given test input 1', () => {
  const input = ['COM)B','B)C','C)D','D)E','E)F','B)G','G)H','D)I','E)J','J)K','K)L']
  const m = processInput(input)
  assert.equal(countTotalOrbit(m), 42)
})

it('given test input from reddit', () => {
  const input = ['G)H', 'B)C', 'C)D', 'D)E', 'E)F', 'COM)B', 'B)G', 'D)I', 'E)J', 'J)K', 'K)L', 'K)L', 'I)M']
  const m = processInput(input)
  assert.equal(countTotalOrbit(m), 54)
})

run()

console.log('===== solution =====')
const m = processInput(require('./day6-input'))
console.log(countTotalOrbit(m))

