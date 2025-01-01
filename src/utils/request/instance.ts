import router from '@/router'
import { useUserStore } from '@/stores'
import { message } from 'ant-design-vue'
import axios from 'axios'
import { Request } from './index'

// 创建axios实例
const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 10000,
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
    const { response } = error

    switch (response?.status) {
      case 401:
        // token 过期或无效，清除token并跳转登录
        const userStore = useUserStore()
        userStore.logout()
        router.push('/login')
        break
      case 403:
        message.error('没有权限')
        break
      case 404:
        message.error('请求的资源不存在')
        break
      case 500:
        message.error('服务器错误')
        break
      default:
        message.error(error.message || '请求失败')
    }

    return Promise.reject(error)
  }
)

export const request = new Request(axiosInstance)

