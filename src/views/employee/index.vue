<script setup lang="ts">
import { QAvatar } from '@/components/base/Avatar';
import { useRequest } from '@/composables/use-request';
import { FormOfEmployment, FormOfEmploymentMap } from '@/constants/employee';
import router from '@/router';
import DepartmentService from '@/services/department.service';
import EmployeeService from '@/services/employee.service';
import type { PagingResponse } from '@/types/api';
import type { EmployeeVO, PagingEmployeeListParams } from '@/types/api/employee';
import { convertDepartmentToTree } from '@/utils/tree';
import { type ButtonProps, type TableProps, type TreeProps, Button, Flex, InputSearch, Popconfirm, Table, Tree } from 'ant-design-vue';
import type { TablePaginationConfig } from 'ant-design-vue/es/table/interface';
import { reactive, ref } from 'vue';
import RoleModal from './components/role-modal.vue';
// 员工管理
defineOptions({
  name: "EmployeePage"
})



const departmentTree = ref<TreeProps['treeData']>()
const searchEmployeeParams = reactive<PagingEmployeeListParams>({
  departmentId: 0,
  keyword: "",
  page: 1,
  pagesize: 10
})

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

const { loading: getDepartmentLoading } = useRequest(DepartmentService.getCompanyDepartmentList, {
  onSuccess: ({ data }) => {

    departmentTree.value = convertDepartmentToTree(data)
  }
})

// 分页获取员工列表
const { loading: getEmployeeListLoading, run: getEmployeeList } = useRequest(() => EmployeeService.getEmployeeList(searchEmployeeParams), {
  onSuccess: ({ data }) => {
    employeeTableDataSource.rows = data.rows.map(item => ({ ...item, key: item.id }))
    employeeTableDataSource.total = data.total
  }
})


const handleViewEmployee = (employeeId: number) => {
  console.log("employee id:", employeeId);
  router.push(`/employee/detail/${employeeId}`)
}

const handleDeleteByEmployeeId = (employeeId: number) => {
  console.log("employee:", employeeId);

}

const handleSelectDepartment: TreeProps['onSelect'] = (selectedKeys) => {
  // 获取当前选中的部门 id
  searchEmployeeParams.departmentId = Number(selectedKeys[0])
}

</script>

<template>
  <Flex gap="small" class="h-full">
    <Flex vertical class="employee-left" gap="middle">
      <InputSearch placeholder="请输入员工姓名全员搜索" v-model:value="searchEmployeeParams.keyword" />
      <Tree v-if="!getDepartmentLoading" class="draggable-tree" draggable block-node :tree-data="departmentTree"
        default-expand-all @select="handleSelectDepartment" />

    </Flex>
    <Flex vertical gap="small" class="flex-1 employee-right">
      <Flex justify="space-between" class="employee-right-actions">
        <Button :size="actionsSize">
          群发通知
        </Button>
        <Flex gap="small">
          <Button type="primary" :size="actionsSize">
            添加员工
          </Button>
          <Button :size="actionsSize">
            excel导入
          </Button>
          <Button :size="actionsSize">
            excel导出
          </Button>
        </Flex>
      </Flex>
      <!-- table -->
      <Table :pagination="{
        position: tablePaginationPosition,
        pageSizeOptions: tablePaginationPageSizeOptions,
        total: employeeTableDataSource.total,
        current: searchEmployeeParams.page,
        showTotal: total => `共 ${total} 条数据`
      }" class="flex-1 h-full employee-right-table" :columns="columns" :data-source="employeeTableDataSource.rows"
        :row-selection="tableRowSelection">
        <template #bodyCell="{ column, record }">
          <!-- 员工头像 -->
          <template v-if="column.key === 'staffPhoto'">
            <QAvatar :src="record.staffPhoto" />
          </template>

          <!-- 聘用形式 -->
          <template v-else-if="column.key === 'formOfEmployment'">
            {{ FormOfEmploymentMap[(record.formOfEmployment) as FormOfEmployment] }}
          </template>

          <!-- 操作 -->
          <template v-else-if="column.key === 'operations'">
            <Flex>
              <Button type="link" size="small" @click="handleViewEmployee(record.key)">查看</Button>
              <Button type="link" size="small" @click="openGiveRoleModal(record.key)">角色</Button>
              <Popconfirm @confirm="handleDeleteByEmployeeId(record.key)">
                <Button type="link" size="small">删除</Button>
              </Popconfirm>
            </Flex>
          </template>


        </template>
      </Table>
      <!-- 分配角色 modal -->
      <RoleModal v-model:open="giveRoleModalStatus" :employee-id="currentSelectedEmployee" />
    </Flex>
  </Flex>
</template>

<style scoped lang="less">
.employee {
  &-left {
    max-width: 280px;
    padding: var(--spacing-large);
    background-color: var(--color-background);
    overflow-y: scroll;
  }

  &-right {
    flex: 1;

    &-actions {
      padding: var(--spacing-middle);
      background-color: var(--color-background);
    }

    &-table {
      padding: var(--spacing-middle);
      background-color: var(--color-background);
    }
  }
}
</style>