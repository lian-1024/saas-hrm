<script setup lang="ts">
import { UserOutlined } from '@ant-design/icons-vue';
import { Avatar, type AvatarProps } from 'ant-design-vue';
import { h } from 'vue';
defineOptions({
  name: "QAvatar"
})

interface QAvatarProps extends AvatarProps {

}

const props = withDefaults(defineProps<QAvatarProps>(), {
  icon: h(UserOutlined),
  alt: 'avatar'
})



</script>

<template>
  <Avatar v-bind="props" />
</template>

<style scoped lang="scss"></style>