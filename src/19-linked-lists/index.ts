import './array'
import './singly-linked-list'

/**
 * Lists
 * - Do not have indexes!
 * - Connected via nodes with a next pointer
 * - Random access is not allowed
 *
 * Arrays
 * - Indexed in order!
 * - Insertion and deletion can be expensive
 * - Can quickly be accessed at a specific index
 */

/**
 *              Singly linked list    vs    Array
 * Insertion          O(1)                    O(N)
 * Removal      Begin: O(1), End: O(N)        Begin: 0(N), End: 0(1)
 * Searching          O(N)                    O(1)
 *
 * => Singly linked list is an excellent alternative to array when insertion and deletion at the beginning are frequently required
 */
