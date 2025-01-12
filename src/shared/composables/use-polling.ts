import { onMounted, onUnmounted } from 'vue'

interface PollingOptions {
  // 轮询间隔(ms)
  interval?: number
  // 是否立即执行
  immediate?: boolean
  // 是否自动开始轮询
  autoStart?: boolean
}

export const usePolling = (
  fn: () => Promise<void> | void,
  options: PollingOptions = {}
) => {
  const {
    interval = 30000,
    immediate = true,
    autoStart = true
  } = options

  let pollingTimer: number | null = null

  // 开始轮询
  const startPolling = () => {
    // 如果需要立即执行
    if (immediate) {
      fn()
    }
    // 设置定时器
    pollingTimer = setInterval(fn, interval)
  }

  // 停止轮询
  const stopPolling = () => {
    if (pollingTimer) {
      clearInterval(pollingTimer)
      pollingTimer = null
    }
  }

  onMounted(() => {
    if (autoStart) {
      startPolling()
    }
  })

  onUnmounted(() => {
    stopPolling()
  })

  return {
    startPolling,
    stopPolling
  }
} 