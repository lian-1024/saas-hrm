import type { AddPermissionParams, PermissionVO } from "@/types/api";
import { request } from "@/utils/request/instance";

class PermissionService {
  // 获取权限列表
  static getPermissionList() {
    return request.get<PermissionVO[]>('/sys/permission')
  }

  static addPermission(data: AddPermissionParams) {
    return request.post("/sys/permission", { data })
  }



}

export default PermissionService