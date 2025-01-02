
import type { DepartmentItemVO } from '@/types/api';

interface TreeNode {
  key: number;
  title: string;
  managerName: string;
  children?: TreeNode[];
}

/**
 * 将扁平数组转换为树形结构
 * @param items 扁平的部门数组
 * @param pid 父ID
 */
export const convertToTree = (items: DepartmentItemVO[], pid: number = 0): TreeNode[] => { // 定义一个函数,扁平数组转换为树形结构
  return items
    .filter(item => item.pid === pid) // 过滤出当前层级的节点,pid等于传入的pid的节点
    .map(item => ({ // 将过滤出的节点映射为树节点对象
      key: item.id, // 设置节点的key为部门的id
      title: item.name, // 设置节点的title为部门的名称
      managerName: item.managerName, // 设置节点的managerName为部门的负责人名称
      children: convertToTree(items, item.id) // 递归调用convertToTree函数,当前节点的子节点
    }))
    .filter(node => node !== null); // 过滤掉可能为空的节点,返回的数组中不包含null
}