<script setup lang="ts">
import { QAvatar } from '@components/base/avatar'
import { Flex, TypographyText } from 'ant-design-vue'
import { ref } from 'vue'

defineOptions({
  name: 'DashboardQuickItem',
})

interface QuickItemProps {
  iconUrl?: string
  name?: string
  path?: string
}

const props = defineProps<QuickItemProps>()

const avatarSize = ref(42)
</script>

<template>
  <RouterLink :to="props.path ?? '/'" style="padding-top: var(--spacing-middle)">
    <Flex vertical align="center" gap="small">
      <QAvatar shape="square" :size="avatarSize" :src="props.iconUrl" />
      <TypographyText type="secondary">{{ props.name }}</TypographyText>
    </Flex>
  </RouterLink>
</template>
