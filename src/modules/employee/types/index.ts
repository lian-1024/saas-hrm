import type { PagingQueryParams } from "../../../shared/types";
import type { FormOfEmploymentType } from "../constants";


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
  formOfEmployment:  FormOfEmploymentType;
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

export interface EmployeeDetailVO extends EmployeeInfoVO {

  /**
   * 员工部门id
   */
  departmentId: number;

  /**
    * 员工转正日期, 格式: 2020-01-01
    */
  correctionTime: string;

  /**
   * 用户的角色集合
   */
  roleIds: number[];

}

export interface PagingEmployeeListParams extends PagingQueryParams {
  /**
   * 部门id,根据部门查询当前部门及子部门的用户
   */
  departmentId: number;
  /**
   * 根据名字模糊查询
   */
  keyword?: string;

}


export interface UpdateWithAddEmployeeParams extends Omit<Employee, 'departmentName'> {
  /**
   * 员工转正日期, 格式: 2020-01-01
   */
  correctionTime: string;
  /**
   * 员工部门id
   */
  departmentId: number;
}

export interface GiveEmployeeRoleParams {
  /**
   * 员工id
   */
  id: string;
  /**
   * 员工角色id数组
   */
  roleIds: string[];
}

export interface AddEmployeeParams {
  /**
   * 员工转正日期, 格式: 2020-01-01
   */
  correctionTime: string;
  /**
   * 员工部门id
   */
  departmentId: number;
  /**
   * 员工聘用形式, 1正式, 2非正式
   */
  formOfEmployment: number;
  /**
   * 员工手机号, 校验: 符合手机号格式
   */
  mobile: string;
  /**
   * 头像信息
   */
  staffPhoto?: string;
  /**
   * 员工入职日期, 格式: 2020-01-01
   */
  timeOfEntry: string;
  /**
   * 员工名字, 校验: 1-4位字符
   */
  username: string;
  /**
   * 员工工号
   */
  workNumber: string
}