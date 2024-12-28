import { requestClient } from "@/utils/request";
import { RequestClient } from "@/utils/request/request-client";


class UserService {
  private request: RequestClient;

  constructor(request: RequestClient) {
    this.request = request
  }

  getUserById(id: number | string) {
    return this.request.get("/user", {
      data: {
        id
      }
    })
  }
}

const userService = new UserService(requestClient)
export default userService
