import type {
  LoginParams,
  QRCodeStatus,
  UpdateAvatarParams,
  UpdatePasswordParams,
  UserInfoVO,
  UserNotificationVO
} from '@/modules/user/types'
import { request } from '@/shared/utils/http/request'

class UserService {
  static async getUserInfoByToken() {
    return request.get<UserInfoVO>('/sys/profile')
  }
  static login = (data: LoginParams) => {
    return request.post<string>('/sys/login', {
      data,
    })
  }

  static updatePassword = (data: UpdatePasswordParams) => {
    return request.put('/sys/user/updatePass', {
      data,
    })
  }

  static updateAvatar = (data: UpdateAvatarParams) => {
    return request.put('/sys/updateStaffPhoto', {
      data,
    })
  }
  static getQRCodeKey = () => {
    return request.get<string>('/sys/qrcodeKey')
  }

  static getQRCodeStatus = (qrcodeKey: string) => {
    return request.get<QRCodeStatus>('/sys/qrcodeState', {
      params: {
        qrcode_key: qrcodeKey,
      },
    })
  }


  static getUserNotification = () => {
    return request.get<UserNotificationVO>('/sys/message')
  }


  static deleteUserNotification = (id: number) => {
    return request.delete('/sys/message/' + id)
  }

  static markUserNotificationAsRead = (id: number) => {
    return request.put('/sys/message/' + id)
  }
}

export default UserService
