import type { AddRoleParams, GivePermissionParams, PagingQueryParams, PagingResponse, RoleDetailVO, RoleItemVO, UpdateRoleParams } from '@/types/api';
import { request } from '@/utils/request/instance';

class RoleService {
  static getRoleList(params: PagingQueryParams) {
    return request.get<PagingResponse<RoleItemVO>>('/sys/role', { ...params });
  }

  // 更新角色
  static updateRole(params: UpdateRoleParams) {
    return request.put<null>(`/sys/role/${params.id}`, params);
  }

  static getRoleDetail(id: number) {
    return request.get<RoleDetailVO>(`/sys/role/${id}`)
  }

  static givePermission(params: GivePermissionParams) {
    return request.put(`/sys/role/assignPrem`, params);
  }

  static deleteRoleById(id: number | string) {
    return request.delete(`/sys/role/${id}`)
  }

  static addRole(data: AddRoleParams) {
    return request.post("/sys/role", data)
  }
}

export default RoleService
