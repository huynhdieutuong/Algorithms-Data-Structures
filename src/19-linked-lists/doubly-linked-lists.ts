class Node2 {
  val: any
  next: Node2
  prev: Node2

  constructor(val: any) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  head: Node2
  tail: Node2
  length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val: any) {
    const newNode = new Node2(val)
    if (this.length === 0) {
      this.head = this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    this.length++
    return this
  }

  pop() {
    if (this.length === 0) return

    const tailNode = this.tail
    if (this.length === 1) {
      this.head = this.tail = null
    } else {
      this.tail = tailNode.prev
      this.tail.next = null
      tailNode.prev = null
    }

    this.length--
    return tailNode
  }

  shift() {
    if (this.length === 0) return

    const headNode = this.head
    if (this.length === 1) {
      this.head = this.tail = null
    } else {
      this.head = headNode.next
      this.head.prev = null
      headNode.next = null
    }

    this.length--
    return headNode
  }

  unshift(val: any) {
    const newNode = new Node2(val)

    if (this.length === 0) {
      this.head = this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }

  get(index: number) {
    const mid = Math.floor(this.length / 2)
    let current = null
    if (mid < index) {
      let tailNode = this.tail
      let start = this.length - 1
      while (start >= index) {
        current = tailNode
        tailNode = tailNode.prev
        start--
      }
    } else {
      let headNode = this.head
      let start = 0
      while (start <= index) {
        current = headNode
        headNode = headNode.next
        start++
      }
    }
    return current
  }

  set(index: number, val: any) {
    const current = this.get(index)
    if (!current) return false
    current.val = val
    return true
  }

  insert(index: number, val: any) {
    if (index < 0 || index > this.length) return false
    if (index === 0) return !!this.unshift(val)
    if (index === this.length) return !!this.push(val)

    const newNode = new Node2(val)
    const current = this.get(index)
    const prevNode = current.prev

    newNode.next = current
    newNode.prev = prevNode
    prevNode.next = newNode
    current.prev = newNode
    this.length++
    return true
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    const current = this.get(index)
    const nextNode = current.next
    const prevNode = current.prev

    current.next = current.prev = null
    nextNode.prev = prevNode
    prevNode.next = nextNode
    this.length--
    return current
  }
}

const list2 = new DoublyLinkedList()
list2.push('Hello')
list2.push('Goodbye')
list2.push('How')
list2.push('are')
list2.push('you')
// debugger
