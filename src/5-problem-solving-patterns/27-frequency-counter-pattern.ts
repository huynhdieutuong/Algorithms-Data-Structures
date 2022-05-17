// 1. Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// example
const res1 = same([1, 2, 3], [4, 1, 9]) // true
const res2 = same([1, 2, 3], [1, 9]) // false
const res3 = same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)
console.log({ res1, res2, res3 })

// Naive solution 1: O(N)
// function same(arr1: number[], arr2: number[]) {
//   if (arr1.length !== arr2.length) return false

//   const sortedArr1 = arr1.sort((a, b) => a - b);
//   const sortedArr2 = arr2.sort((a, b) => a - b);

//   let result = true
//   for (let i = 0; i < arr1.length; i++) {
//     if (Math.pow(sortedArr1[i], 2) !== sortedArr2[i]) {
//       result = false
//       break
//     }
//   }

//   return result
// }

// Naive solution 2: O(N2)
// function same(arr1: number[], arr2: number[]) {
//   if (arr1.length !== arr2.length) return false

//   for (let i = 0; i < arr1.length; i+=2) {
//     const correctIndex = arr2.indexOf(arr1[i] ** 2)
//     if (correctIndex === -1) return false
//     arr2.splice(correctIndex, 1)
//   }

//   return true
// }

// Frequency Counter Pattern: O(N)
function same(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) return false

  interface FrequencyCounter {
    [index: number]: number
  }

  const frequencyCounter1: FrequencyCounter = {}
  const frequencyCounter2: FrequencyCounter = {}

  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  for (const key in frequencyCounter1) {
    if (!frequencyCounter2.hasOwnProperty(Number(key) ** 2)) return false
    if (frequencyCounter1[key] !== frequencyCounter2[Number(key) ** 2]) return false
  }

  return true
}

// 2. Anagrams: Give two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// Assume: input is single word, won't be spaces, periods, punctuation, numbers

const re1 = validAnagram('', '') // true
const re2 = validAnagram('aaz', 'zza') // false
const re3 = validAnagram('anagram', 'nagaram') // true
const re4 = validAnagram('rat', 'car') // false
const re5 = validAnagram('awesome', 'awesom') // false
const re6 = validAnagram('qwerty', 'qeywrt') // true
const re7 = validAnagram('texttwisttime', 'timetwisttext') // true
console.log({ re1, re2, re3, re4, re5, re6, re7 })

// function validAnagram(str1: string, str2: string) {
//   if (str1.length !== str2.length) return false

//   interface FrequencyCounter {
//     [char: string]: number
//   }

//   const frequencyCounter1: FrequencyCounter = {}
//   const frequencyCounter2: FrequencyCounter = {}

//   for (let i = 0; i < str1.length; i++) {
//     frequencyCounter1[str1[i]] = (frequencyCounter1[str1[i]] || 0) + 1
//     frequencyCounter2[str2[i]] = (frequencyCounter2[str2[i]] || 0) + 1
//   }

//   for (const key in frequencyCounter1) {
//     if (!frequencyCounter2.hasOwnProperty(key)) return false
//     if (frequencyCounter1[key] !== frequencyCounter2[key]) return false
//   }

//   return true
// }

function validAnagram(str1: string, str2: string) {
  if (str1.length !== str2.length) return false
  const lookup: {
    [letter: string]: number
  } = {}

  for (let i = 0; i < str1.length; i++) {
    const letter = str1[i]
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1)
  }

  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i]
    if (!lookup[letter]) return false
    lookup[letter] -= 1
  }

  return true
}
