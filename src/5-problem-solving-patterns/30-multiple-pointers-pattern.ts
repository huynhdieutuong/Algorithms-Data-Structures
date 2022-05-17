// 1. Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

const res30_1 = sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
const res30_2 = sumZero([-2, 0, 1, 3]) // undefined
const res30_3 = sumZero([1, 2, 3]) // undefined
const res30_4 = sumZero([-4, -3, -2, -1, 0, 1, 2, 5]) // [-2, 2]
const res30_5 = sumZero([-6, -4, -2, -1, 0, 1, 3, 5, 7]) // [-1, 1]
console.log({ res30_1, res30_2, res30_3, res30_4, res30_5 })

// Naive solution
// Time complexity - O(N2)
// Space complexity - O(1)
// function sumZero(arr: number[]) {
//   let times = 0
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = arr.length - 1; j > i; j--) {
//       times += 1
//       if (arr[i] + arr[j] === 0) {
//         console.log(times)
//         return [arr[i], arr[j]]
//       }
//     }
//   }
// }

// Multiple pointers solution - 2 pointers: left, right
function sumZero(arr: number[]) {
  let times = 0
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    times++
    const sum = arr[left] + arr[right]
    if (sum === 0) {
      console.log(times)
      return [arr[left], arr[right]]
    }
    if (sum > 0) right--
    if (sum < 0) left++
  }
}

// 2. Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
const res30_6 = countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
const res30_7 = countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
const res30_8 = countUniqueValues([]) // 0
const res30_9 = countUniqueValues([-2, -1, -1, 0, 1]) // 4
console.log({ res30_6, res30_7, res30_8, res30_9 })

// function countUniqueValues(array: number[]) {
//   const frequency: { [num: number]: number } = {}
//   for (const val of array) {
//     frequency[val] = (frequency[val] || 0) + 1
//   }
//   return Object.keys(frequency).length
// }

// Multiple pointers solution - 2 pointers: left, left
function countUniqueValues(array: number[]) {
  const uniqueValueArray = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) uniqueValueArray.push(array[i])
  }
  console.log(uniqueValueArray)
  return uniqueValueArray.length
}
