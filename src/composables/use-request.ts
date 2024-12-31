
import { ref } from 'vue'

interface UseRequestOptions<TData> {
  /**是否手动触发请求 */
  manual?: boolean
  /**默认数据 */
  defaultData?: TData
  /**请求成功时触发 */
  onSuccess?: (data: TData) => void
  /**请求失败时触发 */
  onError?: (error: any) => void
  /**请求完成时触发 */
  onFinally?: () => void
}

type UseRequestFnType<TData = any, TParams = any> = (params?: TParams) => Promise<TData>



export const useRequest = <TData = any, TParams = any>(requestFn: UseRequestFnType<TData, TParams>, options: UseRequestOptions<TData>) => {
  const {
    manual = false,
    defaultData,
    onSuccess,
    onError,
    onFinally
  } = options

  /**请求返回的数据 */
  const data = ref<TData | undefined>(defaultData)
  /**请求状态 */
  const loading = ref(false)
  /**请求错误 */
  const error = ref<any>(null)

  /**运行请求 */
  const run = async (params?: TParams) => {
    loading.value = true
    error.value = null

    return new Promise(async (resolve, reject) => {
      try {
        // 发送请求并传递参数
        const res = await requestFn(params)
        data.value = res
        onSuccess?.(res)
        resolve(res)
      } catch (err) {
        error.value = err
        onError?.(err)
        reject(err)
      } finally {
        loading.value = false
        onFinally?.()
      }
    })
  }

  // 如果手动触发请求，则不自动触发
  if (!manual) {
    run()
  }

  return {
    data,
    loading,
    error,
    run
  }
}

