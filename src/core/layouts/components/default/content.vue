<script setup lang="ts">
import { useAntdToken } from '@/shared/composables/use-antd-token';
import { LayoutContent } from 'ant-design-vue';
defineOptions({
  name: "QLayoutContent"
})

const { token } = useAntdToken()
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
  background-color: v-bind('token.colorBgElevated');
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
