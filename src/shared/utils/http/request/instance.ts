import { useUserStore } from '@/core/stores'
import axios from 'axios'
import { Request } from './index'

// 创建axios实例
const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    "responseType": "blob"
  }
})

// 添加拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 获取 token
    const userStore = useUserStore()
    const token = userStore.token

    // 如果有token则添加到请求头
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }


    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    // 检查响应头或其他逻辑来决定如何处理响应
    if (response.headers['content-type'].includes('application/json')) {
      return response.data; // 处理为JSON
    } else {
      return response; // 直接返回Blob数据
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const request = new Request(axiosInstance)

