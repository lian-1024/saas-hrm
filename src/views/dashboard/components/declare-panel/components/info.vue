<script setup lang="ts">
import { Flex, TypographyText } from 'ant-design-vue';

defineOptions({
  name: 'DeclareInfo'
})


</script>

<template>
  <Flex class="declare" vertical>
    <Flex vertical>
      <TypographyText type="secondary">
        申报人数
      </TypographyText>
      <h1 class="declare-total">999</h1>
    </Flex>

    <Flex class="declare-info" wrap="wrap" justify="space-between">
      <Flex vertical v-for="item in 3" :key="item" class="declare-info-item">
        <TypographyText type="secondary">统计人数</TypographyText>
        <TypographyText :level="4" class="declare-info-item-total">999</TypographyText>
      </Flex>
    </Flex>
  </Flex>
</template>

<style scoped lang="less">
.declare {
  &-total {
    margin: 0;
    font-size: var(--font-size-xlarge);
    padding-bottom: var(--spacing-middle);
    color: var(--color-primary);
  }


  &-info {
    padding: var(--spacing-middle);
    background-color: var(--color-background-secondary);
    width: 240px;

    &-item {

      &-total {
        font-size: var(--font-size-xlarge);
      }
    }
  }
}
</style>
