<script setup lang="ts">
import router from '@/core/router';
import DepartmentService from '@/modules/department/services/department.service';
import ImportExcelModal from '@/modules/employee/components/import-excel-modal.vue';
import RoleModal from '@/modules/employee/components/role-modal.vue';
import { FormOfEmploymentMap, type FormOfEmploymentType } from '@/modules/employee/constants';
import EmployeeService from '@/modules/employee/services/employee.service';
import type { EmployeeVO, PagingEmployeeListParams } from '@/modules/employee/types';
import { QAvatar } from '@/shared/components/base/avatar';
import { QSkeleton } from '@/shared/components/base/skeleton';
import { QSpin } from '@/shared/components/base/spin';
import { useAntdToken } from '@/shared/composables/use-antd-token';
import { useRequest } from '@/shared/composables/use-request/use-request';
import { useTheme } from '@/shared/composables/use-theme';
import type { PagingResponse } from '@/shared/types';
import { DepartmentTree } from '@/shared/utils/convert/department';
import { Button, Flex, InputSearch, message, Popconfirm, Table, Tree, TypographyText, type ButtonProps, type TableProps, type TreeProps } from 'ant-design-vue';
import type { TablePaginationConfig } from 'ant-design-vue/es/table/interface';
import FileSaver from 'file-saver';
import { onMounted, reactive, ref, watch } from 'vue';
const { isDark } = useTheme()
const { token } = useAntdToken()
// 员工管理
defineOptions({
  name: "EmployeePage"
})


const defaultPagingParams = {
  departmentId: 1,
  page: 1,
  pagesize: 10,
  keyword: ""
}
const departmentTree = ref<TreeProps['treeData']>()
const pagingEmployeeParams = reactive<PagingEmployeeListParams>({
  departmentId: departmentTree.value?.[0]?.id ?? 1,
  keyword: "",
  page: 1,
  pagesize: 10
})

const importExcelModalStatus = ref<boolean>(false)

const actionsSize: ButtonProps['size'] = 'middle'

const columns: TableProps<EmployeeVO>['columns'] = [

  {
    title: "头像",
    dataIndex: "staffPhoto",
    key: "staffPhoto",
  },
  {
    title: "昵称",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "手机号",
    dataIndex: "mobile",
    key: "mobile",
    sorter: (a: EmployeeVO, b: EmployeeVO) => a.mobile.length - b.mobile.length
  },
  {
    title: "工号",
    dataIndex: "workNumber",
    key: "workNumber",
    sorter: (a: EmployeeVO, b: EmployeeVO) => a.workNumber.length - b.workNumber.length
  },
  {
    title: "聘用形式",
    dataIndex: "formOfEmployment",
    key: 'formOfEmployment'
  },
  {
    title: '部门',
    dataIndex: "departmentName",
    key: "departmentName"
  },
  {
    title: "入职时间",
    dataIndex: 'timeOfEntry',
    key: "timeOfEntry",
    sorter: (a: EmployeeVO, b: EmployeeVO) => a.timeOfEntry.length - b.timeOfEntry.length
  },
  {
    title: "操作",
    dataIndex: "operations",
    key: "operations",
    fixed: "right",
    width: 200
  }
]

const employeeTableDataSource = reactive<PagingResponse<(EmployeeVO & { key: number | string })>>({
  total: 0,
  rows: []
})
const giveRoleModalStatus = ref<boolean>(false)
const currentSelectedEmployee = ref<number | string | null>(null)
const tablePaginationPosition: TablePaginationConfig['position'] = ['bottomRight']
const tablePaginationPageSizeOptions = ['5', '10', '20', '30', '40', '50']

const openGiveRoleModal = (employeeId: number | string) => {
  giveRoleModalStatus.value = true
  currentSelectedEmployee.value = employeeId
}

const tableRowSelection = ref<TableProps['rowSelection']>({
  onChange: (selectedRowKeys, selectedRows) => {
    console.log("selectedRowKeys:", selectedRowKeys);
    console.log("selectedRows:", selectedRows);
  }
})

const { loading: getDepartmentLoading, run: getCompanyDepartmentList } = useRequest(DepartmentService.getCompanyDepartmentList, {
  manual: true,
  onSuccess: ({ data }) => {

    departmentTree.value = DepartmentTree.toTree(data)
  }
})

// 分页获取员工列表
const { loading: getEmployeeListLoading, run: getEmployeeList } = useRequest(() => EmployeeService.getEmployeeList(pagingEmployeeParams), {
  manual: true,
  onSuccess: ({ data }) => {

    employeeTableDataSource.rows = data.rows.map(item => ({ ...item, key: item.id }))
    employeeTableDataSource.total = data.total
  }
})
const { run: deleteEmployee } = useRequest(EmployeeService.deleteEmployee, {
  manual: true,
  onSuccess: () => {
    message.success("删除员工成功")
    getEmployeeList(pagingEmployeeParams)
  },
  onError: (error) => {
    if (error.message) {
      message.error(error.message)
    } else {
      message.error("删除员工失败")
    }
  }
})

