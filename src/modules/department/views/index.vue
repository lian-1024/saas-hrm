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
import { defineAsyncComponent, h, onMounted, ref, shallowRef } from 'vue';
import { useI18n } from 'vue-i18n';
const DepartmentModal = defineAsyncComponent(() => import('../components/modal.vue'))
const { t } = useI18n()
const { token } = useAntdToken()
defineOptions({
  name: "DepartmentPage"
})

const departmentTree = shallowRef<TreeProps['treeData']>([]);
const selectedDepartmentId = ref<string>();



const operations: MenuProps['items'] = [
  {
    key: "addChild",
    label: t('department.operations.addChild'),
  },
  {
    key: "edit",
    label: t('department.operations.edit'),
  },
  {
    key: "delete",
    label: t('department.operations.delete'),
  }
]


const modalOpen = ref(false)
const modalType = ref<'addChild' | 'edit'>("addChild")


const handleOpenModal = (type: "addChild" | "edit", departmentId?: string) => {
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
  handleOpenModal("addChild", key.toString())
}

const handleEditDepartment = (key: string | number) => {
  handleOpenModal("edit", key.toString())
}


const deleteDepartmentConfirm = ref(false)

const { run: deleteDepartment, loading: deleteDepartmentLoading } = useRequest(DepartmentService.deleteDepartment, {
  manual: true,
  onSuccess: () => {
    message.success(t("department.operations.operationMessage.deleteSuccess"))
    getCompanyDepartmentList()
  },
  onError: (error) => {
    message.error(error.message || t("department.operations.operationMessage.deleteError"))
  },
  onFinally: () => {
    deleteDepartmentConfirm.value = false
  }
})

const handleDeleteDepartment = (key: string | number) => {

  Modal.error({
    title: t("department.operations.operationMessage.deleteConfirmTitle"),
    content: t("department.operations.operationMessage.deleteConfirmContent"),
    okText: t("department.operations.operationMessage.confirmDelete"),
    closable: true,
    cancelText: t("department.operations.operationMessage.cancelDelete"),
    onOk: async () => {
      await deleteDepartment(key.toString())
      return null
    }
  })
}

const operationClickMap = {
  addChild: handleAddSubDepartment,
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
                  {{ $t('department.operations.title') }}
                  <DownOutlined />
                </TypographyText>
              </Dropdown>
            </Flex>
          </Flex>
        </template>
      </Tree>
    </QSkeleton>
    <DepartmentModal v-model:open="modalOpen" :type="modalType" :department-id="selectedDepartmentId"
      @success="getCompanyDepartmentList" />
  </Flex>
</template>

<style lang="less" scoped>
.department {
  &-wrapper {

    height: 100%;
    padding-block: v-bind("`${token.paddingLG * 2}px`");
    padding-inline: 15%;
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
