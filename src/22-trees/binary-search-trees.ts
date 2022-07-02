class TreeNode {
  val: number
  left: TreeNode
  right: TreeNode

  constructor(val: number) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  root: TreeNode

  constructor() {
    this.root = null
  }

  insert(val: number) {
    const newNode = new TreeNode(val)
    if (!this.root) {
      this.root = newNode
      return this
    }
    let current = this.root
    while (true) {
      if (current.val === val) return
      if (current.val > val) {
        if (!current.left) {
          current.left = newNode
          return this
        }
        current = current.left
      } else {
        if (!current.right) {
          current.right = newNode
          return this
        }
        current = current.right
      }
    }
  }

  find(val: number) {
    if (!this.root) return null
    let current = this.root
    while (current) {
      if (current.val === val) return current
      if (current.val > val) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return null
  }
}

const tree = new BinarySearchTree()
tree.insert(20)
tree.insert(15)
tree.insert(30)
tree.insert(10)
tree.insert(18)
tree.insert(21)
tree.insert(31)
tree.insert(12)
tree.insert(16)
tree.insert(25)
tree.insert(22)
//                 20
//       15									30
// 10				  18			21				 31
//   12	   16							25
//                    22
// debugger

export { TreeNode, BinarySearchTree }
