<script setup lang="ts">
import type { DashboardDeclareVO } from '@/modules/dashboard/types';
import { QEChartUI } from '@/shared/components/base/echarts-ui';
import { useECharts, type EChartUIType } from '@/shared/composables/use-echarts/use-echarts';
import { useLocale } from '@/shared/composables/use-locale';
import { ref, watch } from 'vue';
defineOptions({
  name: "DeclareChart"
})

const props = defineProps<{
  chartsData: Pick<DashboardDeclareVO, 'xAxis' | 'yAxis'>
}>()

const chartRef = ref<EChartUIType>()

const { renderECharts } = useECharts(chartRef!, { theme: "light" })

const { currentLocale } = useLocale()

const defaultXAxis = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
]


const renderChartOptions = (xAxis: string[], yAxis: number[]) => ({
  grid: {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    containLabel: true
  },
  xAxis: {
    type: 'category' as const,
    boundaryGap: false,
    data: xAxis,
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      color: '#999',
      fontSize: 12
    }
  },
  yAxis: {
    type: 'value' as const,
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
      data: yAxis,
      type: 'line' as const,
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
})
const renderChart = async ({ xAxis, yAxis }: Pick<DashboardDeclareVO, 'xAxis' | 'yAxis'>) => {
  const xAxisData = currentLocale.value == 'zh-CN' ? xAxis : defaultXAxis
  await renderECharts(renderChartOptions(xAxisData, yAxis));
}

watch(() => props.chartsData, (newValue) => {
  renderChart(newValue)
}, { immediate: true })

watch(() => currentLocale.value, (newValue) => {
  console.log(newValue)
  renderChart(props.chartsData)
}, { immediate: true })
</script>

<template>
  <div class="flex-1">
    <QEChartUI height="100%" width="100%" ref="chartRef" />
  </div>
</template>
