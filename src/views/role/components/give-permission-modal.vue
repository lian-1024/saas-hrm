<script setup lang="ts">
import { Checkbox, CheckboxGroup, Flex, Modal, type CheckboxGroupProps } from 'ant-design-vue';
import { ref } from 'vue';
defineOptions({
  name: 'GivePermissionModal'
})



const emits = defineEmits<{
  (e: "confirm"): void;
  (e: "cancel"): void;
}>()

const visible = defineModel<boolean>("visible", { default: false, required: true })


const handleConfirm = () => {
  // 校验表单验证通过则关闭
  // emits('confirm', {})
  console.log("confirm");

}

const handleCancel = () => {
  emits('cancel')
}


const permissionsOptions = ref<CheckboxGroupProps['options']>([
  {
    label: '组织架构',
    value: 'organization'
  },
  {
    label: "角色管理",
    value: "role"
  },
  {
    label: "员工管理",
    value: "employee"
  },
  {
    label: "权限管理",
    value: "permission",
  },

])

const optionsValue = ref<string[]>([])
</script>

<template>
  <div>
    <Modal title="分配权限" :open="visible" @ok="handleConfirm" @cnacle="handleCancel" :width="400">
      <div class="permission-modal-wrapper">
        <CheckboxGroup v-model:value="optionsValue" style="width: 100%">
          <Flex vertical gap="middle" align="center">
            <Checkbox v-for="permission in permissionsOptions" :key="permission.value" :value="permission">
              {{ permission.label }}</Checkbox>
          </Flex>
        </CheckboxGroup>
      </div>
    </Modal>
  </div>
</template>

<style scoped lang="scss">
.permission-modal-wrapper {
  padding: var(--spacing-large);
}
</style>