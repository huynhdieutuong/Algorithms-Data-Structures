const res73_1 = selectionSort([1, 2, 3, 4, 5, 6, 7, 37, 45, 29, 8, 12, 88])
console.log({ res73_1 })

function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      console.log('Selection sort loop')
      if (arr[min] > arr[j]) min = j
    }
    if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]]
  }
  return arr
}
