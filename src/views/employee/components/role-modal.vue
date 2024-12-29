<script setup lang="ts">
import { QModal } from '@/components/base/Modal';
import { Button, CheckboxGroup, Flex, type CheckboxGroupProps } from 'ant-design-vue';
import { ref, watchEffect } from 'vue';
defineOptions({
  name: 'RoleModal'
})

const props = defineProps<{
  employeeId: number | string | null
}>()



const modalStatus = defineModel("open", { default: false })

const selectedRole = ref<CheckboxGroupProps['value']>()
const selectedRoleOptions = ref<CheckboxGroupProps['options']>([
  {
    value: "system-management",
    label: "系统管理员"
  },
  {
    value: "manager",
    label: "人事经理"
  },
  {
    value: "commissioner",
    label: "人事专员"
  }
])



const handleConfirmModification = () => {
  console.log("confirm:", selectedRole.value);
  // post data 
  // loading ...
  modalStatus.value = false
}

const handleCancelModification = () => {
  console.log("cancel");
  modalStatus.value = false
}

watchEffect(() => {
  // 这里可以根据员工id 获取员工角色
  console.log("employeeId change:", props.employeeId);
})
</script>

<template>
  <QModal v-model:open="modalStatus" title="分配角色" @cancel="handleCancelModification">
    <div class="modal-content">
      <CheckboxGroup :value="selectedRole" :options="selectedRoleOptions" />
    </div>
    <template #footer>
      <Flex gap="small" justify="center">
        <Button type="primary" @click="handleConfirmModification">确定</Button>
        <Button @click="handleCancelModification">取消</Button>
      </Flex>
    </template>
  </QModal>
</template>

<style scoped lang="scss">
.modal-content {
  padding: var(--spacing-middle)
}
</style>