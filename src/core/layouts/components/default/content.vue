<script setup lang="ts">
import { LayoutContent } from 'ant-design-vue';
defineOptions({
  name: "QLayoutContent"
})


</script>

<template>
  <LayoutContent class="layout-content">
    <!-- router view -->
    <RouterView v-slot="{ Component, route }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </LayoutContent>
</template>

<style scoped lang="scss">
.layout-content {
  position: relative;
  padding: 24px 16px;
  min-height: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
