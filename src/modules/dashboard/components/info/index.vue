<script setup lang="ts">
import { useUserStore } from '@/core/stores/modules/user';
import { QAvatar } from '@/shared/components/base/avatar';
import { QSkeleton } from '@/shared/components/base/skeleton';
import { useAntdToken } from '@/shared/composables/use-antd-token';
import { Divider, Flex, type FlexProps, Tag, TypographyText } from 'ant-design-vue';
import { onMounted } from 'vue';
import { CountTo } from 'vue3-count-to';
import type { DashboardInfoItem } from '../../types';
const { token } = useAntdToken()
defineOptions({
  name: "DashboardInfo"
})

defineProps<{
  dashboardInfoList: DashboardInfoItem[]
}>()

const userStore = useUserStore()
const { getUserInfo } = userStore
const WrapperAttrs: FlexProps = {
  vertical: true,
  gap: "large",
}

const UserInfoWrapperAttrs: FlexProps = {
  gap: "middle"
}



onMounted(async () => {
  await getUserInfo()
})

</script>

<template>
  <Flex v-bind="WrapperAttrs" class="dashboard-info cursor-pointer">
    <Flex v-bind="UserInfoWrapperAttrs">
      <QAvatar shape="square" :size="66" :src="userStore.userInfo?.staffPhoto" />
      <div>
        <Flex gap="middle" align="center">
          <TypographyText class="dashboard-info-name" :level="4" ellipsis>{{ $t("dashboard.companyName") }}
          </TypographyText>
          <Tag>体验版</Tag>
        </Flex>
        <Flex align="center">
          <TypographyText class="dashboard-info-secondary" type="secondary">{{ userStore.userInfo?.username }}
          </TypographyText>
          <Divider type="vertical" />
          <TypographyText class="dashboard-info-secondary" type="secondary">{{ userStore.userInfo?.company }}-{{
            userStore.userInfo?.departmentName
          }}</TypographyText>
        </Flex>
      </div>
    </Flex>
    <div class="dashboard-todo-wrapper">
      <template v-if="Boolean(dashboardInfoList.length)">
        <Flex vertical class="dashboard-todo-item" v-for="item in dashboardInfoList" :key="item.title">
          <TypographyText type="secondary" class="dashboard-todo-title">{{ $t(`dashboard.${item.title}`) }}
          </TypographyText>
          <!-- <TypographyTitle :level="1">999</TypographyTitle> -->
          <CountTo :start-val="0" :end-val="item.total" :duration="3000" class="dashboard-todo-total" />
        </Flex>
      </template>
      <template v-else>
        <Flex vertical v-for="item in 7" :key="item" gap="small">
          <QSkeleton active :paragraph="{
            rows: 1,
            width: '50%'
          }" />
        </Flex>
      </template>
    </div>
  </Flex>
</template>

<style scoped lang="less">
.dashboard {
  &-info {
    padding: v-bind("`${token.paddingLG}px`");
    background-color: v-bind("token.colorBgContainer");
    border-radius: v-bind("`${token.borderRadiusLG}px`");
    border: 1px solid v-bind("token.colorBorderSecondary");
    transition: border-color 0.3s;

    &:hover {
      border-color: v-bind("token.colorPrimary");
    }

    &-name {
      font-size: v-bind("`${token.fontSizeLG}px`");
    }

    &-secondary {
      font-size: v-bind("`${token.fontSize}px`");
      white-space: nowrap;
    }
  }

  &-todo {
    &-wrapper {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(2, 80px);
      justify-content: space-between;
      gap: v-bind("`${token.marginXXS}px`");
    }

    &-item {
      width: max-content;
    }

    &-title {
      font-size: v-bind("`${token.fontSize}px`");
    }

    &-total {
      width: min-content;
      padding-top: v-bind("`${token.paddingXXS}px`");
      font-size: v-bind("`${token.fontSizeHeading3}px`");
    }

  }
}
</style>