import { request } from '@/shared/utils/http/request/instance'
import type { AttendanceSetting, DeductionSetting, LeaveSetting, OverTimeSetting, UpdateAttendanceParams, UpdateDeductionSettingParams, UpdateLeaveSettingParams, UpdateOverTimeSettingParams } from '@/modules/attendance/types'

class AttendanceSettingService {
  static getAttendanceSettingById(departmentId: number) {
    return request.get<AttendanceSetting>("/cfg/atte/item", { params: { departmentId } })
  }

  static updateAttendanceSetting(data: UpdateAttendanceParams) {
    return request.put("/cfg/atte", { data })
  }

  static getLeaveSettingByDepartmentId(departmentId: number) {
    return request.get<LeaveSetting[]>("/cfg/leave/list", { params: { departmentId } })
  }

  static updateLeaveSetting(data: UpdateLeaveSettingParams) {
    return request.post("/cfg/leave", { data })
  }

  static getDeductionSettingByDepartmentId(departmentId: number) {
    return request.get<DeductionSetting[]>("/cfg/ded/list", { params: { departmentId } })
  }

  static updateDeductionSetting(data: UpdateDeductionSettingParams) {
    return request.post("/cfg/deduction", { data })
  }

  static getOverTimeSettingByDepartmentId(departmentId: number) {
    return request.get<OverTimeSetting>("/cfg/extDuty/item", { params: { departmentId } })
  }

  static updateOverTimeSetting(data: UpdateOverTimeSettingParams) {
    return request.put("/cfg/extDuty", { data })
  }
}

export default AttendanceSettingService