import { Skeleton } from 'ant-design-vue'
import { skeletonProps } from 'ant-design-vue/es/skeleton'
import { defineComponent } from 'vue'

const QSkeleton = defineComponent({
  name: 'QSkeleton',
  props: skeletonProps(),
  setup(props, { slots }) {
    const defaultProps = {
      active: true,
    }
    return () => {
      const mergeProps = {
        ...defaultProps,
        ...props,
      }
      return <Skeleton {...mergeProps}>{slots.default?.()}</Skeleton>
    }
  },
})

export default QSkeleton
