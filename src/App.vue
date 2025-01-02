<script setup lang="ts">
import { App, ConfigProvider } from 'ant-design-vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';

</script>

<template>
  <!-- 国际化 -->
  <ConfigProvider :theme="{
    inherit: false,

  }" :locale="zhCN">
    <App class="h-full">
      <RouterView />
    </App>
  </ConfigProvider>
</template>
