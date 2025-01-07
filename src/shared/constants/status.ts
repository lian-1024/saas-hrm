/**
 * 通用启用状态枚举
 */
export const EnableStatus = {
  /**
   * 未启用
   */
  DISABLED: 0,

  /**
   * 已启用
   */
  ENABLED: 1
} as const

/**
 * 启用状态映射
 */
export const EnableStatusMap = {
  [EnableStatus.DISABLED]: '未启用',
  [EnableStatus.ENABLED]: '已启用'
} as const

export type EnableStateType = typeof EnableStatus[keyof typeof EnableStatus]

/**
 * 开启状态枚举
 */
export const OpenStatus = {
  /**
   * 未开启
   */
  CLOSED: 0,

  /**
   * 已开启
   */
  OPENED: 1
} as const

/**
 * 开启状态映射
 */
export const OpenStatusMap = {
  [OpenStatus.CLOSED]: '未开启',
  [OpenStatus.OPENED]: '已开启'
} as const
