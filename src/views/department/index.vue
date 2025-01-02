<script lang="ts" setup>
import { useRequest } from '@/composables/use-request';
import DepartmentService from '@/services/department.service';
import { convertToTree } from '@/utils/tree';
import { DownOutlined } from '@ant-design/icons-vue';
import { type MenuProps, type TreeProps, Dropdown, Flex, Menu, Modal, Tree, TypographyText, message } from 'ant-design-vue';
import type { MenuItemType } from 'ant-design-vue/es/menu/src/interface';
import { h, ref } from 'vue';
import DepartmentModal from './components/modal.vue';

defineOptions({
  name: "DepartmentPage"
})

const departmentTree = ref<TreeProps['treeData']>([]);
const selectedDepartmentId = ref<string>();



const operations: MenuProps['items'] = [
  {
    key: "add",
    label: "添加子部门",
  },
  {
    key: "edit",
    label: "编辑部门",
  },
  {
    key: "delete",
    label: "删除",
  }
]


const modalOpen = ref(false)
const modalType = ref<'add' | 'edit'>("add")


const handleOpenModal = (type: "add" | "edit", departmentId?: string) => {
  modalOpen.value = true
  modalType.value = type
  selectedDepartmentId.value = departmentId
}

const handleAddSubDepartment = (key: string | number) => {
  console.log("添加子部门:", key)
  handleOpenModal("add", key.toString())
}

const handleEditDepartment = (key: string | number) => {
  console.log("编辑部门", key)
  handleOpenModal("edit", key.toString())
}


const deleteDepartmentConfirm = ref(false)

const { run: deleteDepartment, loading: deleteDepartmentLoading } = useRequest(DepartmentService.deleteDepartment, {
  manual: true,
  onSuccess: () => {
    message.success("删除部门成功")
  },
  onError: (error) => {
    if (error.message) {
      message.error(error.message)
    } else {
      message.error("删除部门失败")
    }
  },
  onFinally: () => {
    deleteDepartmentConfirm.value = false
  }
})

const handleDeleteDepartment = (key: string | number) => {
  console.log("删除部门", key)

  Modal.error({
    title: "删除部门",
    content: "确定要删除该部门吗？",
    okText: "确定",
    closable: true,
    cancelText: "取消",
    onOk: async () => {
      try {
        await deleteDepartment(key.toString())
      } catch (error) {
        return null
      }
    },
    onCancel: () => {
      console.log("取消删除")
    }
  })
}

const operationClickMap = {
  add: handleAddSubDepartment,
  edit: handleEditDepartment,
  delete: handleDeleteDepartment
}

const handleOperationClick = (info: MenuItemType, key: string | number) => {
  console.log("点击菜单", info)
  // 触发对应的事件
  operationClickMap[info.key as keyof typeof operationClickMap](key)
}

const { loading: getListLoading } = useRequest(DepartmentService.getCompanyDepartmentList, {
  onSuccess: (data) => {
    departmentTree.value = convertToTree(data.data)
  }
})


</script>


<template>
  <div class="department-wrapper">
    <Tree v-if="!getListLoading" class="department-tree" default-expand-all draggable block-node
      :tree-data="departmentTree">
      <template #title="{ title, managerName, key }">
        <Flex class="department-tree-item" justify="space-between">
          <TypographyText>{{ title }}</TypographyText>
          <Flex gap="middle">
            <TypographyText type="secondary">{{ managerName }}</TypographyText>
            <Dropdown :overlay="h(Menu, { items: operations, onClick: (info) => handleOperationClick(info, key) })"
              :arrow="{ pointAtCenter: true }">
              <TypographyText type="secondary">
                操作
                <DownOutlined />
              </TypographyText>
            </Dropdown>
          </Flex>
        </Flex>
      </template>
    </Tree>
    <DepartmentModal v-model:open="modalOpen" :type="modalType" :department-id="selectedDepartmentId" />
  </div>
</template>

<style lang="less" scoped>
.department {
  &-wrapper {
    height: 100%;
    padding-block: calc(var(--spacing-large) * 2);
    padding-inline: calc(var(--spacing-large) + 10%);
    background-color: var(--color-background);
  }

  &-tree {
    max-width: 60%;
  }

}

:deep(.ant-tree-treenode) {
  padding-block: var(--spacing-small);
}
</style>
