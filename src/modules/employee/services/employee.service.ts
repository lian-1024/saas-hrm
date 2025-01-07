import type { EmployeeDetailVO, EmployeeVO, GiveEmployeeRoleParams, PagingEmployeeListParams, UpdateWithAddEmployeeParams } from '@/modules/employee/types';
import type { PagingResponse } from '@/shared/types';
import { request } from '@/shared/utils/http/request/instance';

class EmployeeService {
  static getEmployeeList(params: PagingEmployeeListParams) {
    return request.get<PagingResponse<EmployeeVO>>('/sys/user', { params })
  }

  static getEmployeeDetailById(id: string) {
    return request.get<EmployeeDetailVO>(`/sys/user/${id}`);
  }

  static updateEmployeeDetail(id: string, data: UpdateWithAddEmployeeParams) {
    return request.put(`/sys/user/${id}`, { data });
  }

  static giveEmployeeRole(data: GiveEmployeeRoleParams) {
    return request.put('/sys/user/assignRoles', { data });
  }

  static deleteEmployee(id: string) {
    return request.delete(`/sys/user/${id}`);
  }

  static addEmployee(data: UpdateWithAddEmployeeParams) {
    return request.post('/sys/user', { data });
  }

  static exportEmployeeList() {
    return request.get("/sys/user/export", {
      responseType: 'blob'
    });
  }

  static getExportTemplate() {
    return request.get("/sys/user/import/template", {
      responseType: 'blob'
    });
  }

  static uploadEmployee(data: FormData) {
    return request.post("/sys/user/import", {
      data,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
}
export default EmployeeService

