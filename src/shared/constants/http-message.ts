import { HttpStatus } from './http-status'

export const HTTP_ERROR_MESSAGES: Record<number, string> = {
  [HttpStatus.BAD_REQUEST]: '请求参数错误',
  [HttpStatus.UNAUTHORIZED]: '登录已过期，请重新登录',
  [HttpStatus.FORBIDDEN]: '没有权限访问',
  [HttpStatus.NOT_FOUND]: '请求的资源不存在',
  [HttpStatus.METHOD_NOT_ALLOWED]: '请求方法不允许',
  [HttpStatus.REQUEST_TIMEOUT]: '请求超时',
  [HttpStatus.INTERNAL_SERVER_ERROR]: '服务器内部错误',
  [HttpStatus.BAD_GATEWAY]: '网关错误',
  [HttpStatus.SERVICE_UNAVAILABLE]: '服务不可用',
  [HttpStatus.GATEWAY_TIMEOUT]: '网关超时',
}

export const NETWORK_ERROR_MESSAGE = '网络连接失败，请检查网络'
export const DEFAULT_ERROR_MESSAGE = '请求失败'
