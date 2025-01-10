<script setup lang="ts">
import PermissionService from '@/modules/permission/services/permission.service';
import { QSpin } from '@/shared/components/base/spin';
import { useAntdToken } from '@/shared/composables/use-antd-token';
import { useRequest } from '@/shared/composables/use-request/use-request';
import { PermissionTree } from '@/shared/utils/convert/permission';
import type { PermissionTableTreeNode } from '@/shared/utils/convert/types';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { Button, Flex, message, Modal, Table, type TableProps } from 'ant-design-vue';
import { defineAsyncComponent, h, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const PermissionModal = defineAsyncComponent(() => import('../components/permission-modal.vue'))
// 权限管理
defineOptions({
  name: "PermissionPage"
})

const { t } = useI18n()

const columns: TableProps['columns'] = [
  {
    title: t('permission.table.columns.name'),
    dataIndex: "name",
    key: 'name'
  },
  {
    title: t('permission.table.columns.key'),
    dataIndex: "key",
    key: 'key'
  },
  {
    title: t('permission.table.columns.description'),
    dataIndex: "description",
    key: 'description'
  },
  {
    title: t('permission.table.columns.operations'),
    dataIndex: "operations",
    key: 'operations',
    fixed: 'right',
    width: 200
  }
]

const permissionTree = ref<PermissionTableTreeNode[]>([])
const permissionModalStatus = ref<boolean>(false)
const isEdit = ref<boolean>(false)
const currentSelectedPermissionId = ref()


const { run: getPermissionList, loading: getPermissionListLoading } = useRequest(PermissionService.getPermissionList, {
  manual: true,
  onSuccess: ({ data }) => {
    permissionTree.value = PermissionTree.convertPermissionToTableTree(data)
  }
})

const { run: deletePermissionById, loading: deletePermissionByIdLoading } = useRequest(PermissionService.deletePermissionById, {
  manual: true,
  onSuccess: () => {
    message.success(t('permission.messages.deleteSuccess'))
    getPermissionList()
  },
  onError: (error) => {
    message.error(error.message || t('permission.messages.deleteError'))
  }
})


const openModal = (status: boolean) => {
  isEdit.value = status
  permissionModalStatus.value = true

}

const handleAddPermission = (permissionId: number) => {
  currentSelectedPermissionId.value = permissionId
  openModal(false)
}

const handleEditPermission = (permissionId: number) => {
  currentSelectedPermissionId.value = permissionId
  openModal(true)
}


const handleShowConfirmDelete = (permissionId: number) => {
  Modal.confirm({
    content: t('permission.messages.deleteConfirm'),
    icon: h(ExclamationCircleOutlined),
    onOk: async () => {
      try {
        await deletePermissionById(permissionId)
      } finally {
        return null
      }
    },
  })
}

onMounted(async () => {
  await getPermissionList()
})

const { token } = useAntdToken()
</script>

<template>
  <Flex class="permission-wrapper h-full" vertical gap="middle">
    <div>
      <Button type="primary" @click="handleAddPermission(0)">{{ t('permission.actions.addPermission') }}</Button>
    </div>
    <QSpin :spinning="getPermissionListLoading">
      <Table :pagination="false" class="permission-table" :data-source="permissionTree" :columns="columns"
        :default-expand-all="true" :indent-size="15" bordered>
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'operations'">
            <Flex>
              <Button size="small" @click="handleAddPermission(record.id)" type="link">{{
                t('permission.table.actions.add') }}</Button>
              <Button size="small" @click="handleEditPermission(record.id)" type="link">{{
                t('permission.table.actions.edit') }}</Button>
              <Button size="small" @click="handleShowConfirmDelete(record.id)" type="link">{{
                t('permission.table.actions.delete') }}</Button>
            </Flex>
          </template>
        </template>
      </Table>
    </QSpin>

    <PermissionModal :permission-id="currentSelectedPermissionId" :is-edit="isEdit" v-model:open="permissionModalStatus"
      :permission-tree="permissionTree" @success="getPermissionList" />
  </Flex>
</template>

<style scoped lang="less">
.permission {
  &-wrapper {
    padding: v-bind("`${token.paddingLG}px`");
    background-color: v-bind("token.colorBgContainer");
    border-radius: v-bind("`${token.borderRadiusLG}px`");
    border: 1px solid v-bind("token.colorBorderSecondary");
  }

  &-table {
    height: 100%;

    :deep(.ant-spin-nested-loading) {
      height: 100%
    }

    :deep(.ant-spin-container) {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    :deep(.ant-table) {
      flex: 1;
    }
  }
}
</style>