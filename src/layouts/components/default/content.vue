<script setup lang="ts">
import { LayoutContent } from 'ant-design-vue';
defineOptions({
  name: "QLayoutContent"
})
</script>

<template>
 <LayoutContent class="layout-content"
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <!-- router view -->
        <RouterView />
      </LayoutContent>
</template>

<style scoped lang="scss">
</style>