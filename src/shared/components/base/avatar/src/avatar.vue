<script setup lang="ts">
import { getUrlPath } from '@/shared/utils/url';
import { UserOutlined } from '@ant-design/icons-vue';
import { Avatar } from 'ant-design-vue';
import { computed, h } from 'vue';
import type { QAvatarProps } from './types';
defineOptions({
  name: "QAvatar"
})



const props = withDefaults(defineProps<QAvatarProps>(), {
  icon: h(UserOutlined),
  alt: 'avatar',
  isOther: false
})

const computedProps = computed(() => {
  const { src, isOther, ...rest } = props
  if (isOther) {
    return {
      src: `/images/${getUrlPath(src ?? '')}`,
      ...rest
    }
  }

  return {
    src,
    ...rest
  }
})
</script>

<template>
  <Avatar v-bind="computedProps" />
</template>

<style scoped lang="scss"></style>