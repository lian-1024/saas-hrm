export const MESSAGE_LEVEL = {
  NOTIFICATION: 1,
  TIPS: 2,
  IMPORTANT: 3,
  URGENT: 4,
} as const



export type MessageLevelType = typeof MESSAGE_LEVEL[keyof typeof MESSAGE_LEVEL]