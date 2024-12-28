<script setup lang="ts">
import { QAvatar } from '@/components/base/Avatar';
import type { EmployeeVO } from '@/types';
import { formatDate } from '@/utils/date';
import { SearchOutlined } from '@ant-design/icons-vue';
import { Button, Flex, Input, Table, Tree, type ButtonProps, type TableProps, type TreeProps } from 'ant-design-vue';
import { h, ref, useId } from 'vue';

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


const columns: TableProps['columns'] = [
  {
    title: "Avatar",
    dataIndex: "avatar",
    key: "avatar",
    fixed: "left"
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    fixed: "left"
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone"
  },
  {
    title: "Job Number",
    dataIndex: "jobNumber",
    key: "job-number"
  },
  {
    title: "Employment Form",
    dataIndex: "employmentForm",
    key: 'employmentForm'
  },
  {
    title: 'Department',
    dataIndex: "department",
    key: "department"
  },
  {
    title: "On-Boarding Time",
    dataIndex: 'onBoardingTime',
    key: "onBoardingTime"
  },
  {
    title: "Operations",
    dataIndex: "operations",
    key: "operations",
    fixed: "right",
    width: 200
  }
]

const employeeTableDataSource = ref<EmployeeVO[]>([
  {
    key: useId(),
    name: "lianqq",
    phone: 18500000000,
    avatar: "/vite.svg",
    employmentForm: "正式",
    jobNumber: "6666",
    department: "字节跳动",
    onBoardingTime: formatDate(new Date())
  }
])

const tableRowSelection = ref<TableProps['rowSelection']>({
  onChange: (selectedRowKeys, selectedRows) => {
    console.log("selectedRowKeys:", selectedRowKeys);
    console.log("selectedRows:", selectedRows);
  }
})

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
          <template v-if="column.key === 'avatar'">
            <QAvatar :src="record.avatar" />
          </template>
          <template v-if="column.key === 'operations'">
            <Flex>
              <Button type="link" size="small">查看</Button>
              <Button type="link" size="small">角色</Button>
              <Button type="link" size="small">删除</Button>
            </Flex>
          </template>
        </template>
      </Table>
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