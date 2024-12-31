<script setup lang="ts">
import { Calendar } from '@/components/base/Calendar'
import { useRequest } from '@/composables/use-request'
import HomeService from '@/services/home.service'
import type { Response } from '@/types/api'
import type { FlexProps } from 'ant-design-vue'
import { Flex } from 'ant-design-vue'
import DashboardDeclarePanel from './components/declare-panel/index.vue'
import DashboardHelpLink from './components/help-link/index.vue'
import DashboardInfo from './components/info/index.vue'
import DashboardNotification from './components/notification/index.vue'
import DashboardQuick from './components/quick/index.vue'
defineOptions({
  name: 'DashboardPage',
})

const WrapperAttrs: FlexProps = {
  gap: 'middle',
}

const LeftPanelAttrs: FlexProps = {
  gap: 'middle',
  vertical: true,
}

const { data, loading, error, run } = useRequest<Response<string>>(HomeService.getHomeData, {
  onSuccess: (res) => {
    console.log(res)
  }
})
</script>

<template>
  <Flex v-bind="WrapperAttrs">
    <Flex v-bind="LeftPanelAttrs" class="dashboard-left">
      <DashboardInfo />
      <DashboardQuick />
      <DashboardDeclarePanel />
      <DashboardDeclarePanel />
    </Flex>
    <Flex vertical gap="middle" class="dashboard-right">
      <Flex gap="middle">
        <DashboardHelpLink class="dashboard-help-link" />
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
  &-left {
    min-width: 600px;
    flex: 1;
  }

  &-right {
    max-width: 600px;
  }

  &-help-link {
    min-width: 280px;
  }

  &-calendar {
    min-width: 280px;
  }
}
</style>
