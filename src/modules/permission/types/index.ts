
export interface Permission {
  /**
   * 权限点标识, 重要, 后续前端需要用此值做判断
   */
  code: string;
  /**
   * 权限点描述
   */
  description: string;
  /**
   * 权限点开启状态, 0关闭, 1开启. (暂时无需判断, 前端逻辑上默认全都有效直接用)
   */
  enVisible: number;
  /**
   * 权限点id
   */
  id: number;
  /**
   * 权限点名字
   */
  name: string;
  /**
   * 权限点父级id, 页面权限点pid值为'0', 按钮权限点值为所属页面权限点的id值
   */
  pid: number;
  /**
   * 权限点类型, 1为页面路由权限点, 2为按钮权限点
   */
  type: number;
}

export interface PermissionVO extends Permission { }


export interface AddPermissionParams extends Permission { }

export interface UpdatePermissionParams extends Permission { }
