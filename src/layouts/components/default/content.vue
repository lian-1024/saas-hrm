<script setup lang="ts">
import { LayoutContent } from 'ant-design-vue';
defineOptions({
  name: "QLayoutContent"
})


</script>

<template>
  <LayoutContent class="layout-content">
    <!-- router view -->
    <RouterView />
  </LayoutContent>
</template>

<style scoped lang="scss">
.layout-content {
  padding: 24px 16px;
  min-height: auto;
}
</style>
