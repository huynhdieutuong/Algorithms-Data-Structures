// 1. Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

const res33_1 = maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
const res33_2 = maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
const res33_3 = maxSubarraySum([4, 2, 1, 6], 1) // 6
const res33_4 = maxSubarraySum([4, 2, 1, 6, 2], 4) // 13
const res33_5 = maxSubarraySum([], 4) // null
console.log({ res33_1, res33_2, res33_3, res33_4, res33_5 })

// Naive solution - O(N2)
// function maxSubarraySum(array: number[], n: number) {
//   if (n > array.length) return null

//   const sumArray = []
//   for (let i = 0; i <= array.length - n; i++) {
//     let sum = 0
//     for (let j = i; j < i + n; j++) {
//       sum += array[j]
//     }
//     sumArray.push(sum)
//   }
//   console.log(sumArray)

//   let max = -Infinity
//   for (const val of sumArray) {
//     if (val > max) max = val
//   }
//   return max
// }

// Sliding window pattern - O(N)
function maxSubarraySum(array: number[], n: number) {
  if (n > array.length) return null

  let sum = 0
  const sumArr = []
  for (let i = 0; i < n; i++) {
    sum += array[i]
  }

  let max = sum
  let temSum = sum
  sumArr.push(sum)
  for (let i = n; i < array.length; i++) {
    temSum = temSum - array[i - n] + array[i]
    max = Math.max(max, temSum)
    sumArr.push(temSum)
  }

  console.log(sumArr)
  return max
}
