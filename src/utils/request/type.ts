import type { AxiosResponse, CreateAxiosDefaults, InternalAxiosRequestConfig } from "axios";

// request client options
export type RequestClientOptions = CreateAxiosDefaults


// request interceptor config type
export interface RequestInterceptorConfig {
  fulfilled?: (
    config: InternalAxiosRequestConfig<any>
  ) => InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>,
  rejected?: (
    error: any
  ) => any
}


// response interceptor config type
export interface ResponseInterceptorConfig<T = any> {
  fulfilled?: (
    response: AxiosResponse<T>
  ) => AxiosResponse | Promise<AxiosResponse>,
  rejected?: (
    error: any
  ) => any
}