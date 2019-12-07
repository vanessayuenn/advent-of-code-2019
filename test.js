let tests = []

const it = (description, fn) => tests.push({description, fn})
const run = () => {
  console.log('===== tests =====')
  tests.forEach(test => {
    try {
      test.fn()
      console.log('✅', test.description)
    } catch (error) {
      console.log('❌', test.description)
      console.log(error)
      console.trace()
    }
  })
}

module.exports = {it, run}