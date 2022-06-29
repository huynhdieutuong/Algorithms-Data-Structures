// piece of data - val
// reference to next node - next

class Node1 {
  val: any
  next: Node1

  constructor(val: any) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  head: Node1
  tail: Node1
  length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val: any) {
    const newNode = new Node1(val)
    if (this.head === null) {
      this.head = newNode
    } else {
      this.tail.next = newNode
    }
    this.tail = newNode
    this.length++
    return this
  }

  pop() {
    let current = this.head
    let newTail = current
    if (!current) return

    while (current.next) {
      newTail = current
      current = current.next
    }

    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) this.tail = this.head = null

    return current
  }

  shift() {
    let current = this.head
    if (!current) return

    this.head = current.next
    this.length--

    if (this.length === 0) this.head = this.tail = null

    return current
  }

  unshift(val: any) {
    const newNode = new Node1(val)
    if (!this.head) this.tail = newNode
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return null
    let current = this.head
    let counter = 0
    while (counter !== index) {
      current = current.next
      counter++
    }

    return current
  }

  set(index: number, val: any) {
    const foundNode = this.get(index)
    if (!foundNode) return false

    foundNode.val = val
    return true
  }

  insert(index: number, val: any) {
    if (index < 0 || index > this.length) return false
    if (index === 0) return !!this.unshift(val)
    if (index === this.length) return !!this.push(val)

    const newNode = new Node1(val)
    const prevNode = this.get(index - 1)
    const temp = prevNode.next
    prevNode.next = newNode
    newNode.next = temp
    this.length++
    return true
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    const prevNode = this.get(index - 1)
    const removedNode = prevNode.next
    prevNode.next = removedNode.next
    this.length--
    return removedNode
  }

  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node

    let next
    let prev = null
    while (node) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }

    return this
  }

  print() {
    const arr = []
    let current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    return arr
  }
}

const list = new SinglyLinkedList()
list.push('Hello')
list.push('Goodbye')
list.push('How')
list.push('are')
list.push('you')
// debugger
