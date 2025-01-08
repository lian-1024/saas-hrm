export const OpenModalType = {
  PASSWORD: 'password',
  AVATAR: 'avatar'
} as const

export type ModalType = typeof OpenModalType[keyof typeof OpenModalType]


export const AvatarCropperOperation = {
  ROTATE_RIGHT: 'rotateRight',
  ROTATE_LEFT: 'rotateLeft',
  GET_CROP_DATA: "getCropData"
} as const


export type AvatarCropperOperationType = typeof AvatarCropperOperation[keyof typeof AvatarCropperOperation]
