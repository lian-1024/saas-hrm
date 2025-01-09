<script setup lang="ts">
import type { DashboardDeclareVO } from '@/modules/dashboard/types';
import { QSkeleton } from '@/shared/components/base/skeleton';
import { useAntdToken } from '@/shared/composables/use-antd-token';
import { Flex, TypographyText } from 'ant-design-vue';
import { computed } from 'vue';
import { CountTo } from 'vue3-count-to';
defineOptions({
  name: 'DeclareInfo'
})

const { token } = useAntdToken()

const props = defineProps<{
  info: Omit<DashboardDeclareVO, 'xAxis' | 'yAxis'>
}>()

const declareTotalList = computed(() => {
  return [
    { label: '已申报人数', value: props.info.declaredTotal || 0 },
    { label: '申报中人数', value: props.info.declaringTotal || 0 },
    { label: '待申报人数', value: props.info.toDeclareTotal || 0 },
  ]
})
</script>

<template>
  <Flex class="declare cursor-pointer" vertical>
    <Flex vertical>


      <QSkeleton :loading="!info.declarationTotal" active :paragraph="{
        rows: 1,
      }">
        <TypographyText type="secondary">
          申报人数
        </TypographyText>
        <CountTo class="declare-total" :start-val="0" :end-val="info.declarationTotal" :duration="3000" />
      </QSkeleton>
    </Flex>

    <Flex class="declare-info" wrap="wrap" justify="space-between">

      <Flex vertical v-for="item in declareTotalList" :key="item.label" class="declare-info-item">
        <QSkeleton :loading="!info.declarationTotal" active block :paragraph="{
          rows: 1,
        }">
          <TypographyText type="secondary">{{ item.label }}</TypographyText>
          <CountTo class="declare-info-item-total" :start-val="0" :end-val="item.value" :duration="3000" />
        </QSkeleton>

      </Flex>
    </Flex>
  </Flex>
</template>

<style scoped lang="less">
.declare {
  width: 200px;

  &-total {
    margin: 0;
    font-size: v-bind("`${token.fontSizeHeading2}px`");
    padding-bottom: v-bind("`${token.padding}px`");
    color: v-bind("token.colorPrimary");


  }


  &-info {
    background-color: v-bind("token.colorBgContainer");
    width: 200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: v-bind("`${token.padding}px`");

    &-item {
      min-width: 36%;

      &-total {
        font-size: v-bind("`${token.fontSizeHeading2}px`");
      }
    }
  }
}
</style>
