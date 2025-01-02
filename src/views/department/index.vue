<script lang="ts" setup>
import { useRequest } from '@/composables/use-request';
import DepartmentService from '@/services/department.service';
import { convertToTree } from '@/utils/tree';
import { DownOutlined } from '@ant-design/icons-vue';
import { type MenuProps, type TreeProps, Dropdown, Flex, Menu, Modal, Tree, TypographyText } from 'ant-design-vue';
import type { MenuItemType } from 'ant-design-vue/es/menu/src/interface';
import { h, ref } from 'vue';
import DepartmentModal from './components/modal.vue';

defineOptions({
  name: "DepartmentPage"
})

const departmentTree = ref<TreeProps['treeData']>([]);



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


const handleOpenModal = (type: "add" | "edit") => {
  modalOpen.value = true
  modalType.value = type
}

const handleAddSubDepartment = (key: string | number) => {
  console.log("添加子部门:", key)
  handleOpenModal("add")
}

const handleEditDepartment = (key: string | number) => {
  console.log("编辑部门", key)
  handleOpenModal("edit")
}

const handleDeleteDepartment = (key: string | number) => {
  console.log("删除部门", key)

  Modal.error({
    title: "删除部门",
    content: "确定要删除该部门吗？",
    okText: "确定",
    closable: true,

    cancelText: "取消",
    onOk: () => {
      console.log("删除部门", key)
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

useRequest(DepartmentService.getCompanyDepartmentList, {
  onSuccess: (data) => {
    departmentTree.value = convertToTree(data.data)
    console.log(departmentTree.value)
  }
})



</script>


<template>
  <div class="department-wrapper">
    <Tree class="department-tree" default-expand-all draggable block-node :tree-data="departmentTree">
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
    <DepartmentModal v-model:open="modalOpen" v-model:type="modalType" :tree-data="departmentTree" />
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
