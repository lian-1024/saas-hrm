import type { Response } from '@/types/api'
import { request } from '@/utils/request/instance'

interface LoginParams {
  mobile: string
  password: string
}

class AuthService {
  static async login(data: LoginParams): Promise<Response<string>> {
    return request.post<string>('/sys/login', data)
  }
}

export default AuthService
