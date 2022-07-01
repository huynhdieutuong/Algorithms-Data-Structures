import './array'
import './singly-linked-list'
import './doubly-linked-lists'

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
 *              Singly linked list    vs      Array           vs          Doubly linked list
 * Insertion    Begin: O(1), End: O(1)        Begin: O(N), End: O(1)      Begin: O(1), End: O(1), Mid: O(N)
 * Removal      Begin: O(1), End: O(N)        Begin: 0(N), End: 0(1)      Begin: 0(1), End: 0(1), Mid: O(N)
 * Searching          O(N)                    O(1)                        O(N), technically is O(N/2)
 *
 * => Singly linked list is an excellent alternative to array when insertion and deletion at the beginning are frequently required
 */

/**
 * Doubly Linked Lists are almost identical to Singly Linked Lists except there is an additional pointer to previous nodes.
 * Better than Singly Linked List for finding nodes and can be done in half the time!
 * However, they do take up more memory considering the extra pointer.
 */
