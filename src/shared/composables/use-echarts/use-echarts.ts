import echarts from "@/core/plugins/echarts";
import { tryOnUnmounted, useDark, useDebounceFn, useResizeObserver, useTimeoutFn, useWindowSize } from "@vueuse/core";
import type { EChartsOption } from 'echarts';
import { computed, nextTick, unref, watch, type Ref } from "vue";
import type { EChartUIType, SizeHandlerOptions, UseEChartsOptions } from "./types";

export const useECharts = (chartRef: Ref<EChartUIType>, options: UseEChartsOptions = {}) => {

  const { theme = null, initOptions = {}, updateOptions = {} } = options

  // 状态管理
  let chartInstance: echarts.ECharts | null = null
  let cahceOptions: EChartsOption = {}
  let resizeObserver: ReturnType<typeof useResizeObserver> | null = null

  const isDark = useDark()
  const { width, height } = useWindowSize()


  // 防抖函数处理 resize 函数
  const resizeHandler = useDebounceFn(() => resize(), 200)

  // 计算暗黑模式下的配置
  const getOptions = computed<EChartsOption>(() => {
    if (!isDark.value) return {}
    return {
      backgroundColor: 'transparent'
    }
  })

  /**
   * 初始化图表
   * @returns
   */
  const initCharts = () => {
    const el = unref(chartRef)?.$el
    if (!el) return null

    // 如果图表实例存在，则销毁
    if (chartInstance) {
      chartInstance.dispose()
      chartInstance = null
    }


    // 创建新实例
    chartInstance = echarts.init(el, theme || (isDark.value ? 'dark' : null), {
      ...initOptions,
    });

    // 绑定resize 观察器
    if (!resizeObserver) {
      resizeObserver = useResizeObserver(el, resizeHandler)
    }
    return chartInstance
  }


  /**
   * 渲染图表
   * @param renderOptions 接收 ECharts 配置项
   * @param options 接收可选的更新选项
   */
  const renderECharts = async (renderOptions: EChartsOption, options: UseEChartsOptions['updateOptions'] = {}) => {
    try {
      // 缓存传入的配置项
      cahceOptions = renderOptions

      const currentOptions = {
        ...renderOptions,
        ...getOptions.value // 合并暗黑模式下的配置
      }

      // 处理容器高度为0的情况
      if (unref(chartRef)?.offsetHeight === 0) {
        await new Promise((resolve) => {
          useTimeoutFn(() => {
            // 如果容器高度为0，延迟30ms后重新渲染
            renderECharts(currentOptions, options)
            resolve(null)
          }, 30)
        })
        return
      }

      await nextTick() // 等待下一个tick

      // 确保实例存在
      if (!chartInstance) {
        // 如果实例不存在，初始化图表
        const instance = initCharts()

        if (!instance) return // 如果初始化失败,直接返回
      }

      // 设置选项
      chartInstance?.setOption(currentOptions, {
        ...updateOptions,
        ...options // 合并传入的更新选项
      })


    } catch (error) {
      console.error('渲染图表失败:', error);
    }
  }


  /**
   * 调整图表大小
   * @param options
   * @returns
   */
  const resize = (options?: SizeHandlerOptions) => {
    if (!chartInstance) return // 如果实例不存在 直接返回

    try {
      chartInstance.resize({
        width: options?.width,
        height: options?.height,
        animation: options?.animation ?? {
          duration: 300, // 默认动画持续时间为300ms
          easing: 'quadraticIn'  // 默认缓动函数为 quadraticIn
        }
      })
    } catch (error) {
      console.error('调整图表大小失败:', error);
    }
  }

  /**
   * 获取图表实例
   * @returns
   */
  const getInstance = () => {
    if (!chartInstance) {
      initCharts()
    }
    return chartInstance
  }

  // 监听窗口尺寸变化 当窗口尺寸发生变化时
  watch([width, height], () => resizeHandler())

  // 监听主题变化 当主题发生变化时    调整图表大小
  watch(isDark, () => {
    if (chartInstance) {
      chartInstance.dispose() // 销毁旧实例
      initCharts() //重新初始化图表
      renderECharts(cahceOptions) // 重新渲染图表
      resize() //调用防抖处理的 resize 函数
    }
  })

  // 组件卸载时清理资源
  tryOnUnmounted(() => {
    if (chartInstance) {
      chartInstance.dispose() // 销毁实例
      chartInstance = null // 将实例置为 null
    }
    if (resizeObserver) {
      resizeObserver = null // 将 resize 观察器置为 null
    }
  })

  return {
    renderECharts,
    resize,
    getInstance,
    echarts
  }
}

export type { EChartUIType };

