
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
  menus: string[];
  /**
   * 按钮权限点数组, 每个字符串, 是用项目设置的, 标记英文字符串
   */
  points: string[];
}

export interface UpdatePasswordParams {
  oldPassword: string
  newPassword: string
}

export interface UpdateAvatarParams {
  staffPhoto: string
}

