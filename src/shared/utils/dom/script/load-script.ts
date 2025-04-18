import type { LoadScriptEvent, LoadScriptOptions } from './types'
// 使用loadScript函数来加载外部脚本，符合依赖倒置原则（Dependency Inversion Principle）
export const loadScript: LoadScriptEvent = (url, options) => {
  // 创建一个新的script元素
  const script = document.createElement('script')

  // 设置script元素的src属性和type属性
  script.src = url
  script.type = typeof options === 'object' && options.type ? options.type : 'text/javascript'

  // 如果提供了onSuccess或onError回调函数，则绑定到script元素上
  if (typeof options === 'object') {
    const { onSuccess, onError } = options

    if (onSuccess) {
      // 当然可以使用 promise 的 resolve 将此函数返回一个promise
      script.onload = (event) => onSuccess(event)
    }

    if (onError) {
      script.onerror = () => onError()
    }
  }

  // 将script元素添加到body中完成加载
  document.body.appendChild(script)
}
