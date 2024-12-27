<script setup lang="ts">
import { QAvatar } from '@/components/base/Avatar';
import { Flex, TypographyText } from 'ant-design-vue';
import { ref } from 'vue';

defineOptions({
  name: "DashboardQuickItem"
})

interface QuickItemProps {
  iconUrl?: string
  name?: string,
  path?: string
}

const props = defineProps<QuickItemProps>()

const avatarSize = ref(52)
</script>

<template>
  <RouterLink :to="props.path ?? '/'">
    <Flex vertical align="center" gap="small">
      <QAvatar shape="square" :size="avatarSize" :src="props.iconUrl" />
      <TypographyText type="secondary">{{ props.name }}</TypographyText>
    </Flex>
  </RouterLink>
</template>

<style scoped lang="scss"></style>