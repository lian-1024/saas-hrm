<script setup lang="ts">
import { ATTENDANCE_STATUS, type AttendanceStatusKey } from '@/modules/attendance/constants/attendance'
import AttendanceService from '@/modules/attendance/services/attendance.service'
import type { AttendancePagingParams, AttendanceRecord, AttendanceRow, EmployeeAttendanceVO } from '@/modules/attendance/types'
import DepartmentService from '@/modules/department/services/department.service'
import { QSkeleton } from '@/shared/components/base/skeleton'
import { QSpin } from '@/shared/components/base/spin'
import { useAntdToken } from '@/shared/composables/use-antd-token'
import { useRequest } from '@/shared/composables/use-request/use-request'
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Table,
  TypographyText,
  TypographyTitle,
  type CheckboxOptionType,
  type TableProps
} from 'ant-design-vue'
import { h, reactive, ref, watch, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { CountTo } from 'vue3-count-to'
const { token } = useAntdToken()

const TablePopover = defineAsyncComponent(() => import('@/modules/attendance/components/table-popover.vue'))
const SettingModal = defineAsyncComponent(() => import('@/modules/attendance/components/setting/modal.vue'))
const UpdateAttendance = defineAsyncComponent(() => import('@/modules/attendance/components/update-attendance.vue'))
const CompanyDrawerCompanyDrawer = defineAsyncComponent(() => import('@/modules/attendance/components/drawer.vue'))

interface EmployeeAttendance extends EmployeeAttendanceVO {
  key: string | number | null
  attendanceRecord: AttendanceRecord[]
}

defineOptions({
  name: 'AttendancePage',
})

const departmentOptions = ref<CheckboxOptionType[]>([])

const { t } = useI18n()

const baseColumns: TableProps<EmployeeAttendance>['columns'] = [
  {
    title: t('attendance.table.columns.key'),
    dataIndex: 'key',
    key: 'key',
    width: 80,
    fixed: 'left',
  },
  {
    title: t('attendance.table.columns.username'),
    dataIndex: 'username',
    key: 'username',
    width: 150,
    fixed: 'left',
  },
  {
    title: t('attendance.table.columns.workNumber'),
    dataIndex: 'workNumber',
    key: 'workNumber',
    width: 150,
    fixed: 'left',
  },
  {
    title: t('attendance.table.columns.departmentName'),
    dataIndex: 'departmentName',
    key: 'departmentName',
    width: 150,
    fixed: 'left',
  },
  {
    title: t('attendance.table.columns.mobile'),
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

const { run: getAttendanceList, loading: getAttendanceListLoading } = useRequest(AttendanceService.getAttendanceList, {
  onSuccess: ({ data }) => {
    const { yearOfReport, monthOfReport, tobeTaskCount, data: { rows } } = data

    attendanceInfo.tobeTaskCount = tobeTaskCount
    attendanceInfo.dayOfMonth = new Date(yearOfReport, monthOfReport, 0).getDate()
    attendanceInfo.attendanceRecord = rows
    attendanceInfo.yearOfReport = yearOfReport
    attendanceInfo.monthOfReport = monthOfReport
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

const updateModalOpenStatus = ref(false)


const updateAttendanceProps = reactive({
  day: '',
  adtStatu: 0,
  userId: 0,
  departmentId: 0
})


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
          adtOutPlace: attendanceRecord?.adtOutPlace,
          onClick: () => {
            // 在这里处理点击事件
            updateAttendanceProps.userId = record.id ?? 0
            updateAttendanceProps.day = date
            updateAttendanceProps.adtStatu = text
            updateAttendanceProps.departmentId = record.departmentId
            updateModalOpenStatus.value = true
          }
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


const { loading: getDepartmentListLoading } = useRequest(DepartmentService.getCompanyDepartmentList, {
  onSuccess: ({ data }) => {
    departmentOptions.value = data.map((item) => ({
      label: item.name,
      value: item.id
    }))
  }
})






watch(() => selectedDepartmentIds.value, () => {
  const deptID = selectedDepartmentIds.value.join(",")
  attendancePagingParams.deptID = deptID
  getAttendanceList(attendancePagingParams)
})




</script>

<template>
  <Flex class="attendance-wrapper" vertical gap="middle">
    <Flex justify="space-between" align="center" class="attendance-top">
      <Flex vertical align="center" gap="small">
        <TypographyText class="attendance-top-title">{{ t('attendance.top.unprocessed') }}</TypographyText>
        <QSkeleton :paragraph="false" active :loading="getAttendanceListLoading">
          <CountTo :start-val="0" :end-val="attendanceInfo.tobeTaskCount" :duration="3000"
            class="attendance-top-total" />
        </QSkeleton>
      </Flex>
      <Flex gap="middle">
        <Button @click="drawerStatus = true">{{ t('attendance.actions.clockInRange') }}</Button>
        <Button type="primary" @click="settingModalStatus = true">{{ t('attendance.actions.settings') }}</Button>
      </Flex>
    </Flex>
    <Flex class="attendance-middle" gap="small" align="flex-start">
      <TypographyTitle class="attendance-middle-label" :level="5">{{ t('attendance.filter.department') }}:
      </TypographyTitle>
      <QSkeleton active :title="false" :loading="getDepartmentListLoading" :paragraph="{
        rows: 2
      }">
        <CheckboxGroup v-model:value="selectedDepartmentIds" class="w-full">
          <div class="attendance-middle-checkbox-group">
            <Checkbox v-for="option in departmentOptions" :key="option.value.toString()" :value="option.value">
              {{ option.label }}
            </Checkbox>
          </div>
        </CheckboxGroup>
      </QSkeleton>
    </Flex>
    <div class="attendance-table">
      <QSpin :spinning="getAttendanceListLoading">
        <Table :pagination="{
          position: ['bottomCenter'],
          pageSize: attendancePagingParams.pagesize,
          total: employeeDataSource.total,
          current: attendancePagingParams.page,
          onChange: handleChangeTablePagination,
          showTotal: total => t('attendance.table.pagination.total', { total })
        }" :columns="attendanceColumns" :data-source="employeeDataSource.rows" :scroll="{ x: 'max-content' }"
          bordered />
      </QSpin>
    </div>
    <CompanyDrawerCompanyDrawer v-model:open="drawerStatus" />
    <SettingModal v-model:open="settingModalStatus" />
    <UpdateAttendance :day="updateAttendanceProps.day" :adtStatu="updateAttendanceProps.adtStatu"
      :userId="updateAttendanceProps.userId" :departmentId="updateAttendanceProps.departmentId"
      v-model:open="updateModalOpenStatus" @update="getAttendanceList(attendancePagingParams)" />
  </Flex>
</template>

<style scoped lang="less">
.attendance {

  &-top {
    width: 100%;
    padding: v-bind("`${token.paddingLG}px`");
    background-color: v-bind("token.colorBgContainer");
    border-radius: v-bind("`${token.borderRadiusLG}px`");
    border: 1px solid v-bind("token.colorBorderSecondary");

    &-title {
      font-size: v-bind("`${token.fontSizeLG}px`");
    }

    &-total {
      font-size: v-bind("`${token.fontSizeXL}px`");
    }
  }

  &-middle {
    padding-block: v-bind("`${token.paddingLG}px`");
    padding-inline: calc(v-bind("`${token.paddingLG}px`") * 2);
    background-color: v-bind("token.colorBgContainer");
    border-radius: v-bind("`${token.borderRadiusLG}px`");
    border: 1px solid v-bind("token.colorBorderSecondary");

    &-label {
      min-width: max-content;
    }

    &-checkbox-group {
      flex: 1;
      display: grid;
      grid-template-columns: repeat(auto-fill, 120px);
      grid-template-rows: repeat(auto-fill, 30px; );
      gap: v-bind("`${token.padding}px`");
    }
  }

  &-table {
    height: 100%;
    padding: v-bind("`${token.paddingLG}px`");
    background-color: v-bind('token.colorBgContainer');
    overflow: auto;
    border-radius: v-bind("`${token.borderRadiusLG}px`");
    border: 1px solid v-bind("token.colorBorderSecondary");
  }

  &-scope {
    &-right {
      height: 100%;
      min-width: 300px;

      :deep(.table-striped) td {
        background-color: v-bind("token.colorBgElevated");
      }
    }
  }
}
</style>
