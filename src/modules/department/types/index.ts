/**
 * 返回数据
 */
export interface DepartmentItemVO {
  /**
   * 部门code
   */
  code: string
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 主键id
   */
  id: number
  /**
   * 介绍
   */
  introduce: string
  /**
   * 主管id
   */
  managerId: number
  /**
   * 主管名称
   */
  managerName: string
  /**
   * 部门名称
   */
  name: string
  /**
   * 父级id, 此部门所属的父级部门对象的id值
   */
  pid: number
}

export interface AddDepartmentParams {
  /**
   * 部门编码, 校验1: 1-50个字符之间. 校验2: 所有部门编码不可以重复
   */
  code: string
  /**
   * 部门介绍, 校验1: 1-300个字符之间
   */
  introduce: string
  /**
   * 部门负责人id
   */
  managerId: number | string
  /**
   * 部门名称, 校验1: 1-50个字符之间. 校验2: 同级部门中不能出现重复部门名字
   */
  name: string
  /**
   * 部门父级部门id
   */
  pid: string
}

export interface DepartmentMangerItemVO {
  /**
   * 负责人id
   */
  id: string
  /**
   * 负责人名字
   */
  username: string
}

/**
 * 部门详情
 */
export interface DepartmentDetailVO {
  /**
   * 部门编码
   */
  code: string
  /**
   * 部门创建时间
   */
  createTime: string
  /**
   * 部门id
   */
  id: number
  /**
   * 部门介绍
   */
  introduce: string
  /**
   * 部门负责人id
   */
  managerId: number | string
  /**
   * 部门负责人名字
   */
  managerName: string
  /**
   * 部门名字
   */
  name: string
  /**
   * 父级部门id
   */
  pid: number
}

export interface UpdateDepartmentParams {
  /**
   * 部门编码, 校验1: 1-50个字符之间. 校验2: 所有部门编码不可以重复
   */
  code: string
  /**
   * 部门创建时间
   */
  createTime: string
  /**
   * 部门id
   */
  id: number
  /**
   * 部门介绍, 校验1: 1-300个字符之间
   */
  introduce: string
  /**
   * 部门负责id
   */
  managerId: number | string
  /**
   * 部门名字, 校验1: 1-50个字符之间. 校验2: 同级部门中不能出现重复部门名字
   */
  name: string
  /**
   * 父级部门id
   */
  pid: number
}
