import { i as instance } from "./index-BRjnmkr0.js";
class RoleService {
  static getRoleList(params) {
    return instance.get("/sys/role", { params });
  }
  static updateRole(params) {
    return instance.put(`/sys/role/${params.id}`, { data: params });
  }
  static getRoleDetail(id) {
    return instance.get(`/sys/role/${id}`);
  }
  static givePermission(params) {
    return instance.put(`/sys/role/assignPrem`, { data: params });
  }
  static deleteRoleById(id) {
    return instance.delete(`/sys/role/${id}`);
  }
  static addRole(data) {
    return instance.post("/sys/role", { data });
  }
  static getRoleListEnable() {
    return instance.get("/sys/role/list/enabled");
  }
}
export {
  RoleService as R
};
