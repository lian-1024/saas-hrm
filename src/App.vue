<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';

</script>

<template>
  <!-- 国际化 -->
  <ConfigProvider :theme="{
    inherit: false,

  }" :locale="zhCN">
    <RouterView />
  </ConfigProvider>
</template>
