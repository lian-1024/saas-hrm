<script lang="ts" setup>
import { convertCSSUnit } from '@/shared/utils/convert/css-unit'
import { computed, type CSSProperties } from 'vue'
import type { EChartUIProps } from './types'

defineOptions({
  name: 'QEChartUI',
})

const props = withDefaults(defineProps<EChartUIProps>(), {
  width: '100%',
  height: '100%',
})

const echartSize = computed<CSSProperties>(() => {
  return {
    width: convertCSSUnit(props.width),
    height: convertCSSUnit(props.height),
  }
})
</script>

<template>
  <div class="echart-ui" :style="echartSize"></div>
</template>

<style lang="less" scoped></style>
