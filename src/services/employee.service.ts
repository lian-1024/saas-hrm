import type { EmployeeDetailVO, EmployeeVO, PagingEmployeeListParams, PagingResponse, UpdateEmployeeDetailParams } from '@/types/api';
import { request } from '@/utils/request/instance';

class EmployeeService {
  static getEmployeeList(params: PagingEmployeeListParams) {
    return request.get<PagingResponse<EmployeeVO>>('/sys/user', { params })
  }

  static getEmployeeDetailById(id: string) {
    return request.get<EmployeeDetailVO>(`/sys/user/${id}`)
  }

  static updateEmployeeDetail(id: string, data: UpdateEmployeeDetailParams) {
    return request.put(`/sys/user/${id}`, data)
  }

}


export default EmployeeService
