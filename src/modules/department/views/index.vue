<script lang="ts" setup>
import DepartmentService from '@/modules/department/services/department.service';
import { QSkeleton } from '@/shared/components/base/skeleton';
import { useAntdToken } from '@/shared/composables/use-antd-token';
import { useRequest } from '@/shared/composables/use-request/use-request';
import { useTheme } from '@/shared/composables/use-theme';
import { DepartmentTree } from '@/shared/utils/convert/department';
import { DownOutlined } from '@ant-design/icons-vue';
import { type MenuProps, type TreeProps, Dropdown, Flex, Menu, Modal, Tree, TypographyText, message } from 'ant-design-vue';
import type { MenuItemType } from 'ant-design-vue/es/menu/src/interface';
import { h, onMounted, ref } from 'vue';
import DepartmentModal from '../components/modal.vue';
const { token } = useAntdToken()
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

const { loading: getListLoading, run: getCompanyDepartmentList } = useRequest(DepartmentService.getCompanyDepartmentList, {
  onSuccess: (data) => {
    departmentTree.value = DepartmentTree.toTree(data.data)
  }
})

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
    getCompanyDepartmentList()
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
  // 触发对应的事件
  operationClickMap[info.key as keyof typeof operationClickMap](key)
}


const { isDark } = useTheme()
onMounted(async () => {
  await getCompanyDepartmentList()
})
</script>


<template>
  <Flex class="department-wrapper" justify="center" align="start">
    <QSkeleton :loading="getListLoading" active :title="false" :paragraph="{
      rows: 16
    }">
      <Tree class="department-tree flex-1" default-expand-all draggable block-node :tree-data="departmentTree">
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
    </QSkeleton>
    <DepartmentModal v-model:open="modalOpen" :type="modalType" :department-id="selectedDepartmentId" />
  </Flex>
</template>

<style lang="less" scoped>
.department {
  &-wrapper {

    height: 100%;
    padding-block: calc(var(--spacing-large) * 2);
    padding-inline: calc(var(--spacing-large) + 10%);
    background-color: v-bind("token.colorBgContainer");
    border-radius: v-bind("`${token.borderRadiusLG}px`");
    border: 1px solid v-bind("token.colorBorderSecondary");

  }

  &-tree {
    max-width: 60%;
  }

}

:deep(.ant-tree-treenode) {
  padding-block: v-bind("`${token.paddingXXS}px`");
}

:deep(.ant-tree-node-content-wrapper) {
  border: 1px solid transparent;
  transition: border-color 0.3s;
  background-color: v-bind("isDark && `transparent`") !important;

  &:hover {
    border-color: v-bind("isDark ? token.colorPrimary : token.colorPrimaryHover");
  }
}
</style>
