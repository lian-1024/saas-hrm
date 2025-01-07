<script setup lang="ts">
import PermissionModal from '@/modules/permission/components/permission-modal.vue';
import PermissionService from '@/modules/permission/services/permission.service';
import { QSpin } from '@/shared/components/base/spin';
import { useRequest } from '@/shared/composables/use-request/use-request';
import { PermissionTree } from '@/shared/utils/convert/permission';
import type { PermissionTableTreeNode } from '@/shared/utils/convert/types';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { Button, Flex, message, Modal, Table, type TableProps } from 'ant-design-vue';
import { h, onMounted, ref } from 'vue';
// 权限管理
defineOptions({
  name: "PermissionPage"
})

const columns: TableProps['columns'] = [
  {
    title: '名称',
    dataIndex: "name",
    key: 'name'
  },
  {
    title: '标识',
    dataIndex: "key",
    key: 'key'
  },
  {
    title: '描述',
    dataIndex: "description",
    key: 'description'
  },
  {
    title: '操作',
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
    message.success("删除权限成功")
    getPermissionList()
  },
  onError: (error) => {
    message.error(error.message || "删除权限失败")
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
    content: '确认删除该数据吗?',
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
</script>

<template>
  <Flex class="permission-wrapper h-full" vertical gap="middle">
    <div>
      <Button type="primary" @click="handleAddPermission(0)">添加权限</Button>
    </div>
    <QSpin :spinning="getPermissionListLoading">
      <Table :pagination="false" class="permission-table" :data-source="permissionTree" :columns="columns"
        :default-expand-all="true" :indent-size="15" bordered>
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'operations'">
            <Flex>
              <Button size="small" @click="handleAddPermission(record.id)" type="link">添加</Button>
              <Button size="small" @click="handleEditPermission(record.id)" type="link">编辑</Button>
              <Button size="small" @click="handleShowConfirmDelete(record.id)" type="link">删除</Button>
            </Flex>
          </template>
        </template>
      </Table>
    </QSpin>

    <PermissionModal :permission-id="currentSelectedPermissionId" :is-edit="isEdit" v-model:open="permissionModalStatus"
      :permission-tree="permissionTree" @success="getPermissionList" />
  </Flex>
</template>

<style scoped lang="scss">
.permission {
  &-wrapper {
    padding: var(--spacing-large);
    background-color: var(--color-background);
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