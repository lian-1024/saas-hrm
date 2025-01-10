import { useUserStore } from '@/core/stores'
import { DEFAULT_ERROR_MESSAGE, HTTP_ERROR_MESSAGES, NETWORK_ERROR_MESSAGE } from '@/shared/constants/http-message'
import { HttpStatus } from '@/shared/constants/http-status'
import { throttledErrorMessage } from '@/shared/utils/http/utils/throttled-error-message'
import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { requestCancel } from './request-cancel'

const throttled = throttledErrorMessage()


export const setRequestInterceptor = (instance: AxiosInstance) => {
  // 添加拦截器
  instance.interceptors.request.use(
    (config) => handleRequestFulfilled(config),
    (error) => handleRequestRejected(error)
  )
}

export const setResponseInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => handleResponseFulfilled(response),
    (error) => handleResponseRejected(error)
  )
}












const handleRequestFulfilled = (config: InternalAxiosRequestConfig<any>) => {
  const userStore = useUserStore()
  const token = userStore.token
  // 添加请求取消
  requestCancel.addPending(config)
  // 如果有token则添加到请求头
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
}

const handleRequestRejected = (error: any) => {
  return Promise.reject(error)
}

const handleResponseFulfilled = (response: AxiosResponse<any, any>) => {
  // 移除请求取消
  requestCancel.removePending(response.config)

  // 检查响应头或其他逻辑来决定如何处理响应
  if (response.headers['content-type'].includes('application/json')) {
    return response.data // 处理为JSON
  } else {
    return response // 直接返回Blob数据
  }
}

const handleResponseRejected = (error: any) => {
  const userStore = useUserStore()

  if (error.response) {
    const { status } = error.response
    const errorMessage = HTTP_ERROR_MESSAGES[status] || DEFAULT_ERROR_MESSAGE

    throttled(errorMessage)
    // 如果是未授权，则登出
    if (status === HttpStatus.UNAUTHORIZED) {
      userStore.logout()
    }
  } else if (error.request) {
    throttled(NETWORK_ERROR_MESSAGE)
  } else {
    throttled(DEFAULT_ERROR_MESSAGE)
  }

  return Promise.reject(error)
}
