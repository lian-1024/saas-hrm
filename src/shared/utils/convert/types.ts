import type { PermissionVO } from '@modules/permission/types'

export interface TreeNode {
  key: number | string
  title: string
  children?: TreeNode[]
}

export interface DepartmentNode extends TreeNode {
  managerName: string
}

export interface PermissionNode extends TreeNode {}

export interface PermissionTableTreeNode extends PermissionVO {
  children: PermissionTableTreeNode[]
}
