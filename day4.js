const isSixDigit = arr => arr.length === 6

const hasAdjacents = arr => {
  let found = false
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i+1]) {
      found = true
      break
    }
  }
  return found
}

const neverDecreases = arr => arr.every((num, i, array) => i === array.length - 1 || num <= array[i + 1])

const meetCriteria = (password) => {
  const pw = password.toString().split('').map(s => parseInt(s))
  const checks = [isSixDigit, hasAdjacents, neverDecreases]
  return checks.every(check => check(pw))
}

module.exports = {meetCriteria}