const { run: exportEmployeeList, loading: exportEmployeeListLoading } = useRequest(EmployeeService.exportEmployeeList, {
  manual: true,
  onSuccess: (res) => {
    console.log(res)
    FileSaver.saveAs(res.data as Blob, '员工列表.xlsx')
  }
})


const handleViewEmployee = (employeeId: number) => {
  router.push(`/employee/detail/${employeeId}`)
}

const handleAddEmployee = () => {
  router.push(`/employee/detail`);
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
watch(() => pagingEmployeeParams.departmentId, (newVal) => {
  getEmployeeList(pagingEmployeeParams)
})


onMounted(async () => {
  await Promise.all([getCompanyDepartmentList(), getEmployeeList()])
})
</script>

<template>
  <Flex gap="small" class="h-full">
    <Flex vertical class="employee-left" gap="middle">
      <InputSearch @search="getEmployeeList(pagingEmployeeParams)" placeholder="请输入员工姓名全员搜索"
        v-model:value="pagingEmployeeParams.keyword" />
      <QSkeleton :loading="getDepartmentLoading" active :title="false" :paragraph="{
        rows: 16
      }">
        <Tree v-if="!getDepartmentLoading" class="draggable-tree h-full" draggable block-node
          :tree-data="departmentTree" default-expand-all @select="handleSelectDepartment" />
      </QSkeleton>
    </Flex>
    <Flex vertical gap="small" class="flex-1 employee-right h-full">
      <Flex justify="space-between" class="employee-right-actions">
        <Button :size="actionsSize">
          群发通知
        </Button>
        <Flex gap="small">
          <Button type="primary" :size="actionsSize" @click="handleAddEmployee">
            添加员工
          </Button>
          <Button :size="actionsSize" @click="importExcelModalStatus = true">
            excel导入
          </Button>
          <Button :loading="exportEmployeeListLoading" :size="actionsSize" @click="exportEmployeeList">
            excel导出
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
          showTotal: total => `共 ${total} 条数据`
        }" class="flex-1 h-full employee-right-table" :columns="columns" :data-source="employeeTableDataSource.rows"
          :row-selection="tableRowSelection">
          <template #headerCell="{ title }">
            <TypographyText type="secondary" :level="5" class="table-header-title">{{ title }}</TypographyText>
          </template>
          <template #bodyCell="{ column, record }">
            <!-- 员工头像 -->
            <template v-if="column.key === 'staffPhoto'">
              <QAvatar :src="record.staffPhoto" />
            </template>

            <!-- 聘用形式 -->
            <template v-else-if="column.key === 'formOfEmployment'">
              {{ FormOfEmploymentMap[(record.formOfEmployment) as FormOfEmploymentType] }}
            </template>

            <!-- 操作 -->
            <template v-else-if="column.key === 'operations'">
              <Flex>
                <Button type="link" size="small" @click="handleViewEmployee(record.key)">查看</Button>
                <Button type="link" size="small" @click="openGiveRoleModal(record.key)">角色</Button>
                <Popconfirm @confirm="deleteEmployee(record.key)" title="确定要删除吗？">
                  <Button type="link" size="small">删除</Button>
                </Popconfirm>
              </Flex>
            </template>


          </template>
        </Table>
      </QSpin>
      <!-- 分配角色 modal -->
      <RoleModal v-model:open="giveRoleModalStatus" :employee-id="currentSelectedEmployee" />
      <ImportExcelModal v-model:open="importExcelModalStatus" />
    </Flex>
  </Flex>
</template>
<style scoped lang="less">
:deep(.ant-spin-container) {
  height: 100%;
}

.employee {
  &-left {
    max-width: 280px;
    padding: v-bind("`${token.paddingLG}px`");
    background-color: v-bind("token.colorBgContainer");

    :deep(.ant-tree-node-content-wrapper) {
      border: 1px solid transparent;
      transition: border-color 0.3s;
      background-color: v-bind("isDark && `transparent`") !important;

      &:hover {
        border-color: v-bind("isDark ? token.colorPrimary : token.colorPrimaryHover");
      }
    }
  }

  &-right {
    flex: 1;

    &-actions {
      padding: v-bind("`${token.paddingLG}px`");
      background-color: v-bind("token.colorBgContainer");
    }

    &-table {
      padding: v-bind("`${token.paddingLG}px`");
      background-color: v-bind("token.colorBgContainer");

      .table-header-title {
        white-space: nowrap;
      }
    }
  }
}
</style>
