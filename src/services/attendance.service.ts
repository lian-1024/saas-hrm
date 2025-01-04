import type { AttendanceList, PagingQueryParams } from '@/types/api';
import { request } from '@/utils/request/instance';

class AttendanceService {

  static getAttendanceList(params: PagingQueryParams) {
    return request.get<AttendanceList>('/attendances', { params });
  }
}

export default AttendanceService;
