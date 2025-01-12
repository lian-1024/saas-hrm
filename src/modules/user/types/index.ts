import type { MessageLevelType } from '@/shared/constants/message'
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

export interface UserNotificationVO {
  /**
   * 已读消息
   */
  read: NotificationMessage[];
  /**
   * 未读消息
   */
  unread: NotificationMessage[];
}

/**
 * 发送者信息
 */
export interface SendUser {
  /**
   * 发送者姓名
   */
  username: string;
}

/**
 * 通知消息基础类型
 */
export interface NotificationMessage {
  /**
   * 消息内容
   */
  content: null | string;
  /**
   * 发送时间
   */
  create_time: string;
  /**
   * 消息id
   */
  id: number;
  /**
   * 发送者id
   */
  send_user_id: number;
  /**
   * 发送者信息
   */
  sendUser: SendUser;
  /**
   * 消息等级消息类型 1 通知消息 2 提示消息 3 重要消息 4 紧急消息
   */
  type: MessageLevelType;
  /**
   * 更新时间
   */
  update_time: string;
  /**
   * 当前用户id
   */
  user_id: number;
}