import type { DepartmentItemVO } from '@/modules/department/types'
import type { CascaderProps } from 'ant-design-vue'
import type { DepartmentNode } from './types'

export const DepartmentTree = {
  toTree(items: DepartmentItemVO[], pid = 0): DepartmentNode[] {
    return items
      .filter(item => item.pid === pid)
      .map(item => ({
        key: item.id,
        title: item.name,
        managerName: item.managerName,
        children: this.toTree(items, item.id)
      }))
  },

  toCascader(items: DepartmentItemVO[], pid = 0): CascaderProps['options'] {
    return items
      .filter(item => item.pid === pid)
      .map(item => ({
        value: item.id.toString(),
        label: item.name,
        code: parseInt(item.code),
        children: this.toCascader(items, item.id)
      }))
  }
}

