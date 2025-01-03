import type { EmployeeVO, PagingEmployeeListParams, PagingResponse } from '@/types/api';
import { request } from '@/utils/request/instance';

class EmployeeService {
  static getEmployeeList(params: PagingEmployeeListParams) {
    return request.get<PagingResponse<EmployeeVO>>('/sys/user', { ...params })
  }
}


export default EmployeeService
