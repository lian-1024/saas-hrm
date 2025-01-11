import { Spin } from 'ant-design-vue'
import { spinProps } from 'ant-design-vue/es/spin'
import { defineComponent } from 'vue'
const QSpin = defineComponent({
  name: 'QSpin',
  props: spinProps(),
  setup(props, { slots, attrs }) {
    const defaultProps = {
      delay: 300,
    }

    return () => {
      const mergedProps = {
        ...defaultProps,
        ...props,
      }
      return <Spin {...mergedProps}>{slots.default?.()}</Spin>
    }
  },
})

export default QSpin
