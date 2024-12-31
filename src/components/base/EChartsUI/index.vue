<script lang="ts" setup>
import { toCSSUnit } from '@/utils/unit';
import { computed, type CSSProperties } from 'vue';


defineOptions({
  name: "QEChartUI"
})

interface EChartUIProps {
  height: number | string
  width: number | string
}

const props = withDefaults(defineProps<EChartUIProps>(), {
  width: "100%",
  height: "100%"
})

const echartSize = computed<CSSProperties>(() => {
  return {
    width: toCSSUnit(props.width),
    height: toCSSUnit(props.height)
  }
})


</script>

<template>
  <div class="echart-ui" :style="echartSize">

  </div>
</template>

<style lang="less" scoped></style>
