import type { AttendanceRow, EmployeeAttendance } from '../types'

export const formatTableData = (
  records: AttendanceRow[],
  yearOfReport: number,
  monthOfReport: number
): EmployeeAttendance[] => {
  // 预先计算日期前缀
  const datePrefix = `${yearOfReport}/${monthOfReport}/`

  return records.map((record) => {
    // 创建基础信息对象
    const baseInfo = {
      key: record.id,
      id: record.id,
      departmentId: record.departmentId,
      departmentName: record.departmentName,
      mobile: record.mobile,
      username: record.username,
      workNumber: record.workNumber,
      attendanceRecord: record.attendanceRecord,
    }

    // 使用 reduce 一次性构建考勤数据
    const attendanceData = record.attendanceRecord.reduce(
      (acc, curr) => {
        const day = parseInt(curr.day.slice(6))
        acc[`${datePrefix}${day}`] = curr.adtStatu
        return acc
      },
      {} as Record<string, number>
    )

    return {
      ...baseInfo,
      ...attendanceData,
    }
  })
} 