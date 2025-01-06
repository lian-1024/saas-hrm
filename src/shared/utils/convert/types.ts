export interface TreeNode {
  key: number
  title: string
  children?: TreeNode[]
}

export interface DepartmentNode extends TreeNode {
  managerName: string
}

export interface PermissionNode extends TreeNode { }

