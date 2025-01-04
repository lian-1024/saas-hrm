<script setup lang="ts">
import { useRequest } from '@/composables/use-request'
import { ATTENDANCE_STATUS, type AttendanceStatusKey } from '@/constants/attendance'
import AttendanceService from '@/services/attendance.service'
import type { AttendancePagingParams, AttendanceRow } from '@/types/api'
import type { EmployeeAttendanceVO } from '@/types/api/attendance'
import { convertDistance } from '@/utils/convert'
import { generateMenuItem } from '@/utils/generate-menu-item'
import { CloseOutlined } from '@ant-design/icons-vue'
import {
  Button,
  CheckboxGroup,
  Drawer,
  Flex,
  Menu,
  Slider,
  Table,
  TypographyText,
  type CheckboxGroupProps,
  type MenuProps,
  type SliderProps,
  type TableProps,
} from 'ant-design-vue'
import { h, reactive, ref, watch } from 'vue'
import ScopedMap from './components/map.vue'
import SettingModal from './components/setting/modal.vue'
interface EmployeeAttendanceVOWithKey extends EmployeeAttendanceVO {
  key: string | number | null
}

defineOptions({
  name: 'AttendancePage',
})

const department: CheckboxGroupProps['options'] = [
  {
    label: '字节跳动',
    value: 'ByteDance',
  },
]

const baseColumns: TableProps<EmployeeAttendanceVOWithKey>['columns'] = [
  {
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    width: 80,
    fixed: 'left',
  },
  {
    title: '姓名',
    dataIndex: 'username',
    key: 'username',
    width: 150,
    fixed: 'left',
  },
  {
    title: '工号',
    dataIndex: 'workNumber',
    key: 'workNumber',
    width: 150,
    fixed: 'left',
  },
  {
    title: '部门',
    dataIndex: 'departmentName',
    key: 'departmentName',
    width: 150,
    fixed: 'left',
  },
  {
    title: '手机',
    dataIndex: 'mobile',
    key: 'mobile',
    width: 150,
    fixed: 'left',
  },
]

const attendanceColumns = ref<TableProps<EmployeeAttendanceVOWithKey>['columns']>(baseColumns)

const employeeDataSource = reactive({
  total: 0,
  rows: [] as EmployeeAttendanceVOWithKey[]
})

const drawerStatus = ref(false)
const settingModalStatus = ref(false)
const scopedRadius = ref(200)
const selectedDepartmentId = ref<string>()

const formatSliderTip: SliderProps['tipFormatter'] = (value = 0) =>
  `${convertDistance(value)}内可打卡`

const companyMenuItems = reactive([
  generateMenuItem("ByteDance", "字节跳动"),
  generateMenuItem("Tencent", "腾讯"),
  generateMenuItem("Alibaba", "阿里巴巴"),
])

const handleSelectedCompany: MenuProps['onClick'] = (info) => {
  console.log("selected:", info);
  selectedDepartmentId.value = info.key.toString()
}

const attendanceInfo = reactive({
  month: 1,
  tobeTaskCount: 0,
  dayOfMonth: 0,
  attendanceRecord: [] as AttendanceRow[]
})

// 格式化表格数据
const formatTableData = (records: AttendanceRow[]): EmployeeAttendanceVOWithKey[] => {
  return records.map(record => {
    const baseInfo = {
      key: record.id,
      id: record.id,
      departmentId: record.departmentId,
      departmentName: record.departmentName,
      mobile: record.mobile,
      username: record.username,
      workNumber: record.workNumber,
    }

    const attendanceData = record.attendanceRecord.reduce((acc, curr) => {
      const day = parseInt(curr.day.slice(6))
      return {
        ...acc,
        [`day${day}`]: curr.adtStatu
      }
    }, {} as Record<string, number>)

    return {
      ...baseInfo,
      ...attendanceData
    }
  })
}

const attendancePagingParams = reactive<AttendancePagingParams>({
  page: 1,
  pagesize: 10,
  deptID: "0"
})

const { run: getAttendanceList } = useRequest(AttendanceService.getAttendanceList, {
  onSuccess: ({ data }) => {
    const { yearOfReport, monthOfReport, tobeTaskCount, data: { rows } } = data

    attendanceInfo.tobeTaskCount = tobeTaskCount
    attendanceInfo.dayOfMonth = new Date(yearOfReport, monthOfReport, 0).getDate()
    attendanceInfo.attendanceRecord = rows
    console.log("data:", data);
    employeeDataSource.rows = formatTableData(rows)
    employeeDataSource.total = data.data.total
  }
})




// 当分页发生变化时，重新获取员工列表
const handleChangeTablePagination = (page: number, pageSize: number) => {
  attendancePagingParams.page = page
  attendancePagingParams.pagesize = pageSize
  getAttendanceList({ ...attendancePagingParams, deptID: selectedDepartmentId.value })
}

// 生成日期列
const generateDateColumns = (days: number, month: number) => {
  const dateColumns: TableProps<EmployeeAttendanceVOWithKey>['columns'] = []

  // 循环生成日期列
  for (let day = 1; day <= days; day++) {
    dateColumns.push({
      title: `${month}/${day}`,
      dataIndex: `day${day}`,
      key: `day${day}`,
      width: 80,
      align: 'center',
      customRender: ({ text }) => {
        // 根据考勤状态生成颜色
        const status = ATTENDANCE_STATUS[text as AttendanceStatusKey]
        if (!status) return text
        // 修改为返回 VNode 函数
        return h(
          TypographyText,
          {
            style: {
              color: status.color
            }
          },
          {
            default: () => status.text
          }
        )
      }
    })
  }

  return dateColumns
}

// 监听天数变化，更新columns
watch(() => attendanceInfo.dayOfMonth, (newDays) => {
  if (newDays > 0) {
    attendanceColumns.value = [
      ...baseColumns,
      ...generateDateColumns(newDays, attendanceInfo.month)
    ]
  }
})




</script>

<template>
  <Flex class="attendance-wrapper" vertical gap="middle">
    <Flex justify="space-between" align="center" class="attendance-top">
      <Flex vertical align="center" gap="small">
        <TypographyText class="attendance-top-title">未处理</TypographyText>
        <TypographyText class="attendance-top-total">{{ attendanceInfo.tobeTaskCount }}</TypographyText>
      </Flex>
      <Flex gap="middle">
        <Button @click="drawerStatus = true">打卡范围</Button>
        <Button type="primary" @click="settingModalStatus = true">设置</Button>
      </Flex>
    </Flex>
    <Flex class="attendance-middle" gap="small" align="center">
      <TypographyText strong>部门:</TypographyText>
      <CheckboxGroup :options="department" />
    </Flex>
    <div class="attendance-table">
      <Table :pagination="{
        position: ['bottomCenter'],
        pageSize: attendancePagingParams.pagesize,
        total: employeeDataSource.total,
        current: attendancePagingParams.page,
        onChange: handleChangeTablePagination,
        showTotal: total => `共 ${total} 条数据`
      }" :columns="attendanceColumns" :data-source="employeeDataSource.rows" :scroll="{ x: 'max-content' }" bordered />
    </div>
    <Drawer height="100vh" @close="drawerStatus = false" title="打卡范围设置" v-model:open="drawerStatus" placement="top"
      :closable="false">
      <template #extra>
        <CloseOutlined />
      </template>
      <template #default>
        <Flex class="h-full" gap="middle">
          <div class="flex-1 h-full">
            <ScopedMap :scoped-radius="scopedRadius" />
          </div>
          <Flex class="attendance-scope-right" vertical gap="middle">
            <div class="attendance-scope-company-list flex-1">
              <Menu v-model:active-key="selectedDepartmentId" :items="companyMenuItems"
                @click="handleSelectedCompany" />
            </div>
            <div>
              <TypographyText type="secondary">半径</TypographyText>
              <Slider :max="1000" v-model:value="scopedRadius" :tip-formatter="formatSliderTip" />
            </div>
          </Flex>
        </Flex>
      </template>
      <template #footer>
        <Flex justify="end" gap="middle">
          <Button>取消</Button>
          <Button type="primary">批量保存</Button>
        </Flex>
      </template>
    </Drawer>
    <SettingModal v-model:open="settingModalStatus" />
  </Flex>
</template>

<style scoped lang="less">
.attendance {
  &-top {
    width: 100%;
    padding: var(--spacing-large);
    background-color: var(--color-background);

    &-title {
      font-size: var(--font-size-middle);
    }

    &-total {
      font-size: var(--font-size-large);
    }
  }

  &-middle {
    padding: var(--spacing-large);
    background-color: var(--color-background);
  }

  &-table {
    padding: var(--spacing-large);
    background-color: var(--color-background);
    overflow: auto;
  }

  &-scope {
    &-right {
      height: 100%;
      min-width: 300px;

      :deep(.table-striped) td {
        background-color: var(--color-background-secondary);
      }
    }
  }
}
</style>
