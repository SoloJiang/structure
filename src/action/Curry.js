export function curry(fn, ...args) {
  const length = fn.length
  const parameters = args || []
  return (...args) => {
    const _args = [...parameters, ...args]
    if (_args.length < length) {
      return curry(fn, ..._args)
    } else {
      return fn(..._args)
    }
  }
}
