import type { HomeDataVO } from '@/types/api'
import type { DashboardNoticeVO } from '@/types/api/dashboard'
import { request } from '@/utils/request/instance'
class HomeService {
  static async getDashboardData() {
    return request.get<HomeDataVO>('/home/data')
  }

  static async getDashboardNotice() {
    return request.get<DashboardNoticeVO[]>("/home/notice")
  }
}

export default HomeService
