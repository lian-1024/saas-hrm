import { App } from 'ant-design-vue'
import type { MessageInstance } from 'ant-design-vue/es/message/interface'
import type { ModalStaticFunctions } from 'ant-design-vue/es/modal/confirm'
import type { NotificationInstance } from 'ant-design-vue/es/notification/interface'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

export const createGlobalStore = defineStore('global', () => {
  const message = ref<MessageInstance>()
  const notification = ref<NotificationInstance>()
  const modal = ref<Omit<ModalStaticFunctions, 'warn'>>()
  ;(() => {
    const staticFunction = App.useApp()
    console.log('staticFunction', staticFunction.message)
    message.value = staticFunction.message
    modal.value = staticFunction.modal
    notification.value = staticFunction.notification
  })()

  return { message, notification, modal }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(createGlobalStore, import.meta.hot))
}

export const useGlobalStore = () => {
  return createGlobalStore()
}
