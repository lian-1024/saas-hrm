import type { AxiosRequestConfig } from 'axios'

export class RequestCancel {
  // 存储请求取消的map
  private pendingMap = new Map<string, AbortController>()

  constructor() {
    this.pendingMap = new Map<string, AbortController>()
  }

  /**
   * 生成请求唯一标识
   * @param config 请求配置
   * @returns 请求key
   */
  private generateRequestKey(config: AxiosRequestConfig) {
    const { url, method, params, data } = config
    return [url, method, JSON.stringify(params), JSON.stringify(data)].join('&')
  }

  /**
   * 添加请求取消
   * @param config 请求配置
   */
  addPending(config: AxiosRequestConfig): void {
    const requestKey = this.generateRequestKey(config)
    if (!this.pendingMap.has(requestKey)) {
      const controller = new AbortController()
      this.pendingMap.set(requestKey, controller)
    }
  }

  /**
   * 移除请求取消
   * @param config 请求配置
   */
  removePending(config: AxiosRequestConfig): void {
    const requestKey = this.generateRequestKey(config)
    if (this.pendingMap.has(requestKey)) {
      this.pendingMap.delete(requestKey)
    }
  }

  /**
   * 清除所有请求取消
   */
  clearPending(): void {
    this.pendingMap.forEach((controller) => {
      controller.abort()
    })
    this.pendingMap.clear()
  }
}

// 创建单例
export const requestCancel = new RequestCancel()
