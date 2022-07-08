/**
 * Types of Graphs:
 * - Directed graphs and undirected graphs
 * - Weighted graphs and unweighted graphs
 */

/**
 * Storing Graphs by:
 * Adjacency List (hash table):
 * - Can take up less space(in spare graphs) (pros)
 * - Faster to iterate over all edges (pros)
 * - Can be slower to lookup specific edge (cons)
 *
 * Adjacency Matrix (nested array):
 * - Takes up more space (in spare graphs) (cons)
 * - Slower to iterate over all edges (cons)
 * - Faster to lookup specific edge (pros)
 */

/**
 * BigO:
 * |V| - number of vertices     |E| - number of edges
 *                     Adjacency List         Adjacency Matrix
 * - Add Vertex        O(1)                   O(|V^2|)
 * - Add Edge          O(1)                   O(1)
 * - Remove Vertex     O(|V| + |E|)           O(|V^2|)
 * - Remove Edge       O(|E|)                 O(1)
 * - Query             O(|V| + |E|)           O(1)
 * - Storage           O(|V| + |E|)           O(|V^2|)
 */

import './adjacency-list'

/**
 * Graph Traversal uses:
 * - Peer to peer networking
 * - Web crawlers
 * - Finding "closest" matches / recommendations
 * - Shortest path problems:
 *    + GPS Navigation
 *    + Solving mazes
 *    + AI (shortest path to win the game)
 */

/**
 * Graph Traversal:
 * - Depth First Graph:
 *  + Recursive
 *  + Iterative
 * - Breadth First Graph
 */
import './graph-traversal'
