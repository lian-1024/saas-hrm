import type { PermissionVO } from '@/modules/permission/types';
import type { PermissionNode } from './types';

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
  }
}
