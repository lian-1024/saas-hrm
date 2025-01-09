<script setup lang="ts">
import { useLocale } from '@/shared/composables/use-locale/index';
import { useTheme } from '@/shared/composables/use-theme';
import { App, ConfigProvider } from 'ant-design-vue';
const { themeConfig } = useTheme()
const { antdLocale } = useLocale()
</script>

<template>
  <ConfigProvider :theme="themeConfig" :locale="antdLocale">
    <App class="h-full">
      <RouterView />
    </App>
  </ConfigProvider>
</template>
: