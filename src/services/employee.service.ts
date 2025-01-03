import type { EmployeeDetailVO, EmployeeVO, GiveEmployeeRoleParams, PagingEmployeeListParams, PagingResponse, UpdateWithAddEmployeeParams, AddEmployeeParams } from '@/types/api';
import { request } from '@/utils/request/instance';

class EmployeeService {
  static getEmployeeList(params: PagingEmployeeListParams) {
    return request.get<PagingResponse<EmployeeVO>>('/sys/user', { params })
  }

  static getEmployeeDetailById(id: string) {
    return request.get<EmployeeDetailVO>(`/sys/user/${id}`)
  }

  static updateEmployeeDetail(id: string, data: UpdateWithAddEmployeeParams) {
    return request.put(`/sys/user/${id}`, data)
  }
  static giveEmployeeRole(params: GiveEmployeeRoleParams) {
    return request.put('/sys/user/assignRoles', params)
  }

  static deleteEmployee(id: string) {
    return request.delete(`/sys/user/${id}`)
  }

  static addEmployee(data: UpdateWithAddEmployeeParams) {
    return request.post('/sys/user', data)
  }
}


export default EmployeeService
