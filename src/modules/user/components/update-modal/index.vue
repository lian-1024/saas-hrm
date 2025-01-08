<script setup lang="ts">
import { Modal } from 'ant-design-vue'
import { computed, ref } from 'vue'
import { OpenModalType, type ModalType } from '../../constants'
import AvatarForm from './avatar.vue'

import PasswordForm from './password.vue'

const type = defineModel<ModalType>("type", { default: OpenModalType.PASSWORD })
const open = defineModel<boolean>("open")

const componentsRef = ref()

const title = computed(() => {
  switch (type.value) {
    case OpenModalType.PASSWORD:
      return '修改密码'
    case OpenModalType.AVATAR:
      return '修改头像'
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
  <Modal :width="800" :title="title" :open="open" :confirm-loading="componentsRef?.loading" @ok="handleOk"
    @cancel="handleCancel">
    <component :is="componentMap[type]" ref="componentsRef" @success="handleClose" />

  </Modal>
</template>
