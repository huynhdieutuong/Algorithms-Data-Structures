/**
 * Coding Exercise 10: power
 * Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about the negative bases and exponents.
 */
const res50_1 = power(2, 0) // 1
const res50_2 = power(2, 2) // 4
const res50_3 = power(2, 4) // 16
console.log({ res50_1, res50_2, res50_3 })

// function power(base: number, exponent: number) {
//   if (exponent === 0) return 1

//   let result = base
//   for (let index = 1; index < exponent; index++) {
//     result *= base
//   }
//   return result
// }

// function power(base: number, exponent: number) {
//   if (exponent === 0) return 1

//   let result = base
//   function helper(expo: number): number {
//     if (expo === 1) return result
//     result *= base
//     return helper(expo - 1)
//   }

//   return helper(exponent)
// }

function power(base: number, exponent: number): number {
  if (exponent === 0) return 1
  return base * power(base, exponent - 1)
}

// ==========================================================
/**
 * Coding Exercise 11: factorial
 * Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four (4!) is equal to 24, because 4*3*2*1 equal 24, factorial zero (0!) is always 1.
 */
const res50_4 = factorial1(1) // 1
const res50_5 = factorial1(2) // 2
const res50_6 = factorial1(4) // 24
const res50_7 = factorial1(7) // 5040
console.log({ res50_4, res50_5, res50_6, res50_7 })

function factorial1(num: number): number {
  if (num === 0) return 1
  return num * factorial1(num - 1)
}

// ==========================================================
/**
 * Coding Exercise 12: productOfArray
 * Write a function called productOfArray which takens in an array of numbers and returns the product of them all.
 */
const res50_8 = productOfArray([1, 2, 3]) // 6
const res50_9 = productOfArray([1, 2, 3, 10]) // 60
console.log({ res50_8, res50_9 })

function productOfArray(nums: number[]): number {
  if (nums.length === 0) return 1
  return nums[0] * productOfArray(nums.slice(1))
}

// ==========================================================
/**
 * Coding Exercise 13: recursiveRange
 * Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
 */
const res50_10 = recursiveRange(6) // 21
const res50_11 = recursiveRange(10) // 55
console.log({ res50_10, res50_11 })

function recursiveRange(num: number): number {
  if (num === 0) return 0
  return num + recursiveRange(num - 1)
}

// ==========================================================
/**
 * Coding Exercise 14: fib
 * Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, 13, 21, 34, 55... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
 */
const res50_12 = fib(4) // 3
const res50_13 = fib(10) // 55
const res50_14 = fib(28) // 317811
const res50_15 = fib(35) // 9227465
console.log({ res50_12, res50_13, res50_14, res50_15 })

function fib(num: number): number {
  if (num <= 2) return 1
  return fib(num - 1) + fib(num - 2)
}
