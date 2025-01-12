import { Empty } from "ant-design-vue"
import { defineComponent } from "vue"
import { useI18n } from "vue-i18n"

export const QNotificationEmpty = defineComponent({
  name: 'QNotificationEmpty',
  setup() {
    const { t } = useI18n()

    return () => (
      <Empty description={t('common.notification.empty')} />
    )
  }
}) 