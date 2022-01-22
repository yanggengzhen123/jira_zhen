import { useEffect } from 'react'
/**
 * @description 清理对象中的空值
 * @param {Object} object
 * @example url?name=${param.name} param.name为空
 */
export const cleanObject = (object) => {
  // 在一个函数里，改变传入的对象本身是不好的
  const result = { ...object }
  Object.keys(result).forEach((key) => {
    const value = result[key]
    // 当value为0的时候，不应该走下面这个delete
    if (isVoid(value)) {
      delete result[key]
    }
  })
  return result
}

/**
 * @description 判断value是否为0
 * @param {any} value
 * @return {bealoon}
 */
export const isFalsy = (value) => (value === 0 ? false : !value)
/**
 * @description 判断是否为空
 * @param {any} value
 * @return {bealoon}
 */
export const isVoid = (value) =>
  value === undefined || value === null || value === ''

// 自定义hook
/**
 * @description 封装mounted生命周期
 * @param {() => void} callback
 */
export const useMount = (callback) => {
  useEffect(() => {
    callback()
  }, [])
}
/**
 * @description 自定义防抖hook
 * @param {Function,delay} func delay
 */
const debounce = (func, delay) => {
  let timeout
  return (...param) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      func(...param)
    }, delay)
  }
}
