import { i as instance } from "./index-BRjnmkr0.js";
const FormOfEmployment = {
  Formal: 1,
  InFormal: 2
};
class EmployeeService {
  static getEmployeeList(params) {
    return instance.get("/sys/user", { params });
  }
  static getEmployeeDetailById(id) {
    return instance.get(`/sys/user/${id}`);
  }
  static updateEmployeeDetail(id, data) {
    return instance.put(`/sys/user/${id}`, { data });
  }
  static giveEmployeeRole(data) {
    return instance.put("/sys/user/assignRoles", { data });
  }
  static deleteEmployee(id) {
    return instance.delete(`/sys/user/${id}`);
  }
  static addEmployee(data) {
    return instance.post("/sys/user", { data });
  }
  static exportEmployeeList() {
    return instance.get("/sys/user/export", {
      responseType: "blob"
    });
  }
  static getExportTemplate() {
    return instance.get("/sys/user/import/template", {
      responseType: "blob"
    });
  }
  static uploadEmployee(data) {
    return instance.post("/sys/user/import", {
      data,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }
  static massNotification(data) {
    return instance.post("/sys/messageMuch", { data });
  }
}
export {
  EmployeeService as E,
  FormOfEmployment as F
};
