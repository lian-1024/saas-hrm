import type { TableProps } from 'ant-design-vue'
import { h } from 'vue'
import TablePopover from '../components/table-popover.vue'
import { ATTENDANCE_STATUS, type AttendanceStatusKey } from '../constants/attendance'
import type { EmployeeAttendance } from '../types'

export const generateDateColumns = (
  days: number,
  yearOfReport: number,
  monthOfReport: number,
  onCellClick: (params: {
    userId: number
    departmentId: number
    day: string
    adtStatu: number
  }) => void
): TableProps<EmployeeAttendance>['columns'] => {
  const datePrefix = `${yearOfReport}/${monthOfReport}/`
  const columns: TableProps<EmployeeAttendance>['columns'] = []

  for (let day = 1; day <= days; day++) {
    const date = `${datePrefix}${day}`
    columns.push({
      title: `${monthOfReport}/${day}`,
      dataIndex: date,
      key: date,
      width: 80,
      align: 'center',
      customRender: ({ text, record }) => {
        const attendanceRecord = record.attendanceRecord.find((item) => item.day === date)
        const status = ATTENDANCE_STATUS[text as AttendanceStatusKey]

        if (!status) return text

        return h(TablePopover, {
          username: record.username,
          yearOfReport,
          monthOfReport,
          dayOfReport: day,
          adtStatu: text,
          adtInTime: attendanceRecord?.adtInTime,
          adtOutTime: attendanceRecord?.adtOutTime,
          adtInPlace: attendanceRecord?.adtInPlace,
          adtOutPlace: attendanceRecord?.adtOutPlace,
          onClick: () => {
            onCellClick({
              userId: record.id ?? 0,
              departmentId: record.departmentId,
              day: date,
              adtStatu: text
            })
          },
        })
      },
    })
  }

  return columns
} 