import useNotification from "@composables/use-notification"
import { TabPane, Tabs } from "ant-design-vue"
import { computed, defineComponent, ref, type CSSProperties } from "vue"
import { useI18n } from "vue-i18n"
import { QNotificationRead } from "./notification-read"
import { QNotificationUnread } from "./notification-unread"

interface TabOption {
  label: string
  key: string
  component: any
}

export const QNotificationPopoverContent = defineComponent({
  name: 'QNotificationPopoverContent',
  setup() {
    const activeKey = ref('unread')
    const { unread, read } = useNotification()
    const { t } = useI18n()

    const tabOptions = computed<TabOption[]>(() => {
      return [
        {
          label: `${t('common.notification.unread')}${unread.value.length ? `(${unread.value.length})` : ''}`,
          key: 'unread',
          component: QNotificationUnread,
        },
        {
          label: `${t('common.notification.read')}${read.value.length ? `(${read.value.length})` : ''}`,
          key: 'read',
          component: QNotificationRead,
        }
      ]
    })

    const styles: CSSProperties = {
      width: '420px'
    }

    return () => (
      <div style={styles}>
        <Tabs v-model:activeKey={activeKey.value}>
          {tabOptions.value.map(tab => (
            <TabPane key={tab.key} tab={tab.label}>
              <tab.component />
            </TabPane>
          ))}
        </Tabs>
      </div>
    )
  }
}) 