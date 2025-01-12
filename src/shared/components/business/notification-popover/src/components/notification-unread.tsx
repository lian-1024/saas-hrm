import useNotification from "@composables/use-notification"
import { Flex } from "ant-design-vue"
import { defineComponent } from "vue"
import { QNotificationEmpty } from "./notification-empty"
import { QNotificationMessage } from "./notification-message"

export const QNotificationUnread = defineComponent({
  name: 'QNotificationUnread',
  setup() {
    const { unread } = useNotification()

    return () => (
      <Flex vertical gap="middle">
        {unread.value.length ? unread.value.map(message => (
          <QNotificationMessage
            type="unread"
            key={message.id}
            message={message}
          />
        )) : <QNotificationEmpty />}
      </Flex>
    )
  }
}) 