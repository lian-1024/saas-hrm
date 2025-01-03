<script setup lang="ts">
import { useRequest } from '@/composables/use-request';
import PermissionService from '@/services/permission.service';
import type { PermissionVO } from '@/types/api/permission';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { Button, Flex, Modal, Table, type TableProps } from 'ant-design-vue';
import { h, ref } from 'vue';
import PermissionModal from './components/permission-modal.vue';


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
    dataIndex: "code",
    key: 'code'
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

const permissionList = ref<PermissionVO[]>([])

const permissionModalStatus = ref<boolean>(false)
const isEdit = ref<boolean>(false)
const currentSelectedPermissionId = ref()


const { run: getPermissionList } = useRequest(PermissionService.getPermissionList, {
  onSuccess: ({ data }) => {
    console.log("data:", data);
    permissionList.value = data
  }
})



const handleAddPermission = (permissionId: number) => {
  currentSelectedPermissionId.value = permissionId
  permissionModalStatus.value = true
  isEdit.value = false
}

const handleEditPermission = (permissionId: number) => {
  currentSelectedPermissionId.value = permissionId
  permissionModalStatus.value = true
  isEdit.value = true
}

const handleConfirmDeletePermission = async (permissionId: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(permissionId)
      console.log("delete permission:", permissionId);
    }, 2000)
  })
}

const handleShowConfirmDelete = (permissionId: number) => {
  Modal.confirm({
    content: '确认删除该数据吗?',
    icon: h(ExclamationCircleOutlined),
    onOk: async () => await handleConfirmDeletePermission(permissionId),
  })
} 
</script>

<template>
  <Flex class="permission-wrapper h-full" vertical gap="middle">
    <div>
      <Button type="primary">添加权限</Button>
    </div>
    <Table class="permission-table" :data-source="permissionList" :columns="columns" bordered>
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

    <PermissionModal :permission-id="currentSelectedPermissionId" :is-edit="isEdit" v-model:open="permissionModalStatus"
      :permission-list="permissionList" />
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