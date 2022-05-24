// 1. Write a function called sameFrequency. Give two positive integers, find out if the two numbers have the same frequency of digits.

const res36_1 = sameFrequency(182, 281) // true
const res36_2 = sameFrequency(34, 14) // false
const res36_3 = sameFrequency(3589578, 5879385) // true
const res36_4 = sameFrequency(22, 222) // false
console.log({ res36_1, res36_2, res36_3, res36_4 })

function sameFrequency(num1: number, num2: number) {
  const frequencyNum1 = convertNumberToFrequencyObject(num1)
  const frequencyNum2 = convertNumberToFrequencyObject(num2)
  console.log({ frequencyNum1, frequencyNum2 })

  for (const digit in frequencyNum1) {
    if (!frequencyNum2.hasOwnProperty(digit)) return false
    if (frequencyNum1[digit] !== frequencyNum2[digit]) return false
  }
  return true
}

function convertNumberToFrequencyObject(num: number) {
  const frequencyNum: { [digit: number]: number } = {}
  let rest = num

  while (rest > 0) {
    const digit = rest % 10
    frequencyNum[digit] = (frequencyNum[digit] || 0) + 1
    rest = (rest - digit) / 10
  }

  return frequencyNum
}

// 2. Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

const res36_5 = areThereDuplicates(1, 2, 3) // false
const res36_6 = areThereDuplicates(1, 2, 2) // true
const res36_7 = areThereDuplicates('a', 'b', 'c', 'a') // true
const res36_8 = areThereDuplicates('a', 'e', 'd', 'c', 'b') // false
const res36_9 = areThereDuplicates(10, 3, 1, 5, 2) // false
console.log({ res36_5, res36_6, res36_7, res36_8, res36_9 })

// Solution 1: frequency counter
// function areThereDuplicates(...args: string[] | number[]) {
//   interface FrequencyCounter {
//     [val: string | number]: number
//   }

//   const frequencyCounter: FrequencyCounter = {}

//   for (const val of args) {
//     frequencyCounter[val] = (frequencyCounter[val] || 0) + 1
//   }

//   for (const key in frequencyCounter) {
//     if (frequencyCounter[key] > 1) return true
//   }

//   return false
// }

// Solution 2: multiple pointers - left left
// function areThereDuplicates(...args: string[] | number[]) {
//   const sortedArr = args.sort((x, y) => {
//     if (x < y) {return -1;}
//     if (x > y) {return 1;}
//     return 0;
//   })

//   for (let i = 0; i < sortedArr.length; i++) {
//     if (sortedArr[i] === sortedArr[i + 1]) return true
//   }

//   return false
// }

// Solution 3: using Set to remove duplicate arguments
function areThereDuplicates(...args: string[] | number[]) {
  const uniqueArgs = new Set<string | number>(args)
  return uniqueArgs.size !== args.length
}