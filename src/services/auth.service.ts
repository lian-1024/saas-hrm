import type { LoginParams } from '@/types/api'
import { request } from '@/utils/request/instance'


class AuthService {
  static login = (data: LoginParams) => {
    return request.post<string>('/sys/login', {
      data
    })
  }
}

export default AuthService
