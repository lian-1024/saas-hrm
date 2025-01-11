<script setup lang="ts">
import DashboardService from '@/modules/dashboard/services/dashboard.service'
import type { DashboardDeclareVO, DashboardNoticeVO, HomeDataVO } from '@/modules/dashboard/types'
import { QCalendar } from '@/shared/components/base/calendar'
import { useAntdToken } from '@/shared/composables/use-antd-token'
import { useRequest } from '@/shared/composables/use-request/use-request'
import type { FlexProps } from 'ant-design-vue'
import { Flex } from 'ant-design-vue'
import { onMounted, shallowReactive } from 'vue'
import DashboardDeclarePanel from '../components/declare-panel/index.vue'
import DashboardHelpLink from '../components/help-link/index.vue'
import DashboardInfo from '../components/info/index.vue'
import DashboardNotification from '../components/notification/index.vue'
import DashboardQuick from '../components/quick/index.vue'
import type { DashboardInfoItem } from '../types/index'
import { convertDashboardInfoList } from '../utils/convert'
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

const dashboardInfoList = shallowReactive<DashboardInfoItem[]>([])

const defaultProvidentFund = {
  categoryType: 'providentFund',
  category: '公积金申报数据',
  declarationTotal: 0,
  toDeclareTotal: 0,
  declaringTotal: 0,
  declaredTotal: 0,
  xAxis: [],
  yAxis: [],
}

const defaultSocialSecurity = {
  category: '社保申报数据',
  categoryType: 'socialInsurance',
  declarationTotal: 0,
  toDeclareTotal: 0,
  declaringTotal: 0,
  declaredTotal: 0,
  xAxis: [],
  yAxis: [],
}

const providentFund = shallowReactive<DashboardDeclareVO>(defaultProvidentFund)
const socialSecurity = shallowReactive<DashboardDeclareVO>(defaultSocialSecurity)

const noticeList = shallowReactive<DashboardNoticeVO[]>([])

const { run: getDashboardData, loading: getDashboardDataLoading } = useRequest<HomeDataVO>(
  DashboardService.getDashboardData,
  {
    manual: true,
    onSuccess: ({ data }) => {
      Object.assign(dashboardInfoList, convertDashboardInfoList(data))
      Object.assign(providentFund, data.providentFund)
      Object.assign(socialSecurity, data.socialInsurance)
    },
  },
)

const { run: getNotice, loading: getNoticeLoading } = useRequest(
  DashboardService.getDashboardNotice,
  {
    manual: true,
    onSuccess: ({ data }) => {
      Object.assign(noticeList, data)
    },
  },
)

onMounted(async () => {
  await Promise.all([getDashboardData(), getNotice()])
})

const { token } = useAntdToken()
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
          <QCalendar class="dashboard-calendar-inner" />
        </div>
      </Flex>
      <DashboardNotification :loading="getNoticeLoading" :notice-list="noticeList" />
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
    border-radius: v-bind('`${token.borderRadiusLG}px`');
    border: 1px solid v-bind('token.colorBorderSecondary');
    transition: border-color 0.3s;

    &:hover {
      border-color: v-bind('token.colorPrimary');
    }

    &-inner {
      height: 100%;
      padding-inline: v-bind('`${token.paddingXXS}px`');
      padding-block: v-bind('`${token.paddingLG}px`');
    }
  }
}
</style>
