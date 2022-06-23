const res77_1 = insertionSort([1, 2, 3, 4, 5, 6, 7, 37, 45, 29, 8, 12, 88])
console.log({ res77_1 })

function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i]
    let insertIndex
    for (let j = i - 1; j > 0 && currentValue < arr[j]; j--) {
      console.log('Insertion sort loop')
      arr[j + 1] = arr[j]
      insertIndex = j
    }
    if (insertIndex) arr[insertIndex] = currentValue
  }
  return arr
}
