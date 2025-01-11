import { useDark, useToggle } from '@vueuse/core'
import { theme } from 'ant-design-vue'
import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context'
import { computed } from 'vue'
const { darkAlgorithm, defaultAlgorithm } = theme

const useTheme = () => {
  const isDark = useDark()
  const themeStatus = computed(() => (isDark.value ? 'dark' : 'light'))
  // 主题配置
  const themeConfig = computed<ThemeConfig>(() => ({
    inherit: false,
    algorithm: isDark.value ? darkAlgorithm : defaultAlgorithm,
    // token:{} // 这里可以自定义token
    // 这里可以自定义组件级别主题配置
    components: {},
  }))

  const toggleTheme = useToggle(isDark)

  return {
    themeConfig,
    toggleTheme,
    isDark,
    themeStatus,
  }
}

export default useTheme
