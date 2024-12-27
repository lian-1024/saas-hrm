<script lang="ts" setup>
import { useThemeToken } from '@/composition/useThemeToken';
import { toPX } from '@/utils/topx';
import type { CSSProperties } from 'vue';
import { computed, reactive, ref } from 'vue';

defineOptions({
  name: "DepartmentPage"
})

const departmentTree = ref([])

// const mapToken = defaultAlgorithm(defaultSeed)
const { token } = reactive(useThemeToken())


const WrapperStyles = computed((): CSSProperties => ({
  padding: toPX(token.paddingLG),
  backgroundColor: token.colorBgBase
}))

</script>


<template>
  <div :style="WrapperStyles">
    <a-tree class="draggable-tree" draggable block-node :tree-data="departmentTree" />
  </div>
</template>

<style lang="scss" scoped>
.department-wrapper {
  padding: v-bind(token);
}
</style>
