const obj = (orbitMap, key, orbKey = null) => {
  const thing = orbitMap.get(key)
  const orbiter = orbKey ? (orbitMap.get(orbKey) || obj(orbitMap, orbKey)) : null
  if (!thing) {
    orbitMap.set(key, { key, orbiters: orbiter ? [orbiter] : [] })
  } else {
    thing.orbiters.push(orbiter)
    orbitMap.set(key, thing)
  }
  return orbitMap.get(key)
}

const processInput = input => {
  const orbitMap = new Map()
  input.forEach(entry => {
    [orbitee, orbiter] = entry.split(')')
    // console.log(`${orbitee} is orbitted by ${orbiter}`)
    obj(orbitMap, orbitee, orbiter)
  })
  return orbitMap
}

const countOrbit = (root, count) => {
  const {orbiters} = root
  // console.log(`${root.key}'s orbiters: ${orbiters.map(o => o.key)} count: ${count}`)
  if (orbiters.length === 0) {
    return count
  } else {
    return count + orbiters.map(orbiter =>
      countOrbit(orbiter, count + 1)
    ).reduce((acc, curr) => acc + curr, 0)
  }
}

const countTotalOrbit = (orbitMap) => countOrbit(orbitMap.get('COM'), 0)

module.exports = {processInput, countTotalOrbit}