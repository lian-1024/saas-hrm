import { QEChartUI } from '@/shared/components/base/echarts-ui'
import type { ResizeOpts } from 'echarts'
export type EChartUIType = typeof QEChartUI | undefined
export type EChartsThemeType = 'dark' | 'light' | null

/**初始化选项类型 */
export interface EChartsInitOptions {
  devicePixelRatio?: number
  renderer?: 'canvas' | 'svg'
  useDirtyRect?: boolean
}

// ECharts更新选项类型
export interface EChartsUpdateOptions {
  // 是否不跟之前设置的 option 进行合并
  notMerge?: boolean
  // 是否不更新动画
  lazyUpdate?: boolean
  // 是否在本次更新中保留用户交互状态
  silent?: boolean
}

/** 使用ECharts的选项类型 */
export interface UseEChartsOptions {
  theme?: EChartsThemeType
  initOptions?: EChartsInitOptions
  updateOptions?: EChartsUpdateOptions
}

export interface SizeHandlerOptions {
  width?: number | 'auto' // 可选的新宽度
  height?: number | 'auto' // 可选的新高度
  animation?: ResizeOpts['animation']
}
