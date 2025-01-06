<script setup lang="ts">
import DashboardService from '@/modules/dashboard/services/dashboard.service';
import type { DashboardDeclareVO, DashboardNoticeVO, HomeDataVO } from '@/modules/dashboard/types';
import { QCalendar } from '@/shared/components/base/calendar';
import { QSpin } from '@/shared/components/base/spin';
import { useRequest } from '@/shared/composables/use-request/use-request';
import type { FlexProps } from 'ant-design-vue';
import { Flex, message, Spin } from 'ant-design-vue';
import { ref } from 'vue';
import DashboardDeclarePanel from '../components/declare-panel/index.vue';
import DashboardHelpLink from '../components/help-link/index.vue';
import DashboardInfo from '../components/info/index.vue';
import DashboardNotification from '../components/notification/index.vue';
import DashboardQuick from '../components/quick/index.vue';
import type { DashboardInfoItem } from '../types/index';
import { convertDashboardInfoList } from '../utils/convert';
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


const dashboardInfoList = ref<DashboardInfoItem[]>([])




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

const noticeList = ref<DashboardNoticeVO[]>([])

const { loading: getDashboardDataLoading } = useRequest<HomeDataVO>(DashboardService.getDashboardData, {
  onSuccess: ({ data }) => {
    console.log("dashboardData", data)
    dashboardInfoList.value = convertDashboardInfoList(data)
    providentFund.value = data.providentFund
    socialSecurity.value = data.socialInsurance
  },
  onError: (error) => {
    message.error("获取首页数据失败")
  }
})

const { loading: getNoticeLoading } = useRequest(DashboardService.getDashboardNotice, {
  onSuccess: (res) => {
    noticeList.value = res.data
  },
  onError: (error) => {
    message.error("获取通知公告失败")
  }
})





</script>

<template>
  <Flex v-bind="WrapperAttrs">
    <QSpin :spinning="getDashboardDataLoading" wrapper-class-name="flex-1">
      <Flex v-bind="LeftPanelAttrs" class="dashboard-left">
        <DashboardInfo :dashboard-info-list="dashboardInfoList" />
        <DashboardQuick />
        <DashboardDeclarePanel :info="providentFund" />
        <DashboardDeclarePanel :info="socialSecurity" />
      </Flex>
    </QSpin>
    <Flex vertical gap="middle" class="dashboard-right">
      <Flex gap="middle">
        <DashboardHelpLink class="dashboard-help-link" />
        <div class="dashboard-calendar">
          <QCalendar class="dashboard-calendar-inner" />
        </div>
      </Flex>
      <Spin :spinning="getNoticeLoading">
        <DashboardNotification :notice-list="noticeList" />
      </Spin>
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
    background-color: var(--color-background);

    &-inner {
      height: 100%;
      padding-inline: var(--spacing-small);
      padding-block: var(--spacing-large);
    }
  }
}
</style>
