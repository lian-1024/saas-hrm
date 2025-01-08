<script setup lang="ts">
import { UserOutlined } from '@ant-design/icons-vue';
import { Avatar } from 'ant-design-vue';
import { h } from 'vue';
import type { QAvatarProps } from './types';
defineOptions({
  name: "QAvatar"
})



const props = withDefaults(defineProps<QAvatarProps>(), {
  icon: h(UserOutlined),
  alt: 'avatar',
})


</script>

<template>
  <Avatar v-bind="props" />
</template>

<style scoped lang="scss"></style>