import useNotification from '@/shared/composables/use-notification'
import { BellOutlined } from '@ant-design/icons-vue'
import { Badge, Button, Popover } from "ant-design-vue"
import { computed, defineComponent, type CSSProperties } from "vue"
import { QNotificationPopoverContent } from './components/notification-content'

const QNotificationPopover = defineComponent({
  name: 'QNotificationPopover',
  setup() {
    const popoverStyles = computed<CSSProperties>(() => ({
      maxHeight: '420px',
      overflowY: 'auto'
    }))

    const { isHaveUnread } = useNotification()

    return () => (
      <Popover trigger="click" placement="bottomRight" style={popoverStyles}>
        {{
          content: () => <QNotificationPopoverContent />,
          default: () => (
            <Badge dot={isHaveUnread.value}>
              <Button shape="circle" icon={<BellOutlined />} />
            </Badge>
          )
        }}
      </Popover>
    )
  }
})

export default QNotificationPopover
