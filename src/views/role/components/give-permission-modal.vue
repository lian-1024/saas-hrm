<script setup lang="ts">
import { useRequest } from '@/composables/use-request';
import PermissionService from '@/services/permission.service';
import RoleService from '@/services/role.service';
import { convertPermissionToTree } from '@/utils/tree';
import { message, Modal, Tree } from 'ant-design-vue';
import { ref, watch } from 'vue';
defineOptions({
  name: 'GivePermissionModal'
})


const props = defineProps<{
  roleId: number
}>()


const modalStatus = defineModel<boolean>("open", { default: false, required: true })
const permissionsTreeData = ref()
const checkedPermissionKeys = ref<number[]>([])


const { loading } = useRequest(PermissionService.getPermissionList, {
  onSuccess: ({ data }) => {
    permissionsTreeData.value = convertPermissionToTree(data)
  },
  onError: (error) => {
    if (error.message) {
      message.error(error.message)
    } else {
      message.error("获取权限列表失败")
    }
  }
})


const { data, run: getRoleDetail } = useRequest(RoleService.getRoleDetail, {
  manual: true,
  onSuccess: ({ data }) => {
    checkedPermissionKeys.value = data.permIds
  }
})

const { loading: givePermissionLoading, run: givePermission } = useRequest(RoleService.givePermission, {
  manual: true,
  onSuccess: () => {
    message.success("分配权限成功")
  },
  onFinally: () => {
    modalStatus.value = false
  }
})


const handleConfirm = () => {
  givePermission({ id: props.roleId, permIds: checkedPermissionKeys.value })
}

const closeModal = () => modalStatus.value = false

const handleCancel = () => closeModal()





watch(() => props.roleId, (newVal) => {
  if (newVal) {
    getRoleDetail(newVal)
  }
}, { immediate: true })
</script>

<template>
  <div>
    <Modal title="分配权限" :open="modalStatus" :confirm-loading="givePermissionLoading" @ok="handleConfirm"
      @cancel="handleCancel" :width="400">
      <div class="permission-modal-wrapper">
        <Tree v-model:checkedKeys="checkedPermissionKeys" checkable :tree-data="permissionsTreeData" />
      </div>
    </Modal>
  </div>
</template>

<style scoped lang="scss">
.permission-modal-wrapper {
  padding: var(--spacing-large);
}
</style>