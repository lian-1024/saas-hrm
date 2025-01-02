import type { DepartmentItemVO } from '@/types/api'
import { request } from '@/utils/request/instance'
class DepartmentService {
  static getCompanyDepartmentList() {
    return request.get<DepartmentItemVO[]>('/company/department')
  }
}

export default DepartmentService