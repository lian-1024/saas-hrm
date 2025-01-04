<script setup lang="ts">
import { useRequest } from '@/composables/use-request';
import PermissionService from '@/services/permission.service';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { Button, Flex, message, Modal, Table, type TableProp } from 'ant-design-vue';
import { h, ref, watch } from 'vue';
import { convertPermissionToTableTree } from '../../utils/convert';
import PermissionModal from './components/permission-modal.vue';

// 权限管理
defineOptions({
  name: "PermissionPage"
})

const columns: TableProp['columns'] = [
  {
    title: '名称',
    dataIndex: "name",
    key: 'name'
  }, ,
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

const permissionList = ref()

const permissionModalStatus = ref<boolean>(false)
const isEdit = ref<boolean>(false)
const currentSelectedPermissionId = ref()


const { run: getPermissionList } = useRequest(PermissionService.getPermissionList, {
  onSuccess: ({ data }) => {
    console.log("data:", data);
    permissionList.value = convertPermissionToTableTree(data).map(item => ({
      ...item,
      key: item.id
    }))

    console.log("permissionList:", permissionList.value)
  }
})

const { run: deletePermissionById } = useRequest(PermissionService.deletePermissionById, {
  manual: true,
  onSuccess: () => {
    message.success("删除权限点成功")
    getPermissionList()
  },
  onError: (error) => {
    message.error(error.message || "删除权限点失败")
  }
})



const showAddPermissionModal = (permissionId: number) => {
  isEdit.value = false
  currentSelectedPermissionId.value = permissionId
  permissionModalStatus.value = true
}

const showEditPermissionModal = (permissionId: number) => {
  isEdit.value = true
  currentSelectedPermissionId.value = permissionId
  permissionModalStatus.value = true
}



const showConfirmDeleteModal = (permissionId: number) => {
  Modal.confirm({
    content: '确认删除该数据吗?',
    icon: h(ExclamationCircleOutlined),
    onOk: async () => {
      try {
        await deletePermissionById(permissionId)
        return
      } catch {
        return null
      }
    },
  })
}

watch(permissionModalStatus, (newVal) => {
  if (!newVal) {
    getPermissionList()
  }
})
</script>

<template>
  <Flex class="permission-wrapper h-full" vertical gap="middle">
    <div>
      <Button type="primary" @click="showAddPermissionModal(0)">添加权限</Button>
    </div>
    <Table class="permission-table" :data-source="permissionList" :columns="columns" bordered>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operations'">
          <Flex>
            <Button size="small" @click="showAddPermissionModal(record.id)" type="link">添加</Button>
            <Button size="small" @click="showEditPermissionModal(record.id)" type="link">编辑</Button>
            <Button size="small" @click="showConfirmDeleteModal(record.id)" type="link">删除</Button>
          </Flex>
        </template>
      </template>
      <!-- <template #expandedRowRender="{ record }">
        <TableColumnGroup>
          <TableColumn>
            <TypographyText>{{ record.name }}</TypographyText>
          </TableColumn>
          <TableColumn>
            <TypographyText>{{ record.code }}</TypographyText>
          </TableColumn>
          <TableColumn>
            <TypographyText>{{ record.description }}</TypographyText>
          </TableColumn>
          <TableColumn>
            <TypographyText>{{ record.name }}</TypographyText>
          </TableColumn>
        </TableColumnGroup>
      </template> -->
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