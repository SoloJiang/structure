/**
 * 对一个数组的操作进行观察
 * 起源：在 Vue 的数据绑定中会对一个对象属性的变化进行监听
 * 并且通过依赖收集做出相应的视图更新等等
 * 问题：一个对象所有类型的属性变化都能被监听到吗？
 * 以下尝试：
 */
import { observe } from './mvvm'
const data = {
  name: 'Jiang',
  userInfo: {
    gender: 0
  },
  list: []
}
// 此处直接使用了前面写好的 getter/setter
observe(data)
data.name = 'Solo'
data.userInfo.gender = 1
data.list.push(1)
console.log(data)
