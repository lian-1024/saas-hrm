import type { Response } from '@/shared/types/index'

export interface UseRequestOptions<TData> {
  /**是否手动触发请求 */
  manual?: boolean
  /**默认数据 */
  defaultData?: TData
  /**请求成功时触发 */
  onSuccess?: (data: Response<TData>) => void
  /**请求失败时触发 */
  onError?: (error: any) => void
  /**请求完成时触发 */,
  onFinally?: () => void
}