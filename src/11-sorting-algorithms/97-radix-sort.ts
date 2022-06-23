const res97_1 = getDigit(12345, 0) // 5
const res97_2 = getDigit(12345, 1) // 4
const res97_3 = getDigit(12345, 2) // 3
const res97_4 = getDigit(12345, 3) // 2
const res97_5 = getDigit(12345, 4) // 1
const res97_6 = getDigit(12345, 5) // 0
console.log({ res97_1, res97_2, res97_3, res97_4, res97_5, res97_6 })

function getDigit(num: number, place: number) {
  // let numString = num.toString()
  // return Number(numString[numString.length - 1 - place]) || 0

  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}
// =====================

const res97_7 = digitCount(12345) // 5
const res97_8 = digitCount(123) // 3
const res97_9 = digitCount(1) // 1
console.log({ res97_7, res97_8, res97_9 })

function digitCount(num: number) {
  // return num.toString().length

  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}
// =====================

const res97_10 = mostDigits([1234, 56, 7]) // 4
const res97_11 = mostDigits([1, 1, 11111, 1]) // 5
const res97_12 = mostDigits([12, 34, 56, 78]) // 2
console.log({ res97_10, res97_11, res97_12 })

function mostDigits(numbers: number[]) {
  let maxDigit = 0
  for (let i = 0; i < numbers.length; i++) {
    maxDigit = Math.max(maxDigit, digitCount(numbers[i]))
  }
  return maxDigit
}

// ======================================================
const res97_13 = radixSort([1234, 56, 7, 11111, 34, 12, 78])
console.log({ res97_13 })

function radixSort(numbers: number[]) {
  const loopTimes = mostDigits(numbers)
  for (let i = 0; i < loopTimes; i++) {
    const digitBuckets: number[][] = Array.from({ length: 10 }, () => [])
    for (const num of numbers) {
      const digit = getDigit(num, i)
      digitBuckets[digit].push(num)
    }
    console.log(digitBuckets)
    numbers = [].concat(...digitBuckets)
    console.log(numbers)
  }
  return numbers
}
