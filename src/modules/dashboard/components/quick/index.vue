<script setup lang="ts">
import { Flex, type FlexProps } from 'ant-design-vue'
import QPanel from '../panel.vue'
import DashboardQuickItem from './components/quick-item.vue'
defineOptions({
  name: 'DashboardQuick',
})

const WrapperAttrs: FlexProps = {
  vertical: true,
  gap: 'small',
}

// 定义快捷入口数据
const quickItems = [
  {
    iconUrl: new URL('@assets/common/approval.png', import.meta.url).href,
    name: 'leaveApproval',
  },
  {
    iconUrl: new URL('@assets/common/social.png', import.meta.url).href,
    name: 'attendance',
  },
  {
    iconUrl: new URL('@assets/common/role.png', import.meta.url).href,
    name: 'roleManagement',
  },
  {
    iconUrl: new URL('@assets/common/salary.png', import.meta.url).href,
    name: 'salarySettings',
  },
  {
    iconUrl: new URL('@assets/common/bpm.png', import.meta.url).href,
    name: 'addPermission',
  },
]
</script>

<template>
  <QPanel :title="$t('dashboard.quick.title')">
    <Flex gap="large" justify="space-between">
      <DashboardQuickItem
        v-for="item in quickItems"
        :key="item.name"
        :icon-url="item.iconUrl"
        :name="$t(`dashboard.quick.${item.name}`)"
      />
    </Flex>
  </QPanel>
</template>
