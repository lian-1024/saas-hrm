<script setup lang="ts">
import { Flex, TypographyText, type FlexProps } from 'ant-design-vue';
defineOptions({
  name: "QPanel"
})

withDefaults(
  defineProps<{
    title?: string,
    vertical?: boolean,
    gap?: FlexProps['gap']
  }>(),
  {
    title: "",
    vertical: true,
    gap: "middle"
  }
)
</script>

<template>
  <Flex class="panel" :vertical="vertical" :gap="gap">
    <TypographyText class="panel-title">{{ title }}</TypographyText>
    <slot />
  </Flex>
</template>

<style lang="less" scoped>
.panel {
  padding: var(--spacing-large);
  background: var(--color-background);

  &-title {
    font-size: var(--font-size-middle);
    font-weight: var(--font-weight-light);
  }
}
</style>
