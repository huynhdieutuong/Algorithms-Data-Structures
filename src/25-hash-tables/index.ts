/**
 * Hash tables:
 * - Collections of key-value pairs
 * - Can find values quickly given a key
 * - Can add new key-values quickly
 * - Store data in a large array, and work by hashing the keys
 * A good 'hash function' should be fast, distribute keys uniformly, and be deterministic
 * Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index (collisions)
 *
 * BigO of Hash Tables:
 * Insert - O(1)
 * Deletion - O(1)
 * Access - O(1)
 */

type HashData = { [key: string]: any }

class HashTable {
  keyMap: Data[][]

  constructor(size: number = 53) {
    this.keyMap = new Array(size)
  }

  private _hash(key: string) {
    let total = 0
    const WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i]
      const value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total
  }

  set(key: string, value: any) {
    const hashNumber = this._hash(key)
    if (!this.keyMap[hashNumber]) this.keyMap[hashNumber] = []
    const obj: HashData = { [key]: value }
    this.keyMap[hashNumber].push(obj)
    return this.keyMap
  }

  get(key: string) {
    const hashNumber = this._hash(key)
    const array = this.keyMap[hashNumber]
    for (let i = 0; i < array.length; i++) {
      const obj: HashData = array[i]
      if (obj[key]) return obj[key]
    }
    return null
  }

  keys() {
    let keysArr: string[] = []
    for (const element of this.keyMap) {
      if (element) {
        for (let j = 0; j < element.length; j++) {
          const obj: HashData = element[j]
          keysArr = keysArr.concat(Object.keys(obj))
        }
      }
    }
    return keysArr
  }

  values() {
    let valuesArr: any[] = []
    for (const element of this.keyMap) {
      if (element) {
        for (let j = 0; j < element.length; j++) {
          const obj: HashData = element[j]
          valuesArr = valuesArr.concat(Object.values(obj))
        }
      }
    }
    return valuesArr
  }
}

const hash = new HashTable(5)
hash.set('pink', '#c51f5d')
hash.set('yellow', '#ffc112')
hash.set('purple', '#7c2b93')
hash.set('orange', '#ff5c31')
hash.set('blue', '#4455ff')
hash.set('green', '#48ff50')
hash.set('red', '#ff310f')
hash.set('red', '#ff310f')
// debugger
