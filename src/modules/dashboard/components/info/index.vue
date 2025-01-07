<script setup lang="ts">
import { useUserStore } from '@/core/stores/modules/user';
import { QAvatar } from '@/shared/components/base/Avatar';
import { Divider, Flex, type FlexProps, Tag, TypographyText } from 'ant-design-vue';
import { onMounted } from 'vue';
import { CountTo } from 'vue3-count-to';
import type { DashboardInfoItem } from '../../types';

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
  <Flex v-bind="WrapperAttrs" class="dashboard-info">
    <Flex v-bind="UserInfoWrapperAttrs">
      <QAvatar is-other shape="square" :size="66" :src="userStore.userInfo?.staffPhoto" />
      <div>
        <Flex gap="middle" align="center">
          <TypographyText class="dashboard-info-name" :level="4" ellipsis>江苏传智博客教育科技股份有限公司</TypographyText>
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
      <Flex vertical class="dashboard-todo-item" v-for="item in dashboardInfoList" :key="item.title">
        <TypographyText type="secondary" class="dashboard-todo-title">{{ item.title }}</TypographyText>
        <!-- <TypographyTitle :level="1">999</TypographyTitle> -->
        <CountTo :start-val="0" :end-val="item.total" :duration="3000" class="dashboard-todo-total" />
      </Flex>
    </div>
  </Flex>
</template>

<style scoped lang="less">
.dashboard {
  &-info {
    padding: var(--spacing-large);
    background-color: var(--color-background);

    &-name {
      font-size: var(--font-size-middle);
    }

    &-secondary {
      font-size: var(--font-size);
      white-space: nowrap;
    }
  }

  &-todo {
    &-wrapper {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(2, 80px);
      justify-content: space-between;
    }

    &-item {
      width: max-content;
    }

    &-title {
      font-size: var(--font-size);
    }

    &-total {
      width: min-content;
      padding-top: var(--spacing-middle);
      font-size: var(--font-size-xlarge);
      padding-top: var(--spacing-small);
    }

  }
}
</style>