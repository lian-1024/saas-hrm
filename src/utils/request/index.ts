import { RequestMethods } from '@/constants/api';
import type { Response } from '@/types/api';
import type { AxiosInstance, AxiosResponse } from 'axios'; // 从axios库中导入AxiosInstance和AxiosResponse类型

// 请求配置接口，定义了请求的基本配置
export interface RequestConfig {
  url: string  // 请求的URL地址
  method?: RequestMethods | string  // 请求方法，可选，默认为GET
  data?: any  // 请求体数据，通常用于POST、PUT等请求
  params?: any  // 请求参数，通常用于GET请求
  headers?: Record<string, string>  // 请求头，键值对形式
  [key: string]: any  // 允许添加其他任意属性
}

// 请求器接口，定义了请求器的基本行为
export interface RequestAdapter {
  request<T>(config: RequestConfig): Promise<Response<T>>  // 发起请求的方法，返回一个Promise，Promise的结果为Response<T>
}

// Axios适配器，实现了RequestAdapter接口，使用axios库进行请求
export class AxiosAdapter implements RequestAdapter {
  private axios: AxiosInstance  // 私有属性，存储axios实例

  constructor(axiosInstance: AxiosInstance) {
    this.axios = axiosInstance  // 构造函数，接收一个axios实例并赋值给私有属性
  }

  async request<T>(config: RequestConfig): Promise<Response<T>> {
    try {
      const response: AxiosResponse<Response<T>> = await this.axios.request(config)  // 使用axios发起请求，并等待响应
      return response.data  // 返回响应的数据部分
    } catch (error: any) {
      throw error  // 如果请求失败，抛出错误
    }
  }
}

// 请求类，封装了请求的通用操作
export class Request {
  private adapter: RequestAdapter  // 私有属性，存储请求适配器实例

  constructor(adapter: AxiosInstance | RequestAdapter) {
    if ('request' in adapter) {
      this.adapter = adapter as RequestAdapter  // 如果传入的adapter已经实现了RequestAdapter接口，则直接使用
    } else {
      this.adapter = new AxiosAdapter(adapter as AxiosInstance)  // 否则，创建一个新的AxiosAdapter实例
    }
  }

  // 通用请求方法，接收URL和配置，返回响应
  async request<T>(url: string, config: Omit<RequestConfig, 'url'>): Promise<Response<T>> {
    return this.adapter.request<T>({ url, ...config });  // 调用适配器的request方法发起请求
  }

  // GET请求方法，接收URL和配置，返回响应
  async get<T>(url: string, config: Omit<RequestConfig, 'url'> = {}): Promise<Response<T>> {
    return this.request<T>(url, { ...config, method: RequestMethods.GET });
  }

  // POST请求方法，接收URL和配置，返回响应
  async post<T>(url: string, config: Omit<RequestConfig, 'url'> = {}): Promise<Response<T>> {
    return this.request<T>(url, { ...config, method: RequestMethods.POST });
  }

  // PUT请求方法，接收URL和配置，返回响应
  async put<T>(url: string, config: Omit<RequestConfig, 'url'> = {}): Promise<Response<T>> {
    return this.request<T>(url, { ...config, method: RequestMethods.PUT });
  }

  // DELETE请求方法，接收URL和配置，返回响应
  async delete<T>(url: string, config: Omit<RequestConfig, 'url'> = {}): Promise<Response<T>> {
    return this.request<T>(url, { ...config, method: RequestMethods.DELETE });
  }
}
