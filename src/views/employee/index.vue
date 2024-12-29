<script setup lang="ts">
import { QAvatar } from '@/components/base/Avatar';
import { FormOfEmployment, FormOfEmploymentMap } from '@/constants/employee';
import router from '@/router';
import type { EmployeeVO } from '@/types';
import { formatDate } from '@/utils/date';
import { SearchOutlined } from '@ant-design/icons-vue';
import { type ButtonProps, type TableProps, type TreeProps, Button, Flex, Input, Table, Tree } from 'ant-design-vue';
import { h, ref, useId } from 'vue';
import RoleModal from './components/role-modal.vue';

// 员工管理
defineOptions({
  name: "EmployeePage"
})



const searchTree = ref<TreeProps['treeData']>([
  {
    key: useId(),
    title: "字节跳动",
    children: [
      {
        key: useId(),
        title: "总裁办",
      },
      {
        key: useId(),
        title: '行政部'
      },
      {
        key: useId(),
        title: '人事部',
        children: [
          {
            key: useId(),
            title: "财务核算部"
          },
          {
            key: useId(),
            title: "税务管理部"
          },
          {
            key: useId(),
            title: "薪资管理部"
          }
        ]
      }
    ]
  }
])
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
    key: "mobile"
  },
  {
    title: "工号",
    dataIndex: "workNumber",
    key: "workNumber"
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
    key: "timeOfEntry"
  },
  {
    title: "操作",
    dataIndex: "operations",
    key: "operations",
    fixed: "right",
    width: 200
  }
]

const employeeTableDataSource = ref<(EmployeeVO & { key: number | string })[]>([
  {
    departmentName: "字节跳动",
    formOfEmployment: FormOfEmployment.Formal,
    id: Math.random(),
    key: useId(),
    mobile: "18500000000",
    staffPhoto: "/vite.svg",
    timeOfEntry: formatDate(Date()),
    username: "lianqq",
    workNumber: "ZUISHUAI-1"
  }
])
const giveRoleModalStatus = ref<boolean>(false)
const currentSelectedEmployee = ref<number | string | null>(null)

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


const handleViewEmployee = (id: number) => {
  console.log("employee id:", id);
  router.push(`/employee/detail/${id}`)
}


</script>

<template>
  <Flex gap="middle" class="h-full">
    <Flex vertical class="employee-left" gap="large">
      <Input placeholder="请输入员工姓名全称" :prefix="h(SearchOutlined)" />
      <Tree class="draggable-tree" draggable block-node :tree-data="searchTree" default-expand-all />
    </Flex>
    <Flex vertical gap="middle" class="flex-1 employee-right">
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
      <Table class="flex-1 h-full employee-right-table" :columns="columns" :data-source="employeeTableDataSource"
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
              <Button type="link" size="small">删除</Button>
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