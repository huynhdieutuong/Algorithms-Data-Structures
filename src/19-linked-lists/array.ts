interface Data {
  [index: number]: any
}
class NewArray {
  length: number
  data: Data

  constructor() {
    this.length = 0
    this.data = {}
  }

  push(val: any) {
    this.data[this.length] = val
    this.length++
    return this.length
  }

  pop() {
    const removedData = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return removedData
  }

  unshift(val: any) {
    const newData: Data = { 0: val }
    for (const key in this.data) {
      newData[Number(key) + 1] = this.data[key]
    }
    this.data = newData
    this.length++
    return this.length
  }

  shift() {
    const newData: Data = {}
    const removedData = this.data[0]
    for (const key in this.data) {
      if (Number(key) !== 0) {
        newData[Number(key) - 1] = this.data[key]
      }
    }
    this.data = newData
    this.length--
    return removedData
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return null
    return this.data[index]
  }

  set(index: number, val: any) {
    if (index < 0 || index >= this.length) return false
    this.data[index] = val
    return true
  }

  insert(index: number, val: any) {
    if (index < 0 || index > this.length) return false
    if (index === 0) return !!this.unshift(val)
    if (index === this.length) return !!this.push(val)

    const newData: Data = {}
    for (const key in this.data) {
      if (Number(key) < index) newData[Number(key)] = this.data[key]
      if (Number(key) === index) newData[Number(key)] = val
      if (Number(key) > index) newData[Number(key)] = this.data[Number(key) - 1]
    }
    newData[this.length] = this.data[this.length - 1]
    this.data = newData
    this.length++
    return true
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    const newData: Data = {}
    const removedData = this.data[index]
    for (const key in this.data) {
      if (Number(key) < index) newData[Number(key)] = this.data[key]
      if (Number(key) > index) newData[Number(key) - 1] = this.data[key]
    }
    this.data = newData
    this.length--
    return removedData
  }
}

const array = new NewArray()
array.push(1)
array.push(2)
array.push(3)
array.push(4)
// debugger
