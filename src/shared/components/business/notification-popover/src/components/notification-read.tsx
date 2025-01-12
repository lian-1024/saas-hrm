import useNotification from "@composables/use-notification"
import { Flex } from "ant-design-vue"
import { defineComponent } from "vue"
import { QNotificationEmpty } from "./notification-empty"
import { QNotificationMessage } from "./notification-message"

export const QNotificationRead = defineComponent({
  name: 'QNotificationRead',
  setup() {
    const { read } = useNotification()

    return () => (
      <Flex vertical gap="middle">
        {read.value.length ? read.value.map(message => (
          <QNotificationMessage
            type="read"
            key={message.id}
            message={message}
          />
        )) : <QNotificationEmpty />}
      </Flex>
    )
  }
}) 