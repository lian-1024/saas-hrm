import axios from 'axios'
import { setRequestInterceptor, setResponseInterceptor } from './interceptors'

// 创建axios实例
const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    "responseType": "blob"
  }
})

setRequestInterceptor(axiosInstance)
setResponseInterceptor(axiosInstance)


export default axiosInstance
