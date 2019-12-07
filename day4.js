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

const newAdjacentRule = arr => {
  let doesntCount = []
  let found = false
  for (let i = 0; i < arr.length - 1; i++) {
    if (!doesntCount.includes(arr[i]) && arr[i] === arr[i + 1]) {
      if (i + 2 < arr.length && arr[i + 2] === arr[i]) {
        doesntCount.push(arr[i])
      } else {
        found = true
        break
      }
    }
  }
  return found
}

const meetNewCriteria = (password) => {
  const pw = password.toString().split('').map(s => parseInt(s))
  const checks = [isSixDigit, neverDecreases, newAdjacentRule]
  return checks.every(check => check(pw))
}

module.exports = {meetCriteria, meetNewCriteria}