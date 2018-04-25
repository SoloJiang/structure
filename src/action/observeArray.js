/**
 * 对一个数组的操作进行观察
 * 起源：在 Vue 的数据绑定中会对一个对象属性的变化进行监听
 * 并且通过依赖收集做出相应的视图更新等等
 * 问题：一个对象所有类型的属性变化都能被监听到吗？
 */

// 让 arrExtend 先继承 Array 本身的所有属性
const arrExtend = Object.create(Array.prototype)
const arrMethods = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
/**
 * arrExtend 作为一个拦截对象, 对其中的方法进行重写
 */
arrMethods.forEach(method => {
  const oldMethod = Array.prototype[method]
  const newMethod = function(...args) {
    oldMethod.apply(this, args)
    console.log(`${method}方法被执行了`)
  }
  arrExtend[method] = newMethod
})

export default {
  arrExtend
}
