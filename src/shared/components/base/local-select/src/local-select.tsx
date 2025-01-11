import type { LocaleType } from '@/core/plugins/i18n'
import { useLocaleStore } from '@/core/stores/modules/locale'
import { useLocale } from '@/shared/composables/use-locale'
import { GlobalOutlined } from '@ant-design/icons-vue'
import { Button, Dropdown, Menu, type MenuProps } from 'ant-design-vue'
import { computed, type CSSProperties, defineComponent } from 'vue'
const QLocalSelect = defineComponent({
  name: 'QLocalSelect',
  setup() {
    const { localeOptions } = useLocaleStore()
    const { changeLocale, currentLocale } = useLocale()

    const styles = computed<CSSProperties>(() => ({
      width: '100px',
    }))

    const handleChangeLocale = (value: LocaleType) => {
      changeLocale(value)
    }

    const selectOptions = computed<MenuProps['items']>(() => {
      const result = localeOptions.map((item) => ({
        label: item.label,
        key: item.value,
      }))

      return result
    })

    // return () =>{
    //   return <Select value={currentLocale} options={localeOptions} style={styles.value} onChange={(value) => handleChangeLocale(value as LocaleType)} />
    // }

    return () => {
      return (
        <Dropdown
          trigger={['click', 'hover']}
          overlay={
            <Menu
              items={selectOptions.value}
              onClick={(info) => handleChangeLocale(info.key as LocaleType)}
            />
          }
        >
          <Button icon={<GlobalOutlined />} shape="circle" />
        </Dropdown>
      )
    }
  },
})

export default QLocalSelect
