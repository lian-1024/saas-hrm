import { RequestMethods } from '@/shared/constants/api';
import type { Response } from '@/shared/types/index';
import type { AxiosInstance, AxiosResponse } from 'axios'; // 从axios库中导入AxiosInstance和AxiosResponse类型
import { axiosInstance } from './axios';
import type { RequestAdapter, RequestConfig } from './types';

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

// 创建单例实例
const instance = new Request(axiosInstance)

// 导出单例
export { instance as request }
