import type { AxiosInstance } from "axios";
import type { RequestInterceptorConfig, ResponseInterceptorConfig } from "../type";

// default request interceptor config
export const defaultRequestInterceptorConfig: RequestInterceptorConfig = {
  fulfilled: (response) => response,
  rejected: (error) => Promise.reject(error),
}

// default response interceptor config
export const defaultResponseInterceptorConfig: ResponseInterceptorConfig = {
  fulfilled: (response) => response,
  rejected: (error) => Promise.reject(error),
}

// interceptor manger
export class InterceptorManager {
  // axios instance
  private axiosInstance: AxiosInstance


  // constructor
  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  // add request interceptor method
  addRequestInterceptor({
    fulfilled,
    rejected
  }: RequestInterceptorConfig = defaultRequestInterceptorConfig) {
    this.axiosInstance.interceptors.request.use(fulfilled, rejected)
  }


  // add response interceptor
  addResponseInterceptor<T = any>({ fulfilled, rejected }: ResponseInterceptorConfig<T> = defaultResponseInterceptorConfig) {
    this.axiosInstance.interceptors.response.use(fulfilled, rejected)
  }
}