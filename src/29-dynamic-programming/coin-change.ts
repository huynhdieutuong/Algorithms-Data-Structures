/**
 * Write a function called coinChange which accepts two parameters: an array of denominations and a value. The function should return the number of ways you can obtain the value from the given collection of denominations. You can think of this as figuring out the number of ways to make change for a given value from a supply of coins.
 */

const denominations = [1, 5, 10, 25]
const res29_1 = coinChange(denominations, 1) // 1
const res29_2 = coinChange(denominations, 2) // 1
const res29_3 = coinChange(denominations, 5) // 2
const res29_4 = coinChange(denominations, 10) // 4
const res29_5 = coinChange(denominations, 25) // 13
const res29_6 = coinChange(denominations, 45) // 39
console.log({ res29_1, res29_2, res29_3, res29_4, res29_5, res29_6 })

function coinChange(denominations: number[], num: number) {
  // Create the ways array to 1 plus the amount
  // to stop overflow
  let ways = new Array(num + 1)
  for (let i = 0; i < num + 1; i++) {
    ways[i] = 0
  }
  // Set the first way to 1 because its 0 and there is 1 way to make 0 with 0 coins
  ways[0] = 1

  // Go through all of the coins
  for (let i = 0; i < denominations.length; i++) {
    // Make a comparison to each index value of ways with the coin value.
    for (let j = 0; j < ways.length; j++) {
      if (denominations[i] <= j) {
        // Update the ways array
        ways[j] += ways[j - denominations[i]]
      }
    }
  }

  // return the value at the Nth position of the ways array.
  console.log(ways)
  return ways[num]
}

// i\j       0   1   2   3   4   5   6   7   8   9   10       ways
// 0   1     1   1   1   1   1   1   1   1   1   1   1
// 1   5     1   1   1   1   1   2   2   2   2   2   3
// 2   10    1   1   1   1   1   2   2   2   2   2   4
// 3   25    1   1   1   1   1   2   2   2   2   2   4
