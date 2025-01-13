import { i as instance } from "./index-x-LQkY-F.js";
class PermissionService {
  // 获取权限列表
  static getPermissionList() {
    return instance.get("/sys/permission");
  }
  static addPermission(data) {
    return instance.post("/sys/permission", { data });
  }
  static getPermissionById(id) {
    return instance.get(`/sys/permission/${id}`);
  }
  static deletePermissionById(id) {
    return instance.delete(`/sys/permission/${id}`);
  }
  static updatePermission(data) {
    return instance.put(`/sys/permission/${data.id}`, { data });
  }
}
const PermissionTree = {
  convertPermissionToTree(items, pid = 0) {
    return items.filter((item) => item.pid === pid).map((item) => ({
      key: item.id,
      title: item.name,
      children: this.convertPermissionToTree(items, item.id)
    })).filter((node) => node !== null);
  },
  convertPermissionToTableTree(permissions, parentId = 0) {
    return permissions.filter((permission) => permission.pid === parentId).map((permission) => ({
      ...permission,
      key: permission.code,
      children: this.convertPermissionToTableTree(permissions, permission.id)
    })).filter((node) => node !== null);
  }
};
export {
  PermissionTree as P,
  PermissionService as a
};
