<script setup lang="ts">
import { QAvatar } from '@components/base/avatar'
import { QSkeleton } from '@components/base/skeleton'
import { QSpin } from '@components/base/spin'
import { useAntdToken } from '@composables/use-antd-token'
import { useRequest } from '@composables/use-request/use-request'
import { useTheme } from '@composables/use-theme'
import router from '@core/router'
import DepartmentService from '@modules/department/services/department.service'
import { type FormOfEmploymentType } from '@modules/employee/constants'
import EmployeeService from '@modules/employee/services/employee.service'
import type { EmployeeVO, PagingEmployeeListParams } from '@modules/employee/types'
import type { PagingResponse } from '@shared/types'
import { DepartmentTree } from '@utils/convert/department'
import {
  Button,
  Flex,
  InputSearch,
  message,
  Popconfirm,
  Table,
  Tree,
  TypographyText,
  type ButtonProps,
  type TableProps,
  type TreeProps,
} from 'ant-design-vue'
import type { TablePaginationConfig } from 'ant-design-vue/es/table/interface'
import FileSaver from 'file-saver'
import {
  computed,
  defineAsyncComponent,
  onMounted,
  reactive,
  ref,
  shallowReactive,
  shallowRef,
  watch,
} from 'vue'
import { useI18n } from 'vue-i18n'
import { FormOfEmployment } from '../constants'
const { isDark } = useTheme()
const { token } = useAntdToken()
const { t } = useI18n()
const RoleModal = defineAsyncComponent(() => import('../components/role-modal.vue'))
const ImportExcelModal = defineAsyncComponent(() => import('../components/import-excel-modal.vue'))
const MassNotificationModal = defineAsyncComponent(() => import('../components/mass-notification.vue'))

// 员工管理
defineOptions({
  name: 'EmployeePage',
})

const departmentTree = shallowRef<TreeProps['treeData']>()
const pagingEmployeeParams = reactive<PagingEmployeeListParams>({
  departmentId: departmentTree.value?.[0]?.id ?? 1,
  keyword: '',
  page: 1,
  pagesize: 10,
})

const importExcelModalStatus = ref<boolean>(false)

const actionsSize: ButtonProps['size'] = 'middle'

const columns = computed<TableProps['columns']>(() => [
  {
    title: t('employee.table.columns.staffPhoto'),
    dataIndex: 'staffPhoto',
    key: 'staffPhoto',
    width: 80,
  },
  {
    title: t('employee.table.columns.username'),
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: t('employee.table.columns.mobile'),
    dataIndex: 'mobile',
    key: 'mobile',
  },
  {
    title: t('employee.table.columns.workNumber'),
    dataIndex: 'workNumber',
    key: 'workNumber',
  },
  {
    title: t('employee.table.columns.formOfEmployment'),
    dataIndex: 'formOfEmployment',
    key: 'formOfEmployment',
  },
  {
    title: t('employee.table.columns.departmentName'),
    dataIndex: 'departmentName',
    key: 'departmentName',
  },
  {
    title: t('employee.table.columns.timeOfEntry'),
    dataIndex: 'timeOfEntry',
    key: 'timeOfEntry',
  },
  {
    title: t('employee.table.columns.operations'),
    key: 'operations',
    fixed: 'right',
    width: 180,
  },
])

const employeeTableDataSource = shallowReactive<
  PagingResponse<EmployeeVO & { key: number | string }>
>({
  total: 0,
  rows: [],
})
const giveRoleModalStatus = ref<boolean>(false)
const currentSelectedEmployee = ref<number | string | null>(null)
const tablePaginationPosition: TablePaginationConfig['position'] = ['bottomRight']
const tablePaginationPageSizeOptions = ['5', '10', '20', '30', '40', '50']

const openGiveRoleModal = (employeeId: number | string) => {
  giveRoleModalStatus.value = true
  currentSelectedEmployee.value = employeeId
}



const { loading: getDepartmentLoading, run: getCompanyDepartmentList } = useRequest(
  DepartmentService.getCompanyDepartmentList,
  {
    manual: true,
    onSuccess: ({ data }) => {
      departmentTree.value = DepartmentTree.toTree(data)
    },
  },
)

