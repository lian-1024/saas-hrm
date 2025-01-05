import type { AttendanceSetting, UpdateAttendanceParams } from '@/types/api'
import { request } from '@/utils/request/instance'

class AttendanceSettingService {
  static getAttendanceSettingById(departmentId: number) {
    return request.get<AttendanceSetting>("/cfg/atte/item", { params: { departmentId } })
  }

  static updateAttendanceSetting(data: UpdateAttendanceParams) {
    return request.put("/cfg/atte", { data })
  }
}

export default AttendanceSettingService