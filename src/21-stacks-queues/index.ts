/**
 * Stack: LIFO (last in first out)
 * Where stacks are used:
 * - Managing function invocations (call stack to debug FE)
 * - Ctrl Z to undo, the program store actions like a stack
 * - Routing (remember pages visited and go back) is treated like a stack
 */
import './stack'

/**
 * Queue: FIFO (first in first out)
 * How do we use them in programming?
 * - Background tasks
 * - Uploading resources
 * - Printing / Task processing
 */
import './queue'

/**
 * BigO by using Singly Linked Lists:
 *                          Stacks            Queue
 * Insertion                O(1) unshift      O(1) push
 * Removal                  O(1) shift        O(1) shift
 */

/**
 * BigO by using Array:
 *                          Stacks            Queue
 * Insertion                O(1) push         O(1) push
 * Removal                  O(1) pop          O(N) shift - reindex
 */
