export const OpenModalType = {
  PASSWORD: 'password',
  AVATAR: 'avatar'
} as const

export type ModalType = typeof OpenModalType[keyof typeof OpenModalType]


export const AvatarCropperOperation = {
  ROTATE_RIGHT: 'rotateRight',
  ROTATE_LEFT: 'rotateLeft',
} as const


export const QRCodeStatus = {
  UN_SCAN: 1,
  SCANED: 2,
  SUCCESS: 3,
  EXPIRED: 4,
  CANCEL: 5
} as const

export type QRCodeStatusType = typeof QRCodeStatus[keyof typeof QRCodeStatus]

export const QRCodeStatusText = {
  [QRCodeStatus.UN_SCAN]: '未扫码',
  [QRCodeStatus.SCANED]: '已扫码',
  [QRCodeStatus.SUCCESS]: '扫码成功',
  [QRCodeStatus.EXPIRED]: '二维码密钥已失效',
  [QRCodeStatus.CANCEL]: '用户取消了登录'
} as const

export type AvatarCropperOperationType = typeof AvatarCropperOperation[keyof typeof AvatarCropperOperation]
