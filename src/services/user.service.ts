import type { UserInfoVO } from '@/types/api'
import { request } from '@/utils/request/instance'
class UserService {
  static async getUserInfoByToken() {
    return request.get<UserInfoVO>('/sys/profile')
  }
}

export default UserService