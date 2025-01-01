<script setup lang="ts">
import type { AskForLeaveSettingVO } from '@/types/api/attendance'
import { Form, FormItem, Select, Switch, Table, type TableProps } from 'ant-design-vue'
import { ref } from 'vue'

const leaveTypeMap: Record<string, string> = {
  '60000': '年假',
  '60100': '事假',
  '60200': '病假',
  '60300': '婚假',
  '60400': '丧假',
  '60500': '产假',
  '60600': '奖励产假',
  '60700': '陪产假',
  '60800': '探亲假',
  '60900': '工伤假',
  '61000': '调休假',
  '61100': '产检假',
  '61200': '流产假',
  '61300': '长期病假'
}

const leaveTypeColumns: TableProps['columns'] = [
  {
    title: '类型',
    dataIndex: 'leaveType',
    key: 'leaveType',
    customRender: ({ text }) => leaveTypeMap[text] || text
  },
  {
    title: '是否可用',
    dataIndex: 'isEnable',
    key: 'isEnable'
  }
]

const handleSubmit = () => {
  console.log('submit TabAskForLeave')
}
defineExpose({
  handleSubmit,
})

const departmentOptions = ref([
  { label: '部门1', value: 1 },
  { label: '部门2', value: 2 },
  { label: '部门3', value: 3 },
])

const selectedDepartementId = ref(1)

const leaveTypeDataSource = ref<AskForLeaveSettingVO[]>([
  {
    id: 1,
    companyId: 1,
    departmentId: 1,
    leaveType: '60000',
    isEnable: 1,
  },
  {
    id: 2,
    companyId: 1,
    departmentId: 1,
    leaveType: '60100',
    isEnable: 1,
  },
  {
    id: 3,
    companyId: 1,
    departmentId: 1,
    leaveType: '60200',
    isEnable: 1,
  },
  {
    id: 4,
    companyId: 1,
    departmentId: 1,
    leaveType: '60300',
    isEnable: 1,
  },
  {
    id: 5,
    companyId: 1,
    departmentId: 1,
    leaveType: '60400',
    isEnable: 1,
  },
  {
    id: 6,
    companyId: 1,
    departmentId: 1,
    leaveType: '60500',
    isEnable: 1,
  },
  {
    id: 7,
    companyId: 1,
    departmentId: 1,
    leaveType: '60600',
    isEnable: 1,
  },
  {
    id: 8,
    companyId: 1,
    departmentId: 1,
    leaveType: '60700',
    isEnable: 1,
  },
  {
    id: 9,
    companyId: 1,
    departmentId: 1,
    leaveType: '60800',
    isEnable: 1,
  },
  {
    id: 10,
    companyId: 1,
    departmentId: 1,
    leaveType: '60900',
    isEnable: 1,
  },
  {
    id: 11,
    companyId: 1,
    departmentId: 1,
    leaveType: '61000',
    isEnable: 1,
  },
  {
    id: 12,
    companyId: 1,
    departmentId: 1,
    leaveType: '61100',
    isEnable: 1,
  },
  {
    id: 13,
    companyId: 1,
    departmentId: 1,
    leaveType: '61200',
    isEnable: 1,
  },
  {
    id: 14,
    companyId: 1,
    departmentId: 1,
    leaveType: '61300',
    isEnable: 1,
  },
  {
    id: 15,
    companyId: 1,
    departmentId: 1,
    leaveType: '61400',
    isEnable: 1,
  },
])

// Switch 切换处理函数
const handleSwitchChange = (checked: boolean, record: Record<string, any>) => {
  record.isEnable = checked ? 0 : 1
}
</script>

<template>
  <div>
    <Form>
      <FormItem>
        <Select v-model:value="selectedDepartementId" :options="departmentOptions" />
      </FormItem>
    </Form>
    <Table :pagination="false" :columns="leaveTypeColumns" :data-source="leaveTypeDataSource">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'isEnable'">
          <Switch :checked="record.isEnable === 0"
            @change="(checked) => handleSwitchChange(Boolean(checked), record)" />
        </template>
      </template>
    </Table>
  </div>
</template>

<style scoped lang="scss"></style>
