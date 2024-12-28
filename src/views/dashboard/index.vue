<script setup lang="ts">
import { Calendar } from '@/components/base/Calendar';
import type { FlexProps } from 'ant-design-vue';
import { Flex } from 'ant-design-vue';
import DashboardHelpLink from './components/help-link/index.vue';
import DashboardInfo from './components/info/index.vue';
import DashboardNotification from './components/notification/index.vue';
import DashboardQuick from './components/quick/index.vue';
import DashboardSocialSecurity from './components/social-security/index.vue';
defineOptions({
  name: "DashboardPage"
})


const WrapperAttrs: FlexProps = {
  gap: "middle"
}

const LeftPanelAttrs: FlexProps = {
  gap: "middle",
  vertical: true
}


</script>

<template>
  <Flex v-bind="WrapperAttrs">
    <Flex v-bind="LeftPanelAttrs" class="dashboard-left">
      <DashboardInfo />
      <DashboardQuick />
      <DashboardSocialSecurity />
    </Flex>
    <Flex vertical gap="middle">
      <Flex gap="middle">
        <DashboardHelpLink />
        <div class="dashboard-calendar">
          <Calendar />
        </div>
      </Flex>
      <DashboardNotification />
    </Flex>
  </Flex>
</template>

<style scoped lang="less">
.dashboard {
  &-calendar {
    width: 500px;
  }
}
</style>