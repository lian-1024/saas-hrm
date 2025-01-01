<script setup lang="ts">
import { Calendar } from '@/components/base/Calendar'
import { useRequest } from '@/composables/use-request'
import DashboardService from '@/services/dashboard.service'
import type { HomeDataVO } from '@/types/api/'
import type { DashboardDeclareVO } from '@/types/api/dashboard'
import type { FlexProps } from 'ant-design-vue'
import { Flex, message } from 'ant-design-vue'
import { computed, ref } from 'vue'
import DashboardDeclarePanel from './components/declare-panel/index.vue'
import DashboardHelpLink from './components/help-link/index.vue'
import DashboardInfo from './components/info/index.vue'
import DashboardNotification from './components/notification/index.vue'
import DashboardQuick from './components/quick/index.vue'
import type { DashboardInfoItem } from './types'
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


const dashboardData = ref<HomeDataVO>()

const dashboardInfoList = computed(() => {
  return transformDashboardInfoList(dashboardData.value)
})

// 转换数据
const transformDashboardInfoList = (data?: HomeDataVO): DashboardInfoItem[] => {
  return [
    {
      title: "组织总人数",
      total: data?.employeeTotal ?? 0
    },
    {
      title: "正式员工",
      total: data?.regularEmployeeTotal ?? 0
    },
    {
      title: "合同待签署",
      total: data?.contractSignTotal ?? 0
    },
    {
      title: "待入职",
      total: data?.toBeEmployed ?? 0
    },
    {
      title: "本月待转正",
      total: data?.toBeConfirmed ?? 0
    },
    {
      title: "接口总访问量",
      total: data?.interfaceAccessTotal ?? 0
    }
  ]
}

const defaultProvidentFund = {
  categoryType: "providentFund",
  category: "公积金申报数据",
  declarationTotal: 0,
  toDeclareTotal: 0,
  declaringTotal: 0,
  declaredTotal: 0,
  xAxis: [],
  yAxis: []
}

const defaultSocialSecurity = {
  category: "社保申报数据",
  categoryType: "socialInsurance",
  declarationTotal: 0,
  toDeclareTotal: 0,
  declaringTotal: 0,
  declaredTotal: 0,
  xAxis: [],
  yAxis: []
}

const providentFund = ref<DashboardDeclareVO>(defaultProvidentFund)
const socialSecurity = ref<DashboardDeclareVO>(defaultSocialSecurity)


const { loading } = useRequest<HomeDataVO>(DashboardService.getDashboardData, {
  onSuccess: (res) => {
    dashboardData.value = res.data
    providentFund.value = res.data.providentFund
    socialSecurity.value = res.data.socialInsurance
  },
  onError: (error) => {
    console.log("error:", error);

    message.error("获取首页数据失败")
  }
})




</script>

<template>
  <Flex v-bind="WrapperAttrs">
    <Flex v-bind="LeftPanelAttrs" class="dashboard-left">
      <DashboardInfo :dashboard-info-list="dashboardInfoList" />
      <DashboardQuick />
      <DashboardDeclarePanel :info="providentFund" />
      <DashboardDeclarePanel :info="socialSecurity" />
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
