<script setup lang="ts">
import type { DashboardDeclareVO } from '@modules/dashboard/types'
import { Flex } from 'ant-design-vue'
import { computed } from 'vue'
import QPanel from '../panel.vue'
import DeclareChart from './components/chart.vue'
import DeclareInfo from './components/info.vue'
defineOptions({
  name: 'DeclarePanel',
})

const props = defineProps<{
  info: DashboardDeclareVO
}>()

const info = computed<Omit<DashboardDeclareVO, 'xAxis' | 'yAxis'>>(() => {
  const { xAxis, yAxis, ...rest } = props.info
  return rest
})

const chartsData = computed<Pick<DashboardDeclareVO, 'xAxis' | 'yAxis'>>(() => {
  const { xAxis, yAxis } = props.info
  return {
    xAxis,
    yAxis,
  }
})
</script>

<template>
  <QPanel :title="$t(`dashboard.declare.${info.categoryType}`)">
    <Flex gap="middle">
      <DeclareInfo :info="info" />
      <DeclareChart :charts-data="chartsData" />
    </Flex>
  </QPanel>
</template>

<style scoped lang="less"></style>
