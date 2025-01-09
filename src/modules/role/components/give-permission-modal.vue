<script setup lang="ts">
import PermissionService from '@/modules/permission/services/permission.service';
import RoleService from '@/modules/role/services/role.service';
import { QModal } from '@/shared/components/base/modal';
import { QSkeleton } from '@/shared/components/base/skeleton';
import { useAntdToken } from '@/shared/composables/use-antd-token';
import { useRequest } from '@/shared/composables/use-request/use-request';
import { PermissionTree } from '@/shared/utils/convert/permission';
import { message, Tree } from 'ant-design-vue';
import { ref, watch } from 'vue';
const { token } = useAntdToken()
defineOptions({
  name: 'GivePermissionModal'
})


const props = defineProps<{
  roleId?: number
}>()


const modalStatus = defineModel<boolean>("open", { default: false, required: true })
const permissionsTreeData = ref()
const checkedPermissionKeys = ref<number[]>([])


const { loading: getPermissionListLoading } = useRequest(PermissionService.getPermissionList, {
  onSuccess: ({ data }) => {
    permissionsTreeData.value = PermissionTree.convertPermissionToTree(data)
  }
})


const { run: getRoleDetail } = useRequest(RoleService.getRoleDetail, {
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
  <QModal title="分配权限" :open="modalStatus" :confirm-loading="givePermissionLoading" @ok="handleConfirm"
    @cancel="handleCancel" :width="400">
    <div class="permission-modal-wrapper">
      <QSkeleton :loading="getPermissionListLoading" :title="false" :paragraph="{
        rows: 8
      }">
        <Tree v-model:checkedKeys="checkedPermissionKeys" checkable :tree-data="permissionsTreeData" />
      </QSkeleton>
    </div>
  </QModal>
</template>

<style scoped lang="less">
.permission-modal-wrapper {
  margin-block: v-bind("`${token.marginLG}px`");
  padding: v-bind("`${token.paddingLG}px`");
  border-radius: v-bind("`${token.borderRadiusLG}px`");
  background-color: v-bind("token.colorBgContainer");
}
</style>