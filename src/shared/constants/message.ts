import type { TagProps } from 'ant-design-vue'

// 消息等级枚举
export const MESSAGE_LEVEL = {
  NOTIFICATION: 1,
  TIPS: 2,
  IMPORTANT: 3,
  URGENT: 4,
} as const

export type MessageLevelType = typeof MESSAGE_LEVEL[keyof typeof MESSAGE_LEVEL]

// 消息等级对应的翻译键
export const MESSAGE_LEVEL_TEXT: Record<MessageLevelType, string> = {
  [MESSAGE_LEVEL.NOTIFICATION]: 'common.message.level.notification',
  [MESSAGE_LEVEL.TIPS]: 'common.message.level.tips',
  [MESSAGE_LEVEL.IMPORTANT]: 'common.message.level.important',
  [MESSAGE_LEVEL.URGENT]: 'common.message.level.urgent',
}

// 消息等级对应的颜色
export const MESSAGE_LEVEL_COLOR: Record<MessageLevelType, TagProps['color']> = {
  [MESSAGE_LEVEL.NOTIFICATION]: 'processing',
  [MESSAGE_LEVEL.TIPS]: 'default',
  [MESSAGE_LEVEL.IMPORTANT]: 'warning',
  [MESSAGE_LEVEL.URGENT]: 'error',
}
