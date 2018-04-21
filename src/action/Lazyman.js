/*
这是在伯乐在线看到的一篇博文提到的一道题目
觉得非常有趣于是决定自己做做看
先来看看题目吧~


实现一个LazyMan，可以按照以下方式调用:
LazyMan(“Hank”)输出:
Hi! This is Hank!

LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
Hi! This is Hank!
//等待10秒..
Wake up after 10
Eat dinner~

LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
Hi This is Hank!
Eat dinner~
Eat supper~

LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper

以此类推。
 */

/*
初步分析这个函数其实就是一个流程控制,那么就像文章作者所说,
我们需要一个类似于next()的函数来执行下一步的操作
*/
function _LazyMan(name) {
  this.tasks = [] //通过tasks数组来储存任务
  let self = this
  let fn = (function(n) {
    let name = n
    return function() {
      console.log('Hi! This is ' + name + '!')
      self.next()
    }
  })(name)
  this.tasks.push(fn)
  setTimeout(() => {
    self.next()
  }, 0)
}
_LazyMan.prototype.next = function() {
  let fn = this.tasks.shift()
  fn && fn()
}
_LazyMan.prototype.eat = function(name) {
  let self = this
  let fn = (function(n) {
    let name = n
    return function() {
      console.log('Eat ' + name + '~')
      self.next()
    }
  })(name)
  this.tasks.push(fn)
  return this
}
_LazyMan.prototype.sleep = function(time) {
  let self = this
  let fn = (function(time) {
    return function() {
      setTimeout(() => {
        console.log('Wake up after ' + time + 's')
        self.next()
      }, time * 1000)
    }
  })(time)
  this.tasks.push(fn)
  return this
}
_LazyMan.prototype.sleepFirst = function(time) {
  let self = this
  let fn = (function(time) {
    return function() {
      setTimeout(() => {
        console.log('Wake up after ' + time + 's')
        self.next()
      }, time * 1000)
    }
  })(time)
  self.tasks.unshift(fn)
  return this
}
function LazyMan(name) {
  return new _LazyMan(name)
}

export default LazyMan
