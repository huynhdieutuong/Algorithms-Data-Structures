const res64_1 = naiveSearch('lorie loled', 'lol')
console.log({ res64_1 })

function naiveSearch(long: string, short: string) {
  let count = 0
  for (let i = 0; i < long.length; i++) {
    if (long[i] === short[0]) {
      for (let j = 1; j < short.length; j++) {
        if (long[i + j] !== short[j]) break
        if (j === short.length - 1) count++
      }
    }
  }
  return count
}
