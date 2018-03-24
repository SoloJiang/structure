'use strict'

import Lazyman from '../action/Lazyman'
import { curry } from '../action/Curry'
require('../action/findMost')
function add(x, y, z, a, b, c) {
  return [...arguments].reduce((prev, next) => prev + next)
}
const testCurry = curry(add)
console.log(testCurry(1)(2, 3)(4, 5 ,6))
