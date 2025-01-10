import type { DashboardNoticeVO, HomeDataVO } from '@/modules/dashboard/types';
import { request } from '@/shared/utils/http/request';
class HomeService {
  static async getDashboardData() {
    return request.get<HomeDataVO>('/home/data')
  }

  static async getDashboardNotice() {
    return request.get<DashboardNoticeVO[]>("/home/notice")
  }
}

export default HomeService
