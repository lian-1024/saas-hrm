<script lang="ts" setup>
import { useTheme } from '@/shared/composables/use-theme';
import { Switch } from 'ant-design-vue';

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <Switch :checked="isDark" @change="() => toggleTheme()" checked-children="🌙" un-checked-children="☀️" />
</template>

<style lang="less" scoped></style>