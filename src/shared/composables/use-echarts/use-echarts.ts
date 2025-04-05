/**
 * 导入所需的依赖
 */
import echarts from '@/core/plugins/echarts'
import {
  tryOnUnmounted,
  useDark,
  useDebounceFn,
  useResizeObserver,
  useTimeoutFn,
  useWindowSize,
} from '@vueuse/core'
import type { EChartsOption } from 'echarts'
import { computed, nextTick, unref, watch, type Ref } from 'vue'
import type { EChartUIType, SizeHandlerOptions, UseEChartsOptions } from './types'

/**
 * ECharts 组合式函数
 * @param chartRef - 图表容器的引用
 * @param options - 配置选项
 * @returns 返回图表相关的方法和实例
 */
export const useECharts = (chartRef: Ref<EChartUIType>, options: UseEChartsOptions = {}) => {
  // 解构配置选项,设置默认值
  const { theme = null, initOptions = {}, updateOptions = {} } = options

  // 状态管理变量
  let chartInstance: echarts.ECharts | null = null // 图表实例
  let cacheOptions: EChartsOption = {} // 缓存的配置项
  let resizeObserver: ReturnType<typeof useResizeObserver> | null = null // resize观察器

  // 获取暗黑模式状态
  const isDark = useDark()
  // 获取窗口尺寸
  const { width, height } = useWindowSize()

  // 使用防抖函数处理resize,避免频繁调用
  const resizeHandler = useDebounceFn(() => resize(), 200)

  /**
   * 计算暗黑模式下的配置
   * 当处于暗黑模式时,设置透明背景
   */
  const getOptions = computed<EChartsOption>(() => {
    if (!isDark.value) return {}
    return {
      backgroundColor: 'transparent',
    }
  })

  /**
   * 初始化图表
   * 创建ECharts实例并绑定到DOM元素
   * @returns 返回图表实例或null
   */
  const initCharts = () => {
    const el = unref(chartRef)?.$el
    if (!el) return null

    // 如果已存在实例则销毁
    if (chartInstance) {
      chartInstance.dispose()
      chartInstance = null
    }

    // 创建新的ECharts实例
    chartInstance = echarts.init(el, theme || (isDark.value ? 'dark' : null), {
      ...initOptions,
    })

    // 绑定resize观察器
    if (!resizeObserver) {
      resizeObserver = useResizeObserver(el, resizeHandler)
    }
    return chartInstance
  }

  /**
   * 渲染图表
   * @param renderOptions - ECharts的配置项
   * @param options - 可选的更新选项
   */
  const renderECharts = async (
    renderOptions: EChartsOption,
    options: UseEChartsOptions['updateOptions'] = {},
  ) => {
    try {
      // 缓存配置项
      cacheOptions = renderOptions

      // 合并配置项
      const currentOptions = {
        ...renderOptions,
        ...getOptions.value, // 合并暗黑模式配置
      }

      // 处理容器高度为0的情况
      if (unref(chartRef)?.offsetHeight === 0) {
        await new Promise((resolve) => {
          useTimeoutFn(() => {
            renderECharts(currentOptions, options)
            resolve(null)
          }, 30)
        })
        return
      }

      await nextTick()

      // 确保实例存在
      if (!chartInstance) {
        const instance = initCharts()
        if (!instance) return
      }

      // 设置图表配置
      chartInstance?.setOption(currentOptions, {
        ...updateOptions,
        ...options,
      })
    } catch (error) {
      console.error('渲染图表失败:', error)
    }
  }

  /**
   * 调整图表大小
   * @param options - 尺寸调整的配置选项
   */
  const resize = (options?: SizeHandlerOptions) => {
    if (!chartInstance) return

    try {
      chartInstance.resize({
        width: options?.width,
        height: options?.height,
        animation: options?.animation ?? {
          duration: 300,
          easing: 'quadraticIn',
        },
      })
    } catch (error) {
      console.error('调整图表大小失败:', error)
    }
  }

  /**
   * 获取图表实例
   * 如果实例不存在则初始化
   * @returns 返回图表实例
   */
  const getInstance = () => {
    if (!chartInstance) {
      initCharts()
    }
    return chartInstance
  }

  // 监听窗口尺寸变化
  watch([width, height], () => resizeHandler())

  // 监听主题变化
  watch(isDark, () => {
    if (chartInstance) {
      chartInstance.dispose()
      initCharts()
      renderECharts(cacheOptions)
      resize()
    }
  })

  // 组件卸载时清理资源
  tryOnUnmounted(() => {
    if (chartInstance) {
      chartInstance.dispose()
      chartInstance = null
    }
    if (resizeObserver) {
      resizeObserver = null
    }
  })

  return {
    renderECharts,
    resize,
    getInstance,
    echarts,
  }
}

export type { EChartUIType }
