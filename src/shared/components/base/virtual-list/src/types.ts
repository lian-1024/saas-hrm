import type { CSSProperties } from 'vue'

export interface VirtualListProps {
  /** 列表数据 */
  data: any[]
  /** 每项高度(px)，必须固定值 */
  itemHeight: number
  /** 可视区域高度(px) */
  height?: number | string
  /** 缓冲区域项数量 */
  buffer?: number
}

export interface VirtualListItemProps {
  /** 单项数据 */
  item: any
  /** 索引 */
  index: number
  /** 样式 */
  style?: CSSProperties
}

export interface VirtualListExpose {
  /** 滚动到指定索引位置 */
  scrollToIndex: (index: number) => void
  /** 滚动到指定像素位置 */
  scrollToOffset: (offset: number) => void
  /** 刷新虚拟列表 */
  refresh: () => void
}

export interface VirtualListItemRenderScope<T = any> {
  /** 单项数据 */
  item: T
  /** 索引 */
  index: number
} 