import type { PermissionTableTreeNode } from '@/shared/utils/convert/types';

export const isPermissionExistName = (permissionTableTree: PermissionTableTreeNode[], name: string): boolean => {
  return permissionTableTree.some(permission => {
    if (permission.name === name) return true
    return permission.children && isPermissionExistName(permission.children, name)
  })
}

export const isPermissionExistCode = (permissionTableTree: PermissionTableTreeNode[], code: string): boolean => {
  return permissionTableTree.some(permission => {
    if (permission.code === code) return true
    return permission.children && isPermissionExistName(permission.children, code)
  })
}