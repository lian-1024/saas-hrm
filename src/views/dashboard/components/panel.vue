<script setup lang="ts">
import { useThemeToken } from '@/composition/useThemeToken';
import { toPX } from '@/utils/topx';
import { Flex, TypographyText, type FlexProps } from 'ant-design-vue';
import type { CSSProperties } from 'ant-design-vue/es/_util/cssinjs/hooks/useStyleRegister';
import { computed, reactive } from 'vue';
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

const { token } = reactive(useThemeToken())

const WrapperStyles = computed((): CSSProperties => ({
  padding: toPX(token.paddingLG),
  backgroundColor: token.colorBgBase
}))

</script>

<template>
  <Flex :style="WrapperStyles" :vertical="vertical" :gap="gap">
    <TypographyText>{{ title }}</TypographyText>
    <slot />
  </Flex>
</template>
