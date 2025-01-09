<script setup lang="ts">
import { useUserStore } from '@/core/stores'
import { Modal } from 'ant-design-vue'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { OpenModalType, type ModalType } from '../../constants'
import AvatarForm from './avatar.vue'
import PasswordForm from './password.vue'

const { t } = useI18n()

const type = defineModel<ModalType>("type", { default: OpenModalType.PASSWORD })
const open = defineModel<boolean>("open")
const userStore = useUserStore()
const componentsRef = ref()

const title = computed(() => {
  switch (type.value) {
    case OpenModalType.PASSWORD:
      return t('user.updateModal.title.password')
    case OpenModalType.AVATAR:
      return t('user.updateModal.title.avatar')
    default:
      return ''
  }
})

const handleClose = () => {
  open.value = false
}

const handleOk = async () => {
  if (!componentsRef.value) return

  try {
    // 调用子组件的 handleSubmit 方法
    await componentsRef.value.handleSubmit?.()
    setTimeout(() => {
      userStore.getUserInfo()
    }, 1000)
  } catch (error) {
    console.error('提交失败:', error)
  }
}

const handleCancel = () => {
  handleClose()
}

const componentMap = {
  [OpenModalType.PASSWORD]: PasswordForm,
  [OpenModalType.AVATAR]: AvatarForm
}


</script>

<template>
  <Modal :width="800" :title="title" :open="open" :ok-text="title" :confirm-loading="componentsRef?.loading"
    @ok="handleOk" @cancel="handleCancel">
    <component :is="componentMap[type]" ref="componentsRef" @success="handleClose" />

  </Modal>
</template>
