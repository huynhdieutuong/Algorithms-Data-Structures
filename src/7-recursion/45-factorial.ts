function factorial(num: number): number {
  if (num <= 1) return 1 // base case
  return num * factorial(num - 1)
}

const res45_01 = factorial(4) // 4!
console.log(res45_01)

// Helper pattern
function collectionOddValues(arr: number[]) {
  let result: number[] = []

  function helper(helperInput: number[]) {
    if (helperInput.length === 0) return
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0])
    helper(helperInput.slice(1))
  }
  helper(arr)

  return result
}
const res45_02 = collectionOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(res45_02)

// Pure recursion - rewrite collectionOddValues function without helper function
function collectionOddValues2(arr: number[]) {
  let newArr: number[] = []
  if (arr.length === 0) return newArr
  if (arr[0] % 2 !== 0) newArr.push(arr[0])
  newArr = newArr.concat(collectionOddValues2(arr.slice(1)))
  return newArr
}
const res45_03 = collectionOddValues2([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(res45_03)