// 分页获取员工列表
const { loading: getEmployeeListLoading, run: getEmployeeList } = useRequest(
  () => EmployeeService.getEmployeeList(pagingEmployeeParams),
  {
    manual: true,
    onSuccess: ({ data }) => {
      employeeTableDataSource.rows = data.rows.map((item) => ({ ...item, key: item.id }))
      employeeTableDataSource.total = data.total
    },
  },
)
const { run: deleteEmployee } = useRequest(EmployeeService.deleteEmployee, {
  manual: true,
  onSuccess: () => {
    message.success(t('employee.messages.deleteSuccess'))
    getEmployeeList(pagingEmployeeParams)
  },
  onError: (error) => {
    if (error.message) {
      message.error(error.message)
    } else {
      message.error(t('employee.messages.deleteError'))
    }
  },
})

const { run: exportEmployeeList, loading: exportEmployeeListLoading } = useRequest(
  EmployeeService.exportEmployeeList,
  {
    manual: true,
    onSuccess: (res) => {
      console.log(res)
      FileSaver.saveAs(res.data as Blob, '员工列表.xlsx')
    },
  },
)

const handleViewEmployee = (employeeId: number) => {
  router.push(`/employee/detail/${employeeId}`)
}

const handleAddEmployee = () => {
  router.push(`/employee/detail`)
}

const handleSelectDepartment: TreeProps['onSelect'] = (selectedKeys) => {
  // 获取当前选中的部门 id
  pagingEmployeeParams.departmentId = Number(selectedKeys[0])
}

// 当分页发生变化时，重新获取员工列表
const handleChangeTablePagination = (page: number, pageSize: number) => {
  pagingEmployeeParams.page = page
  pagingEmployeeParams.pagesize = pageSize
  getEmployeeList(pagingEmployeeParams)
}

// 监听部门 id 的变化，重新获取员工列表
watch(
  () => pagingEmployeeParams.departmentId,
  (newVal) => {
    getEmployeeList(pagingEmployeeParams)
  },
)

onMounted(async () => {
  await Promise.all([getCompanyDepartmentList(), getEmployeeList()])
})

const getFormalOfEmployment = (formOfEmployment: FormOfEmploymentType) =>
  formalOfEmploymentMap[formOfEmployment].value

const formalOfEmploymentMap = {
  [FormOfEmployment.Formal]: computed(() => t('employee.table.formalOfEmployment.formal')),
  [FormOfEmployment.InFormal]: computed(() => t('employee.table.formalOfEmployment.informal')),
}



const selectedEmployees = ref<(Pick<EmployeeVO, 'id' | 'username'>)[]>([])

const tableRowSelection = ref<TableProps['rowSelection']>({
  onChange(selectedRowKeys, selectedRows) {
    selectedEmployees.value = selectedRows.map((item) => ({
      id: item.id,
      username: item.username,
    }))
  },

})

const massNotificationModalStatus = ref<boolean>(false)
const openMassNotificationModal = () => {
  selectedEmployees.value.length > 0 ? (massNotificationModalStatus.value = true) : message.warning(t('employee.messages.noSelectedEmployee'))
  console.log(massNotificationModalStatus.value)
}
</script>

