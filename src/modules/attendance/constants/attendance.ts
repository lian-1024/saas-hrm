// 考勤状态定义
export const ATTENDANCE_STATUS = {
  1: { text: '正常', color: '#52c41a' },  // 绿色
  2: { text: '旷工', color: '#ff4d4f' },  // 红色
  3: { text: '迟到', color: '#faad14' },  // 橙色
  4: { text: '早退', color: '#faad14' },
  5: { text: '外出', color: '#1890ff' },  // 蓝色
  6: { text: '出差', color: '#1890ff' },
  7: { text: '年假', color: '#52c41a' },
  8: { text: '事假', color: '#faad14' },
  9: { text: '病假', color: '#faad14' },
  10: { text: '婚假', color: '#52c41a' },
  11: { text: '丧假', color: '#8c8c8c' }, // 灰色
  12: { text: '产假', color: '#52c41a' },
  13: { text: '奖励产假', color: '#52c41a' },
  14: { text: '陪产假', color: '#52c41a' },
  15: { text: '探亲假', color: '#52c41a' },
  16: { text: '工伤假', color: '#faad14' },
  17: { text: '调休', color: '#52c41a' },
  18: { text: '产检假', color: '#52c41a' },
  19: { text: '流产假', color: '#faad14' },
  20: { text: '长期病假', color: '#faad14' },
  21: { text: '补签', color: '#1890ff' },
  22: { text: '休息', color: '#8c8c8c' },
  99: { text: '-', color: '#8c8c8c' }
} as const

export type AttendanceStatusKey = keyof typeof ATTENDANCE_STATUS