<script setup lang="ts">
import { useRequest } from '@/composables/use-request'
import { ATTENDANCE_STATUS, type AttendanceStatusKey } from '@/constants/attendance'
import AttendanceService from '@/services/attendance.service'
import DepartmentService from '@/services/department.service'
import type { AttendancePagingParams, AttendanceRecord, AttendanceRow } from '@/types/api'
import type { EmployeeAttendanceVO } from '@/types/api/attendance'
import {
  Button,
  CheckboxGroup,
  Flex,
  Table,
  TypographyText,
  TypographyTitle,
  type CheckboxGroupProps,
  type TableProps
} from 'ant-design-vue'
import { h, reactive, ref, watch } from 'vue'
import CompanyDrawerCompanyDrawer from './components/drawer.vue'
import SettingModal from './components/setting/modal.vue'
import TablePopover from './components/table-popover.vue'

interface EmployeeAttendance extends EmployeeAttendanceVO {
  key: string | number | null
  attendanceRecord: AttendanceRecord[]
}

defineOptions({
  name: 'AttendancePage',
})

const departmentOptions = ref<CheckboxGroupProps['options']>([])

const baseColumns: TableProps<EmployeeAttendance>['columns'] = [
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

const attendanceColumns = ref<TableProps<EmployeeAttendance>['columns']>(baseColumns)

const employeeDataSource = reactive({
  total: 0,
  rows: [] as EmployeeAttendance[]
})

const drawerStatus = ref(false)
const settingModalStatus = ref(false)
const selectedDepartmentId = ref<string>()


const attendanceInfo = reactive({
  monthOfReport: 1,
  tobeTaskCount: 0,
  dayOfMonth: 0,
  yearOfReport: 2026,
  attendanceRecord: [] as AttendanceRow[]
})

// 格式化表格数据
const formatTableData = (records: AttendanceRow[]): EmployeeAttendance[] => {
  const { yearOfReport, monthOfReport } = attendanceInfo
  return records.map(record => {

    const baseInfo = {
      key: record.id,
      id: record.id,
      departmentId: record.departmentId,
      departmentName: record.departmentName,
      mobile: record.mobile,
      username: record.username,
      workNumber: record.workNumber,
      attendanceRecord: record.attendanceRecord
    }


    const attendanceData = record.attendanceRecord.reduce((acc, curr) => {
      const day = parseInt(curr.day.slice(6))
      return {
        ...acc,
        [`${yearOfReport}/${monthOfReport}/${day}`]: curr.adtStatu
      }
    }, {} as Record<string, number>)

    return {
      ...baseInfo,
      ...attendanceData
    }
  })
}
const selectedDepartmentIds = ref<string[]>([])

const attendancePagingParams = reactive<AttendancePagingParams>({
  page: 1,
  pagesize: 10,
  deptID: selectedDepartmentIds.value.join(",")
})

const { run: getAttendanceList } = useRequest(AttendanceService.getAttendanceList, {
  onSuccess: ({ data }) => {
    const { yearOfReport, monthOfReport, tobeTaskCount, data: { rows } } = data

    attendanceInfo.tobeTaskCount = tobeTaskCount
    attendanceInfo.dayOfMonth = new Date(yearOfReport, monthOfReport, 0).getDate()
    attendanceInfo.attendanceRecord = rows
    attendanceInfo.yearOfReport = yearOfReport
    attendanceInfo.monthOfReport = monthOfReport
    console.log("data:", data);
    employeeDataSource.rows = formatTableData(rows)
    employeeDataSource.total = data.data.total
  }
})




// 当分页发生变化时，重新获取员工列表
const handleChangeTablePagination = (page: number, pageSize: number) => {
  attendancePagingParams.page = page
  attendancePagingParams.pagesize = pageSize
  getAttendanceList(attendancePagingParams)
}

// 生成日期列
const generateDateColumns = (days: number) => {
  const dateColumns: TableProps<EmployeeAttendance>['columns'] = []

  const { yearOfReport, monthOfReport } = attendanceInfo

  // 循环生成日期列
  for (let day = 1; day <= days; day++) {

    const date = `${yearOfReport}/${monthOfReport}/${day}`
    dateColumns.push({
      title: `${monthOfReport}/${day}`,
      dataIndex: date,
      key: date,
      width: 80,
      align: 'center',
      customRender: ({ text, record }) => {
        const attendanceRecord = record.attendanceRecord.find(item => item.day === date)
        const status = ATTENDANCE_STATUS[text as AttendanceStatusKey]

        if (!status) return text

        // popover
        return h(TablePopover, {
          username: record.username,
          yearOfReport: yearOfReport,
          monthOfReport: monthOfReport,
          dayOfReport: day,
          adtStatu: text,
          adtInTime: attendanceRecord?.adtInTime,
          adtOutTime: attendanceRecord?.adtOutTime,
          adtInPlace: attendanceRecord?.adtInPlace,
          adtOutPlace: attendanceRecord?.adtOutPlace
        })
      },
    })
  }

  return dateColumns
}

// 监听天数变化，更新columns
watch(() => attendanceInfo.dayOfMonth, (newDays) => {
  if (newDays > 0) {
    attendanceColumns.value = [
      ...baseColumns,
      ...generateDateColumns(newDays)
    ]
  }
})


useRequest(DepartmentService.getCompanyDepartmentList, {
  onSuccess: ({ data }) => {
    departmentOptions.value = data.map((item) => ({
      label: item.name,
      value: item.id
    }))
  }
})






watch(() => selectedDepartmentIds.value, () => {
  attendancePagingParams.deptID = selectedDepartmentIds.value.join(",")
  getAttendanceList(attendancePagingParams)
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
    <Flex class="attendance-middle" gap="small" align="flex-start">
      <TypographyTitle class="attendance-middle-label" :level="5">部门:</TypographyTitle>
      <CheckboxGroup :options="departmentOptions" v-model:value="selectedDepartmentIds" />
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
    <CompanyDrawerCompanyDrawer v-model:open="drawerStatus" />
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
    padding-block: var(--spacing-large);
    padding-inline: calc(var(--spacing-large) * 2);
    background-color: var(--color-background);

    &-label {
      min-width: max-content;
    }
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
