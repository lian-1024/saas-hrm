<script lang="ts" setup>
import { type TreeProps, Tree } from 'ant-design-vue';
import { ref, useId } from 'vue';

defineOptions({
  name: "DepartmentPage"
})

const departmentTree = ref<TreeProps['treeData']>([
  {
    key: useId(),
    title: "字节跳动",
    children: [
      {
        key: useId(),
        title: "总裁办",
      },
      {
        key: useId(),
        title: '行政部'
      },
      {
        key: useId(),
        title: '人事部',
        children: [
          {
            key: useId(),
            title: "财务核算部"
          },
          {
            key: useId(),
            title: "税务管理部"
          },
          {
            key: useId(),
            title: "薪资管理部"
          }
        ]
      }
    ]
  }
])


</script>


<template>
  <div class="department-wrapper">
    <Tree class="draggable-tree" default-expand-all draggable block-node :tree-data="departmentTree" />

  </div>
</template>

<style lang="less" scoped>
.department-wrapper {
  height: 100%;
  padding: var(--spacing-large);
  background-color: var(--color-background);
}
</style>
