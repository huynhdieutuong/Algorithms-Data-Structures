/**
 * Why do we need to learn a bunch of sort algorithms?
 * Because there are some cases a sorting algorithm will be faster than another sorting algorithm.
 * Can check animations here: https://www.toptal.com/developers/sorting-algorithms
 * https://visualgo.net/en/sorting
 */

import './66-bubble-sort'
/**
 * Time complexity: O(N2). If the data is nearly sorted or already sorted, then with the optimize solution, it can O(N)
 * Space complexity: O(1)
 */

import './73-selection-sort'
/**
 * Time complexity: O(N2). It is fewer swap times than bubble sort.
 * Space complexity: O(1)
 */

import './77-insertion-sort'
/**
 * Time complexity: O(N2). If the data is nearly sorted or already sorted, it can O(N)
 * Space complexity: O(1)
 */

import './82-merge-sort'
/**
 * Time complexity: O(N logN): N of merge function, logN of the split times
 * Space complexity: O(N)
 */

import './90-quick-sort'
/**
 * Time complexity: O(N logN): N of pivotHelper function, logN of the pivot times (best case)
 * The worst case: If the array already sorted, it is O(N2) => To fix it, choose a random for pivot instead of 0
 * Space complexity: O(log N)
 */

import './97-radix-sort'
/**
 * Time complexity: O(N * loopTimes)
 * Space complexity: O(N + loopTimes)
 */
