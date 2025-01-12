import { useAntdToken } from '@/shared/composables/use-antd-token'
import useNotification from "@composables/use-notification"
import type { NotificationMessage } from "@modules/user/types"
import { MESSAGE_LEVEL_COLOR, MESSAGE_LEVEL_TEXT } from "@shared/constants/message"
import { Button, Flex, Tag, Typography } from "ant-design-vue"
import { computed, defineComponent, ref, type CSSProperties, type PropType } from "vue"
import { useI18n } from "vue-i18n"
import { QSpin } from '../../../spin'

export const QNotificationMessage = defineComponent({
  name: 'QNotificationMessage',
  props: {
    type: {
      type: String as PropType<'unread' | 'read'>,
      required: true
    },
    message: {
      type: Object as PropType<NotificationMessage>,
      required: true
    },
  },
  setup(props) {
    const { markAsRedById, deleteById } = useNotification()
    const { token } = useAntdToken()
    const { t } = useI18n()

    const loading = ref(false)

    const wrapperStyles = computed<CSSProperties>(() => ({
      padding: `${token.value.padding}px`
    }))

    const handleMap = {
      markAsRedById: (id: number) => markAsRedById(id),
      deleteById: (id: number) => deleteById(id),
    }

    const handleOperations = async (id: number, type: keyof typeof handleMap) => {
      loading.value = true
      await handleMap[type](id)
      loading.value = false
    }

    const messageLevelText = computed(() => t(MESSAGE_LEVEL_TEXT[props.message.type]))

    return () => (
      <QSpin spinning={loading.value}>
        <Flex vertical gap="small" style={wrapperStyles}>
          <Flex justify="space-between" align="center">
            <Typography.Text>
              {props.message.sendUser.username}
            </Typography.Text>
            <Tag color={MESSAGE_LEVEL_COLOR[props.message.type]}>
              {messageLevelText.value}
            </Tag>
          </Flex>
          <Typography.Text>{props.message.content}</Typography.Text>
          <Flex justify="space-between" align="center">
            <Typography.Text>
              {props.message.create_time}
            </Typography.Text>
            <Flex gap="small">
              {props.type === 'unread' && (
                <Button
                  type="link"
                  size="small"
                  onClick={() => handleOperations(props.message.id, 'markAsRedById')}
                >
                  {t('common.notification.markAsRead')}
                </Button>
              )}
              <Button
                type="link"
                size="small"
                danger
                onClick={() => handleOperations(props.message.id, 'deleteById')}
              >
                {t('common.notification.delete')}
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </QSpin>
    )
  }
}) 