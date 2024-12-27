<script setup lang="ts">
import { Flex, type FlexProps } from 'ant-design-vue';
import DashboardQuickItem from './components/quick-item.vue';
import QPanel from '../panel.vue'
defineOptions({
  name: 'DashboardQuick'
})

const WrapperAttrs: FlexProps = {
  vertical: true,
  gap: "small"
}
</script>

<template>

  <QPanel title="快捷入口" >
    <Flex gap="large" justify="space-between">
      <DashboardQuickItem icon-url="/vite.svg" name="假期审批" />
      <DashboardQuickItem icon-url="/vite.svg" name="假期审批" />
      <DashboardQuickItem icon-url="/vite.svg" name="假期审批" />
      <DashboardQuickItem icon-url="/vite.svg" name="假期审批" />
    </Flex>
  </QPanel>
</template>

<style scoped lang="scss">
.dashboard {
  &-quick {
    padding: 24px;
    background-color: #fff;
  }
}
</style>