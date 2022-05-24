// 1. Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

const res37_1 = averagePair([1, 2, 3], 2.5) // true
const res37_2 = averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
const res37_3 = averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
const res37_4 = averagePair([], 4) // false
console.log({ res37_1, res37_2, res37_3, res37_4 })

function averagePair(array: number[], avg: number) {
  let left = 0
  let right = array.length - 1

  while (left < right) {
    const average = (array[left] + array[right]) / 2
    if (average === avg) return true
    if (average > avg) right--
    if (average < avg) left++
  }

  return false
}

// 2. Write a function called isSubsequence which take in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

const res37_5 = isSubsequence('hello', 'hello world') // true
const res37_6 = isSubsequence('sing', 'sting') // true
const res37_7 = isSubsequence('abc', 'abracadabra') // true
const res37_8 = isSubsequence('abc', 'acb') // false (order matters)
console.log({ res37_5, res37_6, res37_7, res37_8 })

// Recursive solution
// function isSubsequence(str1: string, str2: string): boolean {
//   if (str1.length === 0) return true
//   if (str2.length === 0) return false
//   if (str1[0] === str2[0]) return isSubsequence(str1.slice(1), str2.slice(1))
//   return isSubsequence(str1, str2.slice(1))
// }

function isSubsequence(str1: string, str2: string) {
  let i = 0

  if (str1.length === 0) return true

  for (const val of str2) {
    if (str1[i] === val) i++
    if (i === str1.length) return true
  }

  return false
}