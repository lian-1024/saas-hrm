import type { FormOfEmployment } from "@/constants/employee";

export interface Employee {
  /**
 * 员工部门名字
 */
  departmentName: string;
  /**
  * 员工id
  */
  id: number;
  /**
 * 员工手机号
 */
  mobile: string;
  /**
   * 员工头像地址, 完整地址, 直接用
   */
  staffPhoto: string;
  /**
   * 员工入职日期, 格式: 2020-01-01
   */
  timeOfEntry: string;
  /**
   * 员工名字
   */
  username: string;
  /**
   * 员工工号
   */
  workNumber: string;
  /**
  * 员工聘用形式, 1正式, 2非正式
  */
  formOfEmployment: FormOfEmployment;
}


/**员工列表项  */
export interface EmployeeVO extends Employee {
}

/**
 * 响应数据
 */
export interface EmployeeInfoVO extends Employee {
  /**
   * 员工转正日期, 格式: 2020-01-01
   */
  correctionTime: string;

  /**
   * 用户的角色集合
   */
  roleIds: number[];

}

