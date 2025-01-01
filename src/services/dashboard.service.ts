import type { HomeDataVO } from '@/types/api'
import { request } from '@/utils/request/instance'
class HomeService {
  static async getDashboardData() {
    return request.get<HomeDataVO>('/home/data')
  }
}

export default HomeService
