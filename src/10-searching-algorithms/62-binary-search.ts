// Binary search O(logN)
/**
 * Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.
 */
const res62_1 = binarySearch([1, 2, 3, 4, 5], 2) // 1
const res62_2 = binarySearch([1, 2, 3, 4, 5], 3) // 2
const res62_3 = binarySearch([1, 2, 3, 4, 5], 5) // 4
const res62_4 = binarySearch([1, 2, 3, 4, 5], 6) // -1
const res62_5 = binarySearch(
  [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],
  10
) // 2
const res62_6 = binarySearch(
  [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],
  95
) // 16
const res62_7 = binarySearch(
  [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],
  100
) // -1
console.log({ res62_1, res62_2, res62_3, res62_4, res62_5, res62_6, res62_7 })

function binarySearch(array: number[], num: number) {
  function helper(start: number, end: number): number {
    if (start > end) return -1
    const middle = Math.ceil((start + end) / 2)
    if (array[middle] === num) return middle
    if (array[middle] < num) return helper(middle + 1, end)
    if (array[middle] > num) return helper(start, middle - 1)
  }

  return helper(0, array.length - 1)
}
