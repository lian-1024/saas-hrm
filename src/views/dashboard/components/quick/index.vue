<script setup lang="ts">
import { Flex, type FlexProps } from 'ant-design-vue';
import QPanel from '../panel.vue';
import DashboardQuickItem from './components/quick-item.vue';
defineOptions({
  name: 'DashboardQuick'
})

const WrapperAttrs: FlexProps = {
  vertical: true,
  gap: "small"
}

// 定义快捷入口数据
const quickItems = [
  {
    iconUrl: new URL('@/assets/common/approval.png', import.meta.url).href,
    name: '假期审批'
  },
  {
    iconUrl: new URL('@/assets/common/social.png', import.meta.url).href,
    name: '考勤打卡'
  },
  {
    iconUrl: new URL('@/assets/common/role.png', import.meta.url).href,
    name: '角色管理'
  },
  {
    iconUrl: new URL('@/assets/common/salary.png', import.meta.url).href,
    name: '薪资设置'
  },
  {
    iconUrl: new URL('@/assets/common/bpm.png', import.meta.url).href,
    name: '添加权限'
  }
]

</script>

<template>

  <QPanel title="快捷入口">
    <Flex gap="large" justify="space-between">
      <DashboardQuickItem v-for="item in quickItems" :key="item.name" :icon-url="item.iconUrl" :name="item.name" />

    </Flex>
  </QPanel>
</template>

<style scoped lang="less">
.dashboard {
  &-quick {
    padding: var(--spacing-large);
    background-color: var(--color-background);
  }
}
</style>