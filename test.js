let tests = []

const it = (description, fn) => tests.push({description, fn})
const run = () => {
  tests.forEach(test => {
    try {
      test.fn()
      console.log('✅', test.description)
    } catch (error) {
      console.log('❌', test.description)
      console.trace()
    }
  })
}

module.exports = {it, run}