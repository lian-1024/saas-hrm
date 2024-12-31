import type { Response } from '@/types/api'
import { request } from '@/utils/request/instance'

class HomeService {
  static async getHomeData(): Promise<Response<string>> {
    return request.get<string>('/home/data')
  }
}

export default HomeService
