import type { AddDepartmentParams, DepartmentDetailVO, DepartmentItemVO, DepartmentMangerItemVO, UpdateDepartmentParams } from '@/modules/department/types'
import { request } from '@/shared/utils/http/request'

class DepartmentService {
  static getCompanyDepartmentList() {
    return request.get<DepartmentItemVO[]>('/company/department')
  }

  static addDepartment(data: AddDepartmentParams) {
    return request.post<DepartmentItemVO>('/company/department', { data })
  }

  static getDepartmentManagerList() {
    return request.get<DepartmentMangerItemVO[]>('/sys/user/simple')
  }

  static getDepartmentDetail(id: string) {
    return request.get<DepartmentDetailVO>(`/company/department/${id}`)
  }

  static updateDepartment(data: UpdateDepartmentParams) {
    return request.put<DepartmentDetailVO>(`/company/department/${data.id}`, { data })
  }

  static deleteDepartment(id: string) {
    return request.delete<DepartmentDetailVO>(`/company/department/${id}`)
  }
}

export default DepartmentService