import type { LoginParams, UpdatePasswordParams, UserInfoVO } from '@/modules/user/types';
import { request } from '@/shared/utils/http/request/instance';

class UserService {
  static async getUserInfoByToken() {
    return request.get<UserInfoVO>('/sys/profile')
  }
  static login = (data: LoginParams) => {
    return request.post<string>('/sys/login', {
      data
    })
  }

  static updatePassword = (data: UpdatePasswordParams) => {
    return request.put('/sys/user/updatePass', {
      data
    })
  }

}

export default UserService