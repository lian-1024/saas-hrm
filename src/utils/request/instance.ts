import axios from 'axios'
import { Request } from './index'

// 创建axios实例
const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 10000
})

// 添加拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 请求拦截
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    // 响应拦截
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 创建请求实例
export const request = new Request(axiosInstance)
