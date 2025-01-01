import type { LoginParams } from '@/types/api'
import { request } from '@/utils/request/instance'


class AuthService {
  static login = (params: LoginParams) => {
    return request.post<string>('/sys/login', params)
  }
}

export default AuthService
