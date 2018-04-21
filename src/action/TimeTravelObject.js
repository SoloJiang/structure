class TimeTravelObject {
  constructor() {
    this.object = Object.create(null)
    this.history = []
  }
  get(time) {
    // to be implemented
    if (time) {
      let i = 0
      if (this.history.length > 1) {
        this.history.some((item, index) => {
          if (item.time > time) {
            i = index - 1
            return true
          }
        })
        return this.history[i].data
      }
    }
    return this.object
  }
  set(path, value) {
    // to be implemented
    let target = Object.create(null)
    let pathArr = path.split('.')
    let len = pathArr.length
    let targetObj = pathArr
      .map(item => {
        let nullObject = Object.create(null)
        nullObject[item] = item
        return nullObject
      })
      .reverse()
      .reduce((prev, next, index) => {
        if (index === 1) {
          prev[pathArr[len - 1]] = value
        }
        next[pathArr[len - 1 - index]] = prev
        return next
      })
    const now = Date.now()
    this.object = targetObj
    this.history.push({
      time: now,
      data: targetObj
    })
  }
  setProperty(object, key) {
    object[key] = {}
  }
}

const tto = new TimeTravelObject()
const now = Date.now()
setTimeout(() => {
  tto.set('r.u.ok.f', 'target')
  console.table(tto.get())
}, 10)
