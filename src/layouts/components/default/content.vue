<script setup lang="ts">
import { LayoutContent } from 'ant-design-vue';
import type { CSSProperties } from 'vue';
defineOptions({
  name: "QLayoutContent"
})

const WrapperStyles: CSSProperties = {
  margin: "24px 16px",
  minHeight: '280px'
}
</script>

<template>
  <LayoutContent :style="WrapperStyles">
    <!-- router view -->
    <RouterView />
  </LayoutContent>
</template>

<style scoped lang="scss"></style>