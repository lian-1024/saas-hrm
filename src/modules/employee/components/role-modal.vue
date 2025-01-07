<script setup lang="ts">
import EmployeeService from '@/modules/employee/services/employee.service';
import RoleService from '@/modules/role/services/role.service';
import { QModal } from '@/shared/components/base/modal';
import { QSpin } from '@/shared/components/base/spin';
import { useRequest } from '@/shared/composables/use-request/use-request';
import { Button, CheckboxGroup, Flex, message, type CheckboxGroupProps } from 'ant-design-vue';
import { computed, ref, watchEffect } from 'vue';
defineOptions({
  name: 'RoleModal'
})

const props = defineProps<{
  employeeId: number | string | null
}>()



const modalStatus = defineModel("open", { default: false })

const selectedRole = ref<CheckboxGroupProps['value']>([])


const roleOptions = ref<CheckboxGroupProps['options']>([])




// 获取角色列表
const { loading: getRoleListEnableLoading } = useRequest(RoleService.getRoleListEnable, {
  onSuccess: ({ data }) => {
    roleOptions.value = data.map(item => ({
      value: item.id,
      label: item.name
    }))
  }
})

// 获取员工详情
const { run: getEmployeeDetail, loading: getEmployeeDetailLoading } = useRequest(EmployeeService.getEmployeeDetailById, {
  manual: true,
  onSuccess: ({ data }) => {
    selectedRole.value = data.roleIds
  }
})

const { run: giveEmployeeRole, loading: giveEmployeeRoleLoading } = useRequest(EmployeeService.giveEmployeeRole, {
  manual: true,
  onSuccess: () => {
    message.success("分配角色成功")
  },
  onError: (error) => {
    if (error.message) {
      message.error(error.message)
    } else {
      message.error("分配角色失败")
    }
  }
})




const closeModal = () => {
  modalStatus.value = false
}

const handleConfirm = () => {
  giveEmployeeRole({
    id: props.employeeId,
    roleIds: selectedRole.value
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
  <QModal :confirm-loading="giveEmployeeRoleLoading" :width="800" mask v-model:open="modalStatus" title="分配角色"
    @cancel="handleCancel">
    <QSpin :spinning="loading">
      <div class="modal-content">
        <CheckboxGroup v-model:value="selectedRole" :options="roleOptions" />
      </div>
    </QSpin>
    <template #footer>
      <Flex gap="small" justify="center">
        <Button type="primary" @click="handleConfirm">确定</Button>
        <Button @click="handleCancel">取消</Button>
      </Flex>
    </template>
  </QModal>
</template>

<style scoped lang="scss">
.modal-content {
  padding: var(--spacing-middle)
}
</style>