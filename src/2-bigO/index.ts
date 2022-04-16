import { addUpTo1, addUpTo2 } from './5-timing-our-code'

const number = 100000000

const t1 = performance.now()
console.log(addUpTo1(number))
const t2 = performance.now()
console.log(`Time Elapsed 1: ${(t2 - t1) / 1000} seconds.`)

const t3 = performance.now()
console.log(addUpTo2(number))
const t4 = performance.now()
console.log(`Time Elapsed 2: ${(t4 - t3) / 1000} seconds.`)
