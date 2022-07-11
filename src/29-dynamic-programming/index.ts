/**
 * What is Dynamic Programming:
 * A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions.
 *
 * When use Dynamic Programming:
 * - Overlapping Subproblems (Fibonacci): it can be broken down into subproblems which are reused several times
 * - Optimal Substructure (Shortest path): an optimal solution can be constructed from optimal solutions of its subproblems
 */

// Recursive solution - BigO: O(2^n)
function fibonacci(n: number): number {
  if (n <= 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

// Memoization solution - BiO: O(n)
// Space Complexity is still bad. When n = 10000, it throw Uncaught RangeError: Maximum call stack size exceeded
function fib_memo(n: number, cache: number[] = [0, 1, 1]): number {
  if (n <= 2) return 1
  if (cache[n]) return cache[n]
  cache[n] = fib_memo(n - 1, cache) + fib_memo(n - 2, cache)
  return cache[n]
}

// Tabulation solution without recursion - BigO: O(n)
// Space Complexity is good. When n = 10000, it's not throw error
function fib_table(n: number) {
  if (n <= 2) return 1
  const fib = [0, 1, 1]
  for (let i = 3; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib[n]
}

// console.time('Fibonacci')
// console.log(fibonacci(45))
// console.timeEnd('Fibonacci')
// Fibonacci: 8011.676025390625 ms

// console.time('Fibonacci with cache')
// console.log(fib_memo(45))
// console.timeEnd('Fibonacci with cache')
// Fibonacci with cache: 0.105712890625 ms

// console.time('Fibonacci without recursion')
// console.log(fib_table(45))
// console.timeEnd('Fibonacci without recursion')
// Fibonacci without recursion: 0.10400390625 ms

import './coin-change'
