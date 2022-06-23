// const res82_1 = merge([1, 10, 50], [2, 14, 99, 100])
// const res82_2 = merge([], [1, 3])
// const res82_3 = merge([100], [2, 14, 99, 100])
// const res82_4 = merge([4], [6])
// console.log({ res82_1, res82_2, res82_3, res82_4 })

// Time complexity: O(N + M)
function merge(arr1: number[], arr2: number[]) {
  if (arr1.length === 0) return arr2
  if (arr2.length === 0) return arr1

  let result: number[] = []
  let start1 = 0
  let start2 = 0

  while (start1 < arr1.length && start2 < arr2.length) {
    if (arr1[start1] > arr2[start2]) {
      result.push(arr2[start2])
      start2++
    } else {
      result.push(arr1[start1])
      start1++
    }
  }

  if (start1 === arr1.length && start2 < arr2.length) result = [...result, ...arr2.slice(start2)]
  if (start2 === arr2.length && start1 < arr1.length) result = [...result, ...arr1.slice(start1)]

  return result
}

const res82_5 = mergeSort([1, 2, 3, 4, 5, 6, 7, 37, 45, 29, 8, 12, 88])
console.log({ res82_5 })

function mergeSort(arr: number[]): number[] {
  if (arr.length === 1) return arr
  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  return merge(left, right)
}
