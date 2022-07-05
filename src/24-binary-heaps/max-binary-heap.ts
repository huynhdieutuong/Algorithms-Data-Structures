class MaxBinaryHeap {
  values: number[]

  constructor() {
    this.values = [41, 39, 33, 18, 27, 12]
  }

  insert(ele: number) {
    this.values.push(ele)
    this.bubbleUp()
    return this.values
  }

  private bubbleUp() {
    let childrenIndex = this.values.length - 1
    const element = this.values[childrenIndex]

    while (true) {
      const parentIndex = Math.floor((childrenIndex - 1) / 2)
      const parent = this.values[parentIndex]
      if (parentIndex < 0 || element <= parent) break
      this.values[parentIndex] = element
      this.values[childrenIndex] = parent
      childrenIndex = parentIndex
    }
  }

  extractMax() {
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
      if (children < this.values[childrenIndex + 1]) {
        childrenIndex++
        children = this.values[childrenIndex]
      }
      if (childrenIndex > this.values.length - 1 || children <= element) break
      this.values[parentIndex] = children
      this.values[childrenIndex] = element
      parentIndex = childrenIndex
    }
  }
}

const heap = new MaxBinaryHeap()
// [41, 39, 33, 18, 27, 12]
//             41
//     39               33
// 18      27      12

heap.insert(55)
// [55, 39, 41, 18, 27, 12, 33]
//             55
//     39               41
// 18      27      12       33

heap.insert(100)
// [100, 55, 41, 39, 27, 12, 33, 18]
//                  100
//          55               41
//      39      27      12        33
// 18

heap.extractMax()
// [55, 39, 41, 18, 27, 12, 33]
//                  55
//          39               41
//      18      27      12        33

heap.extractMax()
// [41, 39, 33, 18, 27, 12]
//                  41
//          39               33
//      18      27      12
