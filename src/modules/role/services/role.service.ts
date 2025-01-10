import type { AddRoleParams, EnableRoleItem, GivePermissionParams, RoleDetailVO, RoleItemVO, UpdateRoleParams } from '@/modules/role/types';
import type { PagingQueryParams, PagingResponse } from '@/shared/types';
import { request } from '@/shared/utils/http/request';

class RoleService {
  static getRoleList(params: PagingQueryParams) {
    return request.get<PagingResponse<RoleItemVO>>('/sys/role', { params });
  }

  static updateRole(params: UpdateRoleParams) {
    return request.put<null>(`/sys/role/${params.id}`, { data: params });
  }

  static getRoleDetail(id: number) {
    return request.get<RoleDetailVO>(`/sys/role/${id}`);
  }

  static givePermission(params: GivePermissionParams) {
    return request.put(`/sys/role/assignPrem`, { data: params });
  }

  static deleteRoleById(id: number | string) {
    return request.delete(`/sys/role/${id}`);
  }

  static addRole(data: AddRoleParams) {
    return request.post("/sys/role", { data });
  }

  static getRoleListEnable() {
    return request.get<EnableRoleItem[]>('/sys/role/list/enabled');
  }
}

export default RoleService
