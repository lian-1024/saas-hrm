<script setup lang="ts">
import QEChartUI from '@/components/base/EChartsUI/index.vue'
import { useECharts, type EChartUIType } from '@/composables/use-echarts'
import { onMounted, ref } from 'vue'

defineOptions({
  name: "DeclareChart"
})

const chartRef = ref<EChartUIType | null>(null)

const { renderECharts } = useECharts(chartRef!, { theme: "light" })


onMounted(async () => {
  await renderECharts({
    grid: {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10,
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: '#999',
        fontSize: 12
      }
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLabel: {
        color: '#999',
        fontSize: 12
      }
    },
    series: [
      {
        data: [50, 150, 180, 330, 200, 160, 400],
        type: 'line',
        smooth: true,
        areaStyle: {
          color: '#04c9be',
          opacity: 0.2
        },
        lineStyle: {
          color: '#04c9be'
        },
        symbol: 'none'
      }
    ]
  });
})
</script>

<template>
  <div class="flex-1">
    <QEChartUI height="100%" width="100%" ref="chartRef" />
  </div>
</template>

<style scoped lang="scss"></style>
