const res66_1 = bubbleSort([1, 2, 3, 4, 5, 6, 7, 37, 45, 29, 8, 12, 88])
console.log({ res66_1 })

// Naive solution
// function bubbleSort(arr: number[]) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       console.log('Bubble sort loop')
//       if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//     }
//   }
//   return arr
// }

// Optimize solution - break the loop if no one is swapped
function bubbleSort(arr: number[]) {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      console.log('Bubble sort loop')
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return arr
}
