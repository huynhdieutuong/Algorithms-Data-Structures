// Some prototype is linear search O(N): indexOf, includes, find, findIndex

/**
 * Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.
 * Don't use indexOf to implement this function!
 */
const res58_1 = linearSearch([10, 15, 20, 25, 30], 15) // 1
const res58_2 = linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
const res58_3 = linearSearch([100], 100) // 0
const res58_4 = linearSearch([1, 2, 3, 4, 5], 6) // -1
const res58_5 = linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
const res58_6 = linearSearch([100], 200) // -1
console.log({ res58_1, res58_2, res58_3, res58_4, res58_5, res58_6 })

function linearSearch(array: number[], num: number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) return i
  }
  return -1
}
