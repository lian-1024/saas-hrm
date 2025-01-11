<script setup lang="ts">
import { useAntdToken } from '@/shared/composables/use-antd-token'
import { Modal, type ModalProps } from 'ant-design-vue'
import type { VNode } from 'vue'
defineOptions({
  name: 'QModal',
})

const props = defineProps<ModalProps>()
const slots = defineSlots<{
  default: () => VNode
  footer: () => VNode
}>()
const { token } = useAntdToken()
</script>

<template>
  <Modal v-bind="props">
    <template v-for="(value, key) in slots" #[key]="scope" :key="key">
      <slot :name="key" v-bind="scope || {}"></slot>
    </template>
  </Modal>
</template>
