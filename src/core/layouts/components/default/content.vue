<script setup lang="ts">
import { LayoutContent } from 'ant-design-vue';
defineOptions({
  name: "QLayoutContent"
})


</script>

<template>
  <LayoutContent class="layout-content">
    <!-- router view -->
    <Transition name="fade" mode="out-in">
      <RouterView v-slot="{ Component }" :key="$route.path">
        <component :is="Component" />
      </RouterView>
    </Transition>
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
