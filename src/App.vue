<script setup lang="ts">
import { useTheme } from '@/shared/composables/use-theme';
import { App, ConfigProvider } from 'ant-design-vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';

const { themeConfig } = useTheme()
</script>

<template>
  <ConfigProvider :theme="themeConfig" :locale="zhCN">
    <App class="h-full">
      <RouterView />
    </App>
  </ConfigProvider>
</template>
: