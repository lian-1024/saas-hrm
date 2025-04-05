<script setup lang="ts" generic="T extends Record<string, any>">
import { useAntdToken } from '@/shared/composables/use-antd-token'
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { VirtualListExpose, VirtualListProps } from './types'

defineOptions({
  name: 'QVirtualList'
})

const props = withDefaults(defineProps<VirtualListProps>(), {
  height: '100%',
  buffer: 5
})

defineExpose<VirtualListExpose>({
  scrollToIndex,
  scrollToOffset,
  refresh
})

const { token } = useAntdToken()

// 容器元素引用
const containerRef = ref<HTMLDivElement>()
// 容器高度
const containerHeight = ref(0)
// 滚动位置lli
const scrollTop = ref(0)
// 列表总高度
const listHeight = computed(() => props.data.length * props.itemHeight)
// 可见区域能显示的项目数
const visibleCount = computed(() => 
  Math.ceil(containerHeight.value / props.itemHeight) + props.buffer * 2
)
// 起始索引（包含上方缓冲区）
const startIndex = computed(() => {
  const start = Math.floor(scrollTop.value / props.itemHeight) - props.buffer
  return Math.max(0, start)
})
// 结束索引（包含下方缓冲区）
const endIndex = computed(() => {
  const end = startIndex.value + visibleCount.value
  return Math.min(props.data.length - 1, end)
})
// 可见项目列表
const visibleItems = computed(() => {
  return props.data.slice(startIndex.value, endIndex.value + 1).map((item, index) => {
    return {
      item,
      index: startIndex.value + index,
      style: {
        position: 'absolute',
        top: `${(startIndex.value + index) * props.itemHeight}px`,
        height: `${props.itemHeight}px`,
        width: '100%'
      }
    }
  })
})
// 偏移量计算，防止起始位置为0时的闪烁
const offsetTop = computed(() => 
  startIndex.value * props.itemHeight
)

// 监听滚动事件
const handleScroll = (e: Event) => {
  if (e.target) {
    scrollTop.value = (e.target as HTMLElement).scrollTop
  }
}

// 滚动到指定索引
function scrollToIndex(index: number) {
  if (!containerRef.value) return
  if (index < 0 || index >= props.data.length) return
  
  containerRef.value.scrollTop = index * props.itemHeight
}

// 滚动到指定偏移量
function scrollToOffset(offset: number) {
  if (!containerRef.value) return
  containerRef.value.scrollTop = offset
}

// 刷新列表
function refresh() {
  nextTick(() => {
    if (containerRef.value) {
      updateContainerHeight()
    }
  })
}

// 更新容器高度
function updateContainerHeight() {
  if (!containerRef.value) return
  containerHeight.value = containerRef.value.clientHeight
}

// 监听数据变化，重新计算可见范围
watch(() => props.data.length, () => {
  refresh()
}, { flush: 'post' })

// 组件挂载后初始化
onMounted(() => {
  updateContainerHeight()
  window.addEventListener('resize', updateContainerHeight)
})

// 组件销毁前清理
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateContainerHeight)
})
</script>

<template>
  <div 
    ref="containerRef"
    class="virtual-list-container"
    :style="{
      height: typeof props.height === 'number' ? `${props.height}px` : props.height,
      overflow: 'auto'
    }"
    @scroll="handleScroll"
  >
    <div
      class="virtual-list-phantom"
      :style="{
        height: `${listHeight}px`,
        position: 'relative'
      }"
    >
      <div
        v-for="{ item, index, style } in visibleItems"
        :key="index"
        :style="style"
      >
        <slot 
          :item="item" 
          :index="index" 
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.virtual-list {
  &-container {
    position: relative;
    border: 1px solid v-bind('token.colorBorderSecondary');
    border-radius: v-bind('token.borderRadiusLG');
  }
}
</style> 