class PriorityNode {
  val: any
  priority: number

  constructor(val: any, priority: number) {
    this.val = val
    this.priority = priority
  }
}

class PriorityQueue {
  values: PriorityNode[]

  constructor() {
    this.values = []
  }

  enQueue(val: any, priority: number) {
    if (priority < 0) return
    const newNode = new PriorityNode(val, priority)
    this.values.push(newNode)
    this.bubbleUp()
    return this.values
  }

  private bubbleUp() {
    let childrenIndex = this.values.length - 1
    const element = this.values[childrenIndex]

    while (true) {
      const parentIndex = Math.floor((childrenIndex - 1) / 2)
      const parent = this.values[parentIndex]

      if (parentIndex < 0 || element.priority >= parent.priority) break
      this.values[parentIndex] = element
      this.values[childrenIndex] = parent
      childrenIndex = parentIndex
    }
  }

  deQueue() {
    ;[this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ]
    const removed = this.values.pop()
    this.sinkDown()
    return removed
  }

  private sinkDown() {
    let parentIndex = 0
    const element = this.values[parentIndex]

    while (true) {
      let childrenIndex = 2 * parentIndex + 1
      let children = this.values[childrenIndex]
      if (children?.priority > this.values[childrenIndex + 1]?.priority) {
        childrenIndex++
        children = this.values[childrenIndex]
      }

      if (childrenIndex > this.values.length - 1 || element.priority <= children.priority) break
      this.values[parentIndex] = children
      this.values[childrenIndex] = element
      parentIndex = childrenIndex
    }
  }
}

const priQueue = new PriorityQueue()
priQueue.enQueue(10, 3)
priQueue.enQueue(10, 4)
priQueue.enQueue(10, 1)
priQueue.enQueue(10, 7)
priQueue.enQueue(10, 5)
priQueue.enQueue(10, 0)
priQueue.enQueue(10, 2)
priQueue.enQueue(10, 6)
priQueue.enQueue(10, 0)
debugger
//                     0
//             4                1
//          6     5         3       2
//       7
