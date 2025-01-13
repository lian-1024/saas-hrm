import { i as instance } from "./index-BRjnmkr0.js";
class DepartmentService {
  static getCompanyDepartmentList() {
    return instance.get("/company/department");
  }
  static addDepartment(data) {
    return instance.post("/company/department", { data });
  }
  static getDepartmentManagerList() {
    return instance.get("/sys/user/simple");
  }
  static getDepartmentDetail(id) {
    return instance.get(`/company/department/${id}`);
  }
  static updateDepartment(data) {
    return instance.put(`/company/department/${data.id}`, { data });
  }
  static deleteDepartment(id) {
    return instance.delete(`/company/department/${id}`);
  }
}
export {
  DepartmentService as D
};
