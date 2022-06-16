/**
 * Coding Exercise 15: reverse
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 */
const res53_1 = reverse('awesome') // emosewa
const res53_2 = reverse('rithmschool') // loohcshtir
console.log({ res53_1, res53_2 })

function reverse(str: string): string {
  if (str.length <= 1) return str
  return reverse(str.slice(1)) + str[0]
}

// ==========================================================
/**
 * Coding Exercise 16: isPalindrome
 * Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
 */
const res53_3 = isPalindrome('awesome') // false
const res53_4 = isPalindrome('foobar') // false
const res53_5 = isPalindrome('tacocat') // true
const res53_6 = isPalindrome('amanaplanacanalpanama') // true
const res53_7 = isPalindrome('amanaplanacanalpandemonium') // false
console.log({ res53_3, res53_4, res53_5, res53_6, res53_7 })

// function isPalindrome(str: string): boolean {
//   let start = 0
//   let end = str.length - 1
//   while (start < end) {
//     if (str[start] !== str[end]) return false
//     start++
//     end--
//   }
//   return true
// }
function isPalindrome(str: string): boolean {
  if (str.length <= 1) return true
  if (str[0] !== str[str.length - 1]) return false
  return isPalindrome(str.slice(1, str.length - 1))
}

// ==========================================================
/**
 * Coding Exercise 17: someRecursive
 * Write a recursive function called someRecursive which accepts any array and a callback. The function return true if a single value in the array return true when passed to the callback. Otherwise it returns false.
 */
type CallbackFunction = (val: number) => boolean

const isOdd: CallbackFunction = (val) => val % 2 !== 0
const res53_8 = someRecursive([1, 2, 3, 4], isOdd) // true
const res53_9 = someRecursive([4, 6, 8, 9], isOdd) // true
const res53_10 = someRecursive([4, 6, 8], isOdd) // false
const res53_11 = someRecursive([4, 6, 8], (val) => val > 10) // false
const res53_12 = someRecursive([4, 11, 8], (val) => val > 10) // true
console.log({ res53_8, res53_9, res53_10, res53_11, res53_12 })

function someRecursive(arr: number[], cb: CallbackFunction): boolean {
  if (arr.length === 0) return false
  if (cb(arr[0])) return true
  return someRecursive(arr.slice(1), cb)
}

// ==========================================================
/**
 * Coding Exercise 18: flatten
 * Write a recursive function called flatten which accepts any array of arrays and returns a new array with all values flattened.
 */
const res53_13 = flatten([1, 2, 3, [4, 5]]) // [1, 2, 3, 4, 5]
const res53_14 = flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
const res53_15 = flatten([[1], [2], [3]]) // [1, 2, 3]
const res53_16 = flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1, 2, 3]
console.log({ res53_13, res53_14, res53_15, res53_16 })

function flatten(arr: any[]): number[] {
  const result: number[] = []

  function helper(arr: any[]) {
    if (arr.length === 0) return
    if (typeof arr[0] === 'number') {
      result.push(arr[0])
    }
    if (Array.isArray(arr[0])) {
      helper(arr[0])
    }
    helper(arr.slice(1))
  }

  helper(arr)
  return result
}

// ==========================================================
/**
 * Coding Exercise 19: capitalizeFirst
 * Write a recursive function called capitalizeFirst. Given an array of string, capitalize the first letter of each string in the array.
 */
const res53_17 = capitalizeFirst(['car', 'taco', 'banana']) // ['Car','Taco','Banana']
console.log({ res53_17 })

// function capitalizeFirst(array: string[]): string[] {
//   if (array.length === 1) {
//     return [array[0][0].toUpperCase() + array[0].substr(1)]
//   }
//   const res = capitalizeFirst(array.slice(0, -1))
//   const string =
//     array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1)
//   res.push(string)
//   return res
// }
function capitalizeFirst(arr: string[]): string[] {
  const result: string[] = []

  function helper(arr: string[]) {
    if (arr.length === 0) return
    result.push(arr[0][0].toUpperCase() + arr[0].slice(1).toLowerCase())
    helper(arr.slice(1))
  }
  helper(arr)
  return result
}

// ==========================================================
/**
 * Coding Exercise 20: nestedEvenSum
 * Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
 */
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
}

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
}

const res53_18 = nestedEvenSum(obj1) // 6
const res53_19 = nestedEvenSum(obj2) // 10
console.log({ res53_18, res53_19 })

function nestedEvenSum(obj: any) {
  let result = 0

  function helper(obj: any) {
    for (const key in obj) {
      if (typeof obj[key] === 'number' && obj[key] % 2 === 0) result += obj[key]
      if (typeof obj[key] === 'object') helper(obj[key])
    }
  }
  helper(obj)
  return result
}

// ==========================================================
/**
 * Coding Exercise 21: capitalizeWords
 * Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
 */
let words = ['i', 'am', 'learning', 'recursion']
const res53_20 = capitalizeWords(words) // ['I', 'AM', 'LEARNING', 'RECURSION']
console.log({ res53_20 })

function capitalizeWords(arr: string[]): string[] {
  const result: string[] = []

  function helper(arr: string[]) {
    if (arr.length === 0) return
    result.push(arr[0].toUpperCase())
    helper(arr.slice(1))
  }
  helper(arr)
  return result
}

// ==========================================================
/**
 * Coding Exercise 22: stringifyNumbers
 * Write a recursive function called stringifyNumbers which takens in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!
 */
const obj: any = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
}
const res53_21 = stringifyNumbers(obj)
console.log({ res53_21 })
// {
//   num: "1",
//   test: [],
//   data: {
//       val: "4",
//       info: {
//           isRight: true,
//           random: "66"
//       }
//   }
// }

function stringifyNumbers(obj: any) {
  for (const key in obj) {
    if (typeof obj[key] === 'number') obj[key] = obj[key].toString()
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) stringifyNumbers(obj[key])
  }
  return obj
}

// ==========================================================
/**
 * Coding Exercise 23: collectStrings
 * Write a recursive function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
 */
const obj22 = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
}

const res53_22 = collectStrings(obj22) // ["foo", "bar", "baz"])
console.log({ res53_22 })

function collectStrings(obj: any) {
  const result: string[] = []
  function gatherStrings(obj: any) {
    for (const key in obj) {
      if (typeof obj[key] === 'string') result.push(obj[key])
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) gatherStrings(obj[key])
    }
  }
  gatherStrings(obj)
  return result
}
