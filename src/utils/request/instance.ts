import { useUserStore } from '@/stores'
import axios from 'axios'
import { Request } from './index'

// 创建axios实例
const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json'
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
    return response.data
  },
  (error) => {

    return Promise.reject(error)
  }
)

export const request = new Request(axiosInstance)

