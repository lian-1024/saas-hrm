import { useTheme } from '@/shared/composables/use-theme'
import { Switch } from 'ant-design-vue'
import { defineComponent } from 'vue'

const QThemeSwitch = defineComponent({
  name: 'QThemeSwitch',
  setup() {
    const { isDark, toggleTheme } = useTheme()
    return () => {
      return (
        <Switch
          checked={isDark.value}
          onChange={() => toggleTheme()}
          checked-children="🌙"
          un-checked-children="☀️"
        />
      )
    }
  },
})

export default QThemeSwitch
