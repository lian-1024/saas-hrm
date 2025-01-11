<script setup lang="ts" generic="">
import { QAvatar } from '@components/base/avatar'
import { QSkeleton } from '@components/base/skeleton'
import { useAntdToken } from '@composables/use-antd-token'
import type { DashboardNoticeVO } from '@modules/dashboard/types'
import { Flex, List, ListItem, ListItemMeta, TypographyLink, TypographyText } from 'ant-design-vue'
import { computed } from 'vue'
import QPanel from '../panel.vue'
defineOptions({
  name: 'DashboardNotification',
})

interface Props {
  noticeList?: DashboardNoticeVO[]
  loading?: boolean
}

const generateList = (length: number = 3) => {
  return Array.from({ length }, () => ({
    icon: '',
    notice: '',
    createTime: '',
  })) as DashboardNoticeVO[]
}

const skeletonList: DashboardNoticeVO[] = generateList()

const { noticeList = [], loading } = defineProps<Props>()

const computedNoticeList = computed(() => {
  return noticeList.map((notice) => {
    const { notice: noticeContent, createTime } = notice
    const [name, _, content] = noticeContent.split(' ')
    return {
      name,
      content,
      createTime,
    }
  })
})

const { token } = useAntdToken()
</script>

<template>
  <QPanel :title="$t('dashboard.notification.title')">
    <template v-if="!loading">
      <List :data-source="computedNoticeList">
        <template #renderItem="{ item }">
          <ListItem class="notification-item cursor-pointer">
            <ListItemMeta :description="item.createTime">
              <template #title>
                <RouterLink to="/">
                  <Flex gap="small">
                    <TypographyLink>{{ item.name }}</TypographyLink>
                    <TypographyText type="secondary">{{
                      $t('dashboard.notification.published')
                    }}</TypographyText>
                    <TypographyText>{{ item.content }}</TypographyText>
                  </Flex>
                </RouterLink>
              </template>
              <template #avatar>
                <QAvatar size="large" :src="item.icon" />
              </template>
            </ListItemMeta>
          </ListItem>
        </template>
      </List>
    </template>
    <template v-else>
      <List :data-source="skeletonList">
        <template #renderItem="{ item }">
          <QSkeleton active avatar :title="false" class="notification-item">
            <ListItem>
              <ListItemMeta :description="item.createTime">
                <template #title>
                  <RouterLink to="/">
                    <Flex gap="small">
                      <TypographyLink>{{ item.name }}</TypographyLink>
                      <TypographyText type="secondary">发布了</TypographyText>
                      <TypographyText>{{ item.content }}</TypographyText>
                    </Flex>
                  </RouterLink>
                </template>
                <template #avatar>
                  <QAvatar size="large" :src="item.icon" />
                </template>
              </ListItemMeta>
            </ListItem>
          </QSkeleton>
        </template>
      </List>
    </template>
  </QPanel>
</template>

<style scoped lang="less">
.notification-item {
  padding-block: v-bind('`${token.padding}px`');
}
</style>
