import type { Response } from '@/types/api'
import { ref } from 'vue'
interface UseRequestOptions<TData, TParams = any> {
  /**是否手动触发请求 */
  manual?: boolean
  /**默认数据 */
  defaultData?: TData,
  defaultParams?: TParams
  /**请求成功时触发 */
  onSuccess?: (data: Response<TData>) => void
  /**请求失败时触发 */
  onError?: (error: any) => void
  /**请求完成时触发 */
  onFinally?: () => void
}

// 获取函数参数类型
type GetFunctionParams<T> = T extends (params: infer P) => any ? P : never

export function useRequest<TData = any, TParams = any>(
  requestFn: (params: TParams) => Promise<Response<TData>>,
  options: UseRequestOptions<TData, TParams> = {}
) {
  const {
    manual = false,
    defaultParams,
    onSuccess,
    onError,
    onFinally
  } = options

  /**请求返回的数据 */
  const data = ref<Response<TData> | undefined>()
  /**请求状态 */
  const loading = ref(false)
  /**请求错误 */
  const error = ref<any>(null)

  /**运行请求 */
  const run = async (params?: TParams) => {
    loading.value = true
    error.value = null

    try {
      const res = await requestFn(params as TParams)
      data.value = res

      if (!res.success) {
        console.log("error:", res);

        throw new Error(res.message)
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
    run(defaultParams)
  }

  return {
    data,
    loading,
    error,
    run
  }
}

