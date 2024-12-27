<script lang="ts" setup>
import { ref } from 'vue';

defineOptions({
  name: "DepartmentPage"
})

const departmentTree = ref([])

// const mapToken = defaultAlgorithm(defaultSeed)

</script>


<template>
  <div class="department-wrapper">
    <a-tree class="draggable-tree" draggable block-node :tree-data="departmentTree" />
  </div>
</template>

<style lang="less" scoped>
.department-wrapper {
  padding: var(--spacing-large);
  background-color: var(--color-background);
}
</style>
