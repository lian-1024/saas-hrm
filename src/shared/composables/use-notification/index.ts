import UserService from '@/modules/user/services/user.service'
import { useRequest } from '@/shared/composables/use-request'
import type { UserNotificationVO } from '@modules/user/types'
import { message } from 'ant-design-vue'
import { computed, ref } from 'vue'
const unread = ref<UserNotificationVO['unread']>([])
const read = ref<UserNotificationVO['read']>([])


const useNotification = () => {
  const isHaveUnread = computed(() => unread.value.length > 0)

  // 获取通知数据
  const {
    run: getUserNotification
  } = useRequest(UserService.getUserNotification, {
    manual: true,
    onSuccess: ({ data }) => {
      unread.value = data.unread || []
      read.value = data.read || []
    }
  })




  // 标记已读
  const { run: markUserNotificationAsRead } = useRequest(UserService.markUserNotificationAsRead, {
    manual: true,
    onSuccess: () => {
      message.success('标记已读成功')
      // 标记已读后重新获取数据
      getUserNotification()
    },
    onError: (error) => {
      message.error(error.message || '标记已读失败')
    }
  })

  // 删除消息
  const { run: deleteUserNotification, loading: deleteUserNotificationLoading } = useRequest(UserService.deleteUserNotification, {
    manual: true,
    onSuccess: () => {
      message.success('删除消息成功')
      // 删除后重新获取数据
      getUserNotification()
    },
    onError: (error) => {
      message.error(error.message || '删除消息失败')
    }
  })

  const markAsRedById = async (id: number) => {
    await markUserNotificationAsRead(id).then(() => {
      const message = unread.value.find(item => item.id === id)
      if (message) {
        unread.value = unread.value.filter(item => item.id !== id)
        read.value = [...read.value, message]
      }
    })

  }


  const deleteById = async (id: number) => {
    await deleteUserNotification(id).then(() =>
      unread.value = unread.value.filter(item => item.id !== id)
    )
  }

  return {
    unread,
    read,
    getUserNotification,
    isHaveUnread,
    markAsRedById,
    deleteById
  }
}


export default useNotification