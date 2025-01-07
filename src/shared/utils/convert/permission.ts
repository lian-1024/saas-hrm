import type { PermissionVO } from '@/modules/permission/types';
import type { PermissionNode, PermissionTableTreeNode } from './types';
export const PermissionTree = {
  convertPermissionToTree(items: PermissionVO[], pid: number = 0): PermissionNode[] {
    return items
      .filter(item => item.pid === pid)
      .map(item => ({
        key: item.id,
        title: item.name,
        children: this.convertPermissionToTree(items, item.id)
      }))
      .filter(node => node !== null);
  },
  convertPermissionToTableTree(permissions: PermissionVO[], parentId: number = 0): PermissionTableTreeNode[] {
    return permissions
      .filter(permission => permission.pid === parentId)
      .map(permission => ({
        ...permission,
        key: permission.code,
        children: this.convertPermissionToTableTree(permissions, permission.id)
      }))
      .filter(node => node !== null);

  }

}
