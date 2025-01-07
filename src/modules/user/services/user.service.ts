import type { LoginParams, UserInfoVO } from '@/modules/user/types';
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

}

export default UserService