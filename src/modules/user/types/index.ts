import { type QRCodeStatusType } from '../constants'
export interface LoginParams {
  mobile: string
  password: string
}

/**
 * 用户信息
 */
export interface UserInfoVO {
  roles: {
    menus: string[]
    points: string[]
  }
  companyId: string
  company: string
  userId: number
  mobile: string
  username: string
  staffPhoto: string
  departmentName: string
  departmentId: number
  base64Img: string
}
/**
 * 用户权限点对象
 */
export interface Roles {
  /**
   * 路由权限点数组, 每个字符串, 是用项目设置的, 标记英文字符串
   */
  menus: string[]
  /**
   * 按钮权限点数组, 每个字符串, 是用项目设置的, 标记英文字符串
   */
  points: string[]
}

export interface UpdatePasswordParams {
  oldPassword: string
  newPassword: string
}

export interface UpdateAvatarParams {
  staffPhoto: string
}

export interface QRCodeStatus {
  /**
   * 1 用户未扫码但是加密串正常
   * 2 用户已扫码但未点击登录
   * 3 扫码登录成功
   * 4 二维码密钥已失效
   * 5 用户取消了登录
   */
  status: QRCodeStatusType
  userId: number
}
