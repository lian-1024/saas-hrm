<script setup lang="ts">
import { useAntdToken } from '@/shared/composables/use-antd-token';
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

const { token } = useAntdToken()
</script>

<template>
  <Flex class="panel" :vertical="vertical" :gap="gap">
    <TypographyText class="panel-title">{{ title }}</TypographyText>
    <slot />
  </Flex>
</template>

<style lang="less" scoped>
.panel {
  padding: v-bind("`${token.paddingLG}px`");
  background: v-bind("token.colorBgContainer");
  border-radius: v-bind("`${token.borderRadiusLG}px`");
  border: 1px solid v-bind("token.colorBorderSecondary");
  transition: border-color 0.3s;

  &:hover {
    border-color: v-bind("token.colorPrimary");
  }

  &-title {
    font-size: v-bind("`${token.fontSizeLG}px`");
  }
}
</style>
