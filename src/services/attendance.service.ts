import type { AttendanceList, CompanyVO, PagingQueryParams, UpdateCompanyParams } from '@/types/api';
import { request } from '@/utils/request/instance';

class AttendanceService {

  static getAttendanceList(params: PagingQueryParams) {
    return request.get<AttendanceList>('/attendances', { params });
  }


  static getCompanyList() {
    return request.get<CompanyVO[]>("/company/list")
  }

  static updateCompanyList(data: UpdateCompanyParams) {
    return request.put("/company/list", { data })
  }
}

export default AttendanceService;
