export const addUpTo1 = (n: number) => {
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += i
  }
  return total
}

export const addUpTo2 = (n: number) => {
  return (n * (n + 1)) / 2
}
