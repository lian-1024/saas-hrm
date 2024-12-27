<script setup lang="ts" generic="">
import { QAvatar } from '@/components/base/Avatar';
import { formatDate } from '@/utils/date';
import { List, ListItem, ListItemMeta } from 'ant-design-vue';
import QPanel from '../panel.vue';


defineOptions({
  name: "DashboardNotification"
})

const notificationList = [
  {
    title: "Hello World",
    avatar: "/vite.svg",
    username: "lianqq",
    createTime: formatDate(new Date())
  }
]


</script>

<template>
  <QPanel title="通知公告">
    <List :data-source="notificationList">
      <template #renderItem="{ item }">
        <ListItem>
          <ListItemMeta :description="item.createTime">
            <template #title>
              <RouterLink to="/">
                <a href="">{{ item.username }}</a>
                发布了
                <a href="">{{ item.title }}</a>

              </RouterLink>
            </template>
            <template #avatar>
              <QAvatar size="large" :src="item.avatar" />
            </template>

          </ListItemMeta>
        </ListItem>
      </template>
    </List>
  </QPanel>
</template>

<style scoped lang="scss"></style>