<script setup lang="ts">
import { useLocale } from '@composables/use-locale'
import { useTheme } from '@composables/use-theme'
import { App, ConfigProvider } from 'ant-design-vue'
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
