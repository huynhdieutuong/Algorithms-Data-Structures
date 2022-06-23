const res90_1 = quickSort([37, 45, 29, 8, 12, 88, 55])
console.log({ res90_1 })

function pivotHelper(arr: number[], start: number, end: number) {
  const pivot = arr[start]
  let swapIndex = start
  for (let i = start + 1; i < end; i++) {
    if (arr[i] < pivot) {
      swapIndex++
      ;[arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]]
    }
  }
  ;[arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]]
  return swapIndex
}

function quickSort(arr: number[], start = 0, end = arr.length) {
  if (start < end) {
    const pivot = pivotHelper(arr, start, end)
    quickSort(arr, start, pivot)
    quickSort(arr, pivot + 1, end)
  }
  return arr
}
