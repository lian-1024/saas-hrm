<script setup lang="ts">
import { getUrlPath } from '@/utils/url';
import { UserOutlined } from '@ant-design/icons-vue';
import { Avatar, type AvatarProps } from 'ant-design-vue';
import { computed, h } from 'vue';
defineOptions({
  name: "QAvatar"
})


interface QAvatarProps extends AvatarProps {

}

const props = withDefaults(defineProps<QAvatarProps & { isOther?: boolean }>(), {
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