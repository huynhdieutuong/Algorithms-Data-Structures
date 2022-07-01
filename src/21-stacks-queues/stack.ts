// Implement stack by array, use push and pop || unshift and shift (but it is not good, it reindex array)
// const stack = []
// stack.push('hello')
// stack.pop()

// Implement stack by singly linked list
class StackNode {
  val: any
  next: StackNode

  constructor(val: any) {
    this.val = val
    this.next = null
  }
}

class Stack {
  first: StackNode
  last: StackNode
  size: number

  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  // Since pop in Singly Linked List need loop all nodes, we implement push and pop as unshift and shift
  // unshift
  push(val: any) {
    const newNode = new StackNode(val)
    if (this.size === 0) {
      this.first = this.last = newNode
    } else {
      newNode.next = this.first
      this.first = newNode
    }
    this.size++
    return this
  }

  // shift
  pop() {
    if (this.size === 0) return null

    const removedNode = this.first
    if (this.size === 1) {
      this.first = this.last = null
    } else {
      this.first = removedNode.next
      removedNode.next = null
    }

    this.size--
    return removedNode.val
  }
}

const stack = new Stack()
// debugger
