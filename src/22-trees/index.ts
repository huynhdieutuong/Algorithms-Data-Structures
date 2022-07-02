/**
 * Lots of different applications using trees:
 * - HTML DOM
 * - Network Routing
 * - Abstract Syntax Tree
 * - Artificial Intelligence
 * - Folders in Operating Systems
 * - Computer File Systems
 * - JSON (Javascript Object Notation)
 */

import './binary-search-trees'
/**
 * Binary Search Trees (BST):
 * - Every parent node has at most 2 children
 * - Every node to the left of a parent node is always less than the parent
 * - Every node to the right of a parent node is always greater than the parent
 *
 * BigO of BST:
 * Insertion - O(logN)
 * Searching - O(logN)
 * !!! NOT guaranteed! When the tree like a singly linked list => O(N)
 */

// ========== Tree Traversal ============
import './breadth-first-search'
/**
 * Breadth First Search (BFS):
 * 1. Create a queue and an array
 * 2. Enqueue rootNode
 * 3. Dequeue a node and push to array
 * 4. Then enqueue all children of this node
 * 5. Loop 3 & 4 until empty queue
 */

import './depth-first-search'
/**
 * Depth First Search (DFS):
 * - PreOrder: Push node to array, then explore children's node until no children
 * - PostOrder: Explore children's node until no children, then push children node to array firstly
 * - InOrder: Explore left children's node until no left, then push node to array, then explore right children's node until no right
 */

/**
 * BFS vs DFS, which is better?
 * => Both have the same time complexity, but the space complexity:
 * - If a balance tree, BFS use a lot of memory to store data in queue => DFS win
 * - If a tree like singly linked list, DFS use a lot of memory since recursion => BFS win
 */
