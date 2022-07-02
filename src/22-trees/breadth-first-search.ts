import { BinarySearchTree, TreeNode } from './binary-search-trees'
import { Queue } from '../21-stacks-queues/queue'

class BreadthFirstSearch extends BinarySearchTree {
  BreadthFirstSearch() {
    const result: number[] = []
    if (!this.root) return result

    const queue = new Queue()
    queue.enqueue(this.root)

    while (queue.size) {
      const removedNode: TreeNode = queue.dequeue()
      result.push(removedNode.val)
      if (removedNode.left) queue.enqueue(removedNode.left)
      if (removedNode.right) queue.enqueue(removedNode.right)
    }

    return result
  }
}

const tree2 = new BreadthFirstSearch()
tree2.insert(20)
tree2.insert(15)
tree2.insert(30)
tree2.insert(10)
tree2.insert(18)
tree2.insert(21)
tree2.insert(31)
tree2.insert(12)
tree2.insert(16)
tree2.insert(25)
tree2.insert(22)
// console.log(tree2.BreadthFirstSearch())
// [20, 15, 30, 10, 18, 21, 31, 12, 16, 25, 22]
