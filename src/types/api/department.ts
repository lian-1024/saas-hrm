/**
 * 返回数据
 */
export interface DepartmentItemVO {
  /**
   * 部门code
   */
  code: string;
  /**
   * 创建时间
   */
  createTime: string;
  /**
   * 主键id
   */
  id: number;
  /**
   * 介绍
   */
  introduce: string;
  /**
   * 主管id
   */
  managerId: number;
  /**
   * 主管名称
   */
  managerName: string;
  /**
   * 部门名称
   */
  name: string;
  /**
   * 父级id, 此部门所属的父级部门对象的id值
   */
  pid: number;
  [property: string]: any;
}