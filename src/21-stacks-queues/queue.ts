// Implement queue by array, use push and shift || unshift and pop => But both cases still reindex array, it isn't good for performance
// const queue = []
// queue.push('FIRST')
// queue.shift()

// Implement queue by Singly Linked List
class QueueNode {
  val: any
  next: QueueNode

  constructor(val: any) {
    this.val = val
    this.next = null
  }
}

class Queue {
  first: QueueNode
  last: QueueNode
  size: number

  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  // push
  enqueue(val: any) {
    const newNode = new QueueNode(val)
    if (this.size === 0) {
      this.first = this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.size++
    return this
  }

  // shift
  dequeue() {
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

const queue = new Queue()
export { QueueNode, Queue }
