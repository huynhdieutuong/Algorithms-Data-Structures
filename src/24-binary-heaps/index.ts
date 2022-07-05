/**
 * What is a Binary Heap?
 * Very similar to a Binary Search Tree, but:
 * - In a MaxBinaryHeap, parent nodes are always larger than child nodes.
 * - In a MinBinaryHeap, parent nodes are always smaller than child nodes.
 */

/**
 * For any index of an array n
 * - The left child is stored at 2n + 1
 * - The right child is stored at 2n + 2
 * - If have children's index, find the parent: Math.floor((index - 1)/2)
 */

import './max-binary-heap'

// Priority Queue is a Min Binary Heap, the lowest number (priority) is served first
import './priority-queue'

/**
 * BigO of Binary Heaps:
 * Insertion - O(logN)
 * Removal - O(logN)
 * Search - O(N)
 */
