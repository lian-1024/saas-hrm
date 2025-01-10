import type { AddPermissionParams, PermissionVO, UpdatePermissionParams } from "@/modules/permission/types";
import { request } from "@/shared/utils/http/request";
  
class PermissionService {
  // 获取权限列表
  static getPermissionList() {
    return request.get<PermissionVO[]>('/sys/permission')
  }

  static addPermission(data: AddPermissionParams) {
    return request.post("/sys/permission", { data })
  }

  static getPermissionById(id: number) {
    return request.get<PermissionVO>(`/sys/permission/${id}`)
  }

  static deletePermissionById(id: number) {
    return request.delete(`/sys/permission/${id}`)
  }

  static updatePermission(data: UpdatePermissionParams) {
    return request.put(`/sys/permission/${data.id}`, { data })
  }
}

export default PermissionService