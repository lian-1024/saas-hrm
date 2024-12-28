// 导入公共枚举中的请求方法类型
import { RequestMethods } from "@/enums/request-methods";

// 引入axios库以及相关接口定义
import { bindMethods } from "@/utils/bind-methods";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults
} from "axios";
import axios from "axios";
import { InterceptorManager } from "./modules/interceptors";
import type { RequestClientOptions } from "./type";



/**
 * 请求客户端类
 */
export class RequestClient {
  /**
   * 私有属性：axios实例
   */
  private readonly instance: AxiosInstance;

  /**
   * 公共属性：添加请求拦截器的函数
   */
  public addRequestInterceptor: InterceptorManager['addRequestInterceptor'];

  /**
   * 公共属性：添加响应拦截器的函数
   */
  public addResponseInterceptor: InterceptorManager['addResponseInterceptor'];

  /**
   * 构造函数
   * @param options - 请求客户端选项对象
   */
  constructor(options: RequestClientOptions = {}) {
    // 默认配置对象
    const defaultConfig: CreateAxiosDefaults = {
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      timeout: 10_000
    };

    // 从options中解构出axiosConfig，然后合并到默认配置上
    const { ...axiosConfig } = options;
    const requestConfig = { ...axiosConfig, ...defaultConfig };

    // 创建axios实例
    this.instance = axios.create(requestConfig);

    // 绑定实例的方法
    bindMethods(this);

    // 实例化拦截器管理器
    const interceptorManage = new InterceptorManager(this.instance);

    // 将拦截器管理器的函数绑定到当前类的实例上
    this.addRequestInterceptor = interceptorManage.addRequestInterceptor.bind(interceptorManage);
    this.addResponseInterceptor = interceptorManage.addResponseInterceptor.bind(interceptorManage);
  }

  /**
   * 发送异步请求的方法
   * @param url - 请求地址
   * @param config - 请求配置参数
   * @returns 返回Promise对象，解析为AxiosResponse<T>
   */
  public async request<T>(url: string, config: AxiosRequestConfig): Promise<T> {
    try {
      // 调用axios实例发送请求，返回响应对象
      const response: AxiosResponse<T> = await this.instance({
        url,
        ...config
      });

      // 返回响应对象
      return response as T;
    } catch (error: any) {
      // 如果错误是响应对象，则抛出数据；否则抛出原始错误对象
      throw error.response ? error.response.data : error;
    }
  }

  /**
   * GET请求的实现
   * @param url - 请求地址
   * @param config - 请求配置参数
   * @returns 返回Promise对象，解析为AxiosResponse<T>
   */
  public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>(url, {
      ...config,
      method: RequestMethods.GET
    });
  }

  /**
   * POST请求的实现
   * @param url - 请求地址
   * @param data - 请求数据
   * @param config - 请求配置参数
   * @returns 返回Promise对象，解析为AxiosResponse<T>
   */
  public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>(url, {
      ...config,
      data,
      method: RequestMethods.POST
    });
  }

  /**
   * DELETE请求的实现
   * @param url - 请求地址
   * @param config - 请求配置参数
   * @returns 返回Promise对象，解析为AxiosResponse<T>
   */
  public delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>(url, {
      ...config,
      method: RequestMethods.DELETE
    });
  }

  /**
   * PUT请求的实现
   * @param url - 请求地址
   * @param data - 请求数据
   * @param config - 请求配置参数
   * @returns 返回Promise对象，解析为AxiosResponse<T>
   */
  public put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.request<T>(url, {
      ...config,
      data,
      method: RequestMethods.PUT
    });
  }
}