<script setup lang="ts">
import { Flex, TypographyText, type FlexProps } from 'ant-design-vue';
defineOptions({
  name: "QPanel"
})

withDefaults(
  defineProps<{
    title: string,
    vertical?: boolean,
    gap?: FlexProps['gap']
  }>(),
  {
    vertical: true,
    gap: "large"
  }
)




</script>

<template>
  <Flex class="panel" :vertical="vertical" :gap="gap">
    <TypographyText>{{ title }}</TypographyText>
    <slot />
  </Flex>
</template>

<style lang="less" scoped>
.panel {
  padding: var(--spacing-large);
  background: var(--color-background);
}
</style>
