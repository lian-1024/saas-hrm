import type { Response } from '@/shared/types/index'
import { ref } from 'vue'
import type { UseRequestOptions } from './types'
export function useRequest<TData = any>(
  requestFn: (...args: any[]) => Promise<Response<TData>>,
  options: UseRequestOptions<TData> = {},
) {
  const { manual = false, onSuccess, onError, onFinally } = options

  /**请求返回的数据 */
  const data = ref<Response<TData> | undefined>()
  /**请求状态 */
  const loading = ref(false)
  /**请求错误 */
  const error = ref<any>(null)

  /**运行请求 */
  const run = async (...args: any[]) => {
    loading.value = true
    error.value = null

    try {
      const res = await requestFn(...args)
      data.value = res

      if (res.success !== undefined) {
        if (!res.success) {
          throw new Error(res.message)
        }
      }

      onSuccess?.(res)
      return res
    } catch (err) {
      error.value = err
      onError?.(err)
      throw err
    } finally {
      loading.value = false
      onFinally?.()
    }
  }

  // 如果不是手动模式，则自动触发
  if (!manual) {
    run()
  }

  return {
    data,
    loading,
    error,
    run,
  }
}
