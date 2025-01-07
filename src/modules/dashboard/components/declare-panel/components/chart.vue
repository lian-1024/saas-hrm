<script setup lang="ts">
import type { DashboardDeclareVO } from '@/modules/dashboard/types';
import { QEChartUI } from '@/shared/components/base/echarts-ui';
import { useECharts, type EChartUIType } from '@/shared/composables/use-echarts/use-echarts';
import { ref, watch } from 'vue';
defineOptions({
  name: "DeclareChart"
})

const props = defineProps<{
  chartsData: Pick<DashboardDeclareVO, 'xAxis' | 'yAxis'>
}>()

const chartRef = ref<EChartUIType>()

const { renderECharts } = useECharts(chartRef!, { theme: "light" })


const renderChart = async (chartsData: Pick<DashboardDeclareVO, 'xAxis' | 'yAxis'>) => {
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
      data: chartsData.xAxis,
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
        data: chartsData.yAxis,
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
}

watch(() => props.chartsData, (newValue) => {
  renderChart(newValue)
}, { immediate: true })
</script>

<template>
  <div class="flex-1">
    <QEChartUI height="100%" width="100%" ref="chartRef" />
  </div>
</template>
