/**
 * 1. Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
 * Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
 *  */
const res38_1 = maxSubarraySum1([100, 200, 300, 400], 2) // 700
const res38_2 = maxSubarraySum1([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) // 39
const res38_3 = maxSubarraySum1([-3, 4, 0, -2, 6, -1], 2) // 5
const res38_4 = maxSubarraySum1([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) // 5
const res38_5 = maxSubarraySum1([2, 3], 3) // null
console.log({ res38_1, res38_2, res38_3, res38_4, res38_5 })

function maxSubarraySum1(array: number[], n: number) {
  if (n > array.length) return null

  let maxSum = 0
  for (let i = 0; i < n; i++) {
    maxSum += array[i]
  }

  let tempSum = maxSum
  for (let i = n; i < array.length; i++) {
    tempSum = tempSum + array[i] - array[i - n]
    if (tempSum > maxSum) maxSum = tempSum
  }

  return maxSum
}

/**
 * 2. Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
 * This function should return a minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
 */
const res38_6 = minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2 -> because [4, 3] is the smallest subarray
const res38_7 = minSubArrayLen([2, 1, 6, 5, 4], 9) // 2 -> because [5, 4] is the smallest subarray
const res38_8 = minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // 1 -> because [62] is greater than 52
const res38_9 = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // 3
const res38_10 = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) // 5
const res38_11 = minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
const res38_12 = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0
console.log({ res38_6, res38_7, res38_8, res38_9, res38_10, res38_11, res38_12 })

function minSubArrayLen(array: number[], n: number) {
  let start = 0
  let end = 0
  let total = 0
  let minLen = Infinity

  while (start < array.length) {
    if (total < n && end < array.length) {
      // grow the window to right
      total += array[end]
      end++
    } else if (total >= n) {
      // shrink the window
      minLen = Math.min(minLen, end - start)
      total -= array[start]
      start++
    } else break // total < n and reach the end
  }

  return minLen === Infinity ? 0 : minLen
}

/**
 * 3. Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
 */
const res38_13 = findLongestSubstring('') // 0
const res38_14 = findLongestSubstring('rithmschool') // 7
const res38_15 = findLongestSubstring('thisisawesome') // 6
const res38_16 = findLongestSubstring('thecatinthehat') // 7
const res38_17 = findLongestSubstring('bbbbbbb') // 1
const res38_18 = findLongestSubstring('longestsubstring') // 8
const res38_19 = findLongestSubstring('thisisshowwedoit') // 6
console.log({ res38_13, res38_14, res38_15, res38_16, res38_17, res38_18, res38_19 })

// function findLongestSubstring(str: string) {
//   let maxLen = 0
//   let start = 0
//   let end = 0
//   let subString = ''

//   while (start < str.length) {
//     if (subString.indexOf(str[end]) === -1 && end < str.length) {
//       subString += str[end]
//       end++
//     } else if (subString.indexOf(str[end]) !== -1) {
//       maxLen = Math.max(maxLen, end - start)
//       start += subString.indexOf(str[end]) + 1
//       end = start
//       subString = ''
//     } else {
//       maxLen = Math.max(maxLen, end - start)
//       break
//     }
//   }

//   return maxLen
// }

function findLongestSubstring(str: string) {
  let longest = 0
  let seen: { [char: string]: number } = {}
  let start = 0

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (seen[char]) start = Math.max(start, seen[char])

    longest = Math.max(longest, i - start + 1)
    seen[char] = i + 1
  }

  return longest
}
