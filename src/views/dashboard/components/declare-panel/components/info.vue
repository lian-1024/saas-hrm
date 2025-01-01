<script setup lang="ts">
import type { DashboardDeclareVO } from '@/types/api/dashboard';
import { Flex, TypographyText } from 'ant-design-vue';
import { computed } from 'vue';
import { CountTo } from 'vue3-count-to';
defineOptions({
  name: 'DeclareInfo'
})

const props = defineProps<{
  info: Omit<DashboardDeclareVO, 'xAxis' | 'yAxis'>
}>()

const declareTotalList = computed(() => {
  console.log(props.info)
  return [
    { label: '已申报人数', value: props.info.declaredTotal },
    { label: '申报中人数', value: props.info.declaringTotal },
    { label: '待申报人数', value: props.info.toDeclareTotal },
  ]
})
</script>

<template>
  <Flex class="declare" vertical>
    <Flex vertical>
      <TypographyText type="secondary">
        申报人数
      </TypographyText>
      <CountTo class="declare-total" :start-val="0" :end-val="info.declarationTotal" :duration="3000" />
    </Flex>

    <Flex class="declare-info" wrap="wrap" justify="space-between">
      <Flex vertical v-for="item in declareTotalList" :key="item.label" class="declare-info-item">
        <TypographyText type="secondary">{{ item.label }}</TypographyText>
        <CountTo class="declare-info-item-total" :start-val="0" :end-val="item.value" :duration="3000" />
      </Flex>
    </Flex>
  </Flex>
</template>

<style scoped lang="less">
.declare {
  width: 200px;

  &-total {
    margin: 0;
    font-size: var(--font-size-xlarge);
    padding-bottom: var(--spacing-middle);
    color: var(--color-primary);


  }


  &-info {
    padding: var(--spacing-middle);
    background-color: var(--color-background-secondary);
    width: 200px;

    &-item {
      min-width: 36%;

      &-total {
        font-size: var(--font-size-xlarge);
      }
    }
  }
}
</style>
