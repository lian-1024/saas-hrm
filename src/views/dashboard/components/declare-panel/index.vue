<script setup lang="ts">
import type { DashboardDeclareVO } from '@/types/api/dashboard';
import { Flex } from 'ant-design-vue';
import { computed } from 'vue';
import QPanel from '../panel.vue';
import DeclareChart from './components/chart.vue';
import DeclareInfo from './components/info.vue';
defineOptions({
  name: "DeclarePanel"
})

const props = defineProps<{
  info: DashboardDeclareVO
}>()


const info = computed<Omit<DashboardDeclareVO, 'xAxis' | 'yAxis'>>(() => {
  return {
    category: props.info.category,
    categoryType: props.info.categoryType,
    declaringTotal: props.info.declaringTotal,
    declarationTotal: props.info.declarationTotal,
    declaredTotal: props.info.declaredTotal,
    toDeclareTotal: props.info.toDeclareTotal,

  }
})

const chartsData = computed<Pick<DashboardDeclareVO, 'xAxis' | 'yAxis'>>(() => {
  return {
    xAxis: props.info.xAxis,
    yAxis: props.info.yAxis
  }
})

</script>

<template>
  <QPanel :title="info.category">
    <Flex gap="middle">
      <DeclareInfo :info="info" />
      <DeclareChart :charts-data="chartsData" />
    </Flex>
  </QPanel>
</template>

<style scoped lang="scss"></style>
