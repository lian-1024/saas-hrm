<script setup lang="ts" generic="">
import type { DashboardNoticeVO } from '@/modules/dashboard/types';
import { QAvatar } from '@/shared/components/base/Avatar';
import { Flex, List, ListItem, ListItemMeta, TypographyLink, TypographyText } from 'ant-design-vue';
import { computed } from 'vue';
import QPanel from '../panel.vue';


defineOptions({
  name: "DashboardNotification"
})


const props = defineProps<{
  noticeList: DashboardNoticeVO[]
}>()

const computedNoticeList = computed(() => {
  return props.noticeList.map(notice => {
    const { notice: noticeContent, createTime } = notice
    const [name, _, content] = noticeContent.split(' ')
    console.log("noticeContent:", noticeContent.split(' '));
    console.log("name:", name, "content:", content);
    return {
      name,
      content,
      createTime
    }
  })
})

</script>

<template>
  <QPanel title="通知公告">
    <List :data-source="computedNoticeList">
      <template #renderItem="{ item }">
        <ListItem class="notification-item">
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
      </template>
    </List>
  </QPanel>
</template>

<style scoped lang="less">
.notification-item {
  padding-block: var(--spacing-middle);
}
</style>
