import type { RequestMethodsType } from '@/shared/constants/api'
import type { Response } from '@/shared/types/index'
// 请求配置接口，定义了请求的基本配置
export interface RequestConfig {
  url: string  // 请求的URL地址
  method?: RequestMethodsType   // 请求方法，可选，默认为GET
  data?: any  // 请求体数据，通常用于POST、PUT等请求
  params?: any  // 请求参数，通常用于GET请求
  headers?: Record<string, string>  // 请求头，键值对形式
  [key: string]: any  // 允许添加其他任意属性
}

// 请求器接口，定义了请求器的基本行为
export interface RequestAdapter {
  request<T>(config: RequestConfig): Promise<Response<T>>  // 发起请求的方法，返回一个Promise，Promise的结果为Response<T>
}