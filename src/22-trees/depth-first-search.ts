import { BinarySearchTree, TreeNode } from './binary-search-trees'

class DepthFirstSearch extends BinarySearchTree {
  PreOrder() {
    const result: number[] = []
    function traverse(node: TreeNode) {
      result.push(node.val)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)
    return result
  }

  PostOrder() {
    const result: number[] = []
    function traverse(node: TreeNode) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      result.push(node.val)
    }

    traverse(this.root)
    return result
  }

  InOrder() {
    const result: number[] = []
    function traverse(node: TreeNode) {
      if (node.left) traverse(node.left)
      result.push(node.val)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)
    return result
  }
}

const tree3 = new DepthFirstSearch()
tree3.insert(20)
tree3.insert(15)
tree3.insert(30)
tree3.insert(10)
tree3.insert(18)
tree3.insert(21)
tree3.insert(31)
tree3.insert(12)
tree3.insert(16)
tree3.insert(25)
tree3.insert(22)

// console.log(tree3.PreOrder())
// [20, 15, 10, 12, 18, 16, 30, 21, 25, 22, 31]

// console.log(tree3.PostOrder())
// [12, 10, 16, 18, 15, 22, 25, 21, 31, 30, 20]

// console.log(tree3.InOrder())
// [10, 12, 15, 16, 18, 20, 21, 22, 25, 30, 31]