<template>
  <Flex gap="small" class="h-full employee-wrapper">
    <Flex vertical class="employee-left" gap="middle">
      <InputSearch @search="getEmployeeList(pagingEmployeeParams)" :placeholder="t('employee.search.placeholder')"
        v-model:value="pagingEmployeeParams.keyword" />
      <QSkeleton :loading="getDepartmentLoading" active :title="false" :paragraph="{
        rows: 16,
      }">
        <Tree v-if="!getDepartmentLoading" class="draggable-tree h-full" draggable block-node
          :tree-data="departmentTree" default-expand-all @select="handleSelectDepartment" />
      </QSkeleton>
    </Flex>
    <Flex vertical gap="small" class="flex-1 employee-right h-full">
      <Flex justify="space-between" class="employee-right-actions">
        <Button :size="actionsSize" @click="openMassNotificationModal">
          {{ t('employee.actions.sendNotification') }}
        </Button>
        <Flex gap="small">
          <Button type="primary" :size="actionsSize" @click="() => handleAddEmployee()">
            {{ t('employee.actions.addEmployee') }}
          </Button>
          <Button :size="actionsSize" @click="importExcelModalStatus = true">
            {{ t('employee.actions.importExcel') }}
          </Button>
          <Button :loading="exportEmployeeListLoading" :size="actionsSize" @click="exportEmployeeList">
            {{ t('employee.actions.exportExcel') }}
          </Button>
        </Flex>
      </Flex>
      <!-- table -->
      <QSpin :spinning="getEmployeeListLoading" wrapper-class-name="flex-1 h-full">
        <Table :pagination="{
          position: tablePaginationPosition,
          pageSizeOptions: tablePaginationPageSizeOptions,
          total: employeeTableDataSource.total,
          current: pagingEmployeeParams.page,
          onChange: handleChangeTablePagination,
          showTotal: (total) => t('employee.table.pagination.total', { total }),
        }" class="flex-1 h-full employee-right-table" :columns="columns" :data-source="employeeTableDataSource.rows"
          :row-selection="tableRowSelection">
          <template #headerCell="{ title }">
            <TypographyText type="secondary" :level="5" class="table-header-title">{{
              title
            }}</TypographyText>
          </template>
          <template #bodyCell="{ column, record }">
            <!-- 员工头像 -->
            <template v-if="column.key === 'staffPhoto'">
              <QAvatar :src="record.staffPhoto" />
            </template>

            <!-- 聘用形式 -->
            <template v-else-if="column.key === 'formOfEmployment'">
              {{ getFormalOfEmployment(record.formOfEmployment) }}
            </template>

            <!-- 操作 -->
            <template v-else-if="column.key === 'operations'">
              <Flex>
                <Button type="link" size="small" @click="handleViewEmployee(record.key)">{{
                  t('employee.table.actions.view')
                }}</Button>
                <Button type="link" size="small" @click="openGiveRoleModal(record.key)">{{
                  t('employee.table.actions.role')
                }}</Button>
                <Popconfirm @confirm="deleteEmployee(record.key)" :title="t('employee.table.actions.deleteConfirm')">
                  <Button type="link" size="small" danger>{{
                    t('employee.table.actions.delete')
                  }}</Button>
                </Popconfirm>
              </Flex>
            </template>
          </template>
        </Table>
      </QSpin>
      <!-- 分配角色 modal -->
      <RoleModal v-model:open="giveRoleModalStatus" :employee-id="currentSelectedEmployee" />
      <ImportExcelModal v-model:open="importExcelModalStatus" />
      <MassNotificationModal v-model:open="massNotificationModalStatus" :employees="selectedEmployees" />
    </Flex>
  </Flex>
</template>
<style scoped lang="less">
:deep(.ant-spin-container) {
  height: 100%;
}

.employee {
  &-wrapper {
    border-radius: v-bind('`${token.borderRadiusLG}px`');
    border: 1px solid v-bind('token.colorBorderSecondary');
  }

  &-left {
    max-width: 280px;
    padding: v-bind('`${token.paddingLG}px`');
    background-color: v-bind('token.colorBgContainer');

    :deep(.ant-tree-node-content-wrapper) {
      border: 1px solid transparent;
      transition: border-color 0.3s;
      background-color: v-bind('isDark && `transparent`') !important;

      &:hover {
        border-color: v-bind('isDark ? token.colorPrimary : token.colorPrimaryHover');
      }
    }
  }

  &-right {
    flex: 1;

    &-actions {
      padding: v-bind('`${token.paddingLG}px`');
      background-color: v-bind('token.colorBgContainer');
    }

    &-table {
      padding: v-bind('`${token.paddingLG}px`');
      background-color: v-bind('token.colorBgContainer');

      .table-header-title {
        white-space: nowrap;
      }
    }
  }
}
</style>
