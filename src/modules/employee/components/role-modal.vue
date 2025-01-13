<script setup lang="ts">
import EmployeeService from '@/modules/employee/services/employee.service'
import RoleService from '@/modules/role/services/role.service'
import { QModal } from '@/shared/components/base/modal'
import { QSpin } from '@/shared/components/base/spin'
import { useRequest } from '@/shared/composables/use-request/use-request'
import { Button, CheckboxGroup, Flex, message, type CheckboxGroupProps } from 'ant-design-vue'
import { computed, ref, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineOptions({
  name: 'RoleModal',
})

const props = defineProps<{
  employeeId: number | string | null
}>()

const modalStatus = defineModel('open', { default: false })

const selectedRole = ref<CheckboxGroupProps['value']>([])

const roleOptions = ref<CheckboxGroupProps['options']>([])

// 获取角色列表
const { loading: getRoleListEnableLoading } = useRequest(RoleService.getRoleListEnable, {
  onSuccess: ({ data }) => {
    roleOptions.value = data.map((item) => ({
      value: item.id,
      label: item.name,
    }))
  },
})

// 获取员工详情
const { run: getEmployeeDetail, loading: getEmployeeDetailLoading } = useRequest(
  EmployeeService.getEmployeeDetailById,
  {
    manual: true,
    onSuccess: ({ data }) => {
      selectedRole.value = data.roleIds
    },
  },
)

const { run: giveEmployeeRole, loading: giveEmployeeRoleLoading } = useRequest(
  EmployeeService.giveEmployeeRole,
  {
    manual: true,
    onSuccess: () => {
      message.success(t('employee.roleModal.success'))
    },
    onError: (error) => {
      if (error.message) {
        message.error(error.message)
      } else {
        message.error(t('employee.roleModal.error'))
      }
    },
  },
)

const closeModal = () => {
  modalStatus.value = false
}

const handleConfirm = async () => {
  await giveEmployeeRole({
    id: props.employeeId,
    roleIds: selectedRole.value,
  })
  closeModal()
}

const handleCancel = () => {
  closeModal()
}

// 监听员工id变化
watchEffect(() => {
  if (props.employeeId) {
    getEmployeeDetail(props.employeeId)
  }
})

const loading = computed(() => getRoleListEnableLoading.value || getEmployeeDetailLoading.value)
</script>

<template>
  <QModal :confirm-loading="giveEmployeeRoleLoading" :width="800" mask v-model:open="modalStatus"
    :title="t('employee.roleModal.title')" @cancel="handleCancel">
    <QSpin :spinning="loading">
      <div class="modal-content">
        <CheckboxGroup v-model:value="selectedRole" :options="roleOptions" />
      </div>
    </QSpin>
    <template #footer>
      <Flex gap="small" justify="center">
        <Button type="primary" @click="handleConfirm">{{ t('employee.roleModal.confirm') }}</Button>
        <Button @click="handleCancel">{{ t('employee.roleModal.cancel') }}</Button>
      </Flex>
    </template>
  </QModal>
</template>

<style scoped lang="less">
.modal-content {
  padding: var(--spacing-middle);
}
</style>
