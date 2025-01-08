export const OpenModalType = {
  PASSWORD: 'password',
  AVATAR: 'avatar'
} as const

export type ModalType = typeof OpenModalType[keyof typeof OpenModalType]
