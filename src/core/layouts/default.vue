<script lang="ts" setup>
import { Layout } from 'ant-design-vue'

import { useAntdToken } from '@/shared/composables/use-antd-token'
import { ref } from 'vue'
import QLayoutContent from './components/default/content.vue'
import QLayoutHeader from './components/default/header.vue'
import QLayoutSider from './components/default/sider.vue'
defineOptions({
  name: 'LayoutDefault',
})

// collapsed status
const collapsed = ref<boolean>(true)

// change collapsed status
const handleChangeCollapsed = (status?: boolean) => {
  if (status !== undefined) {
    collapsed.value = status
  } else {
    collapsed.value = !collapsed.value
  }
}
const { token } = useAntdToken()
</script>

<template>
  <Layout class="layout-default">
    <!-- layout sider -->
    <QLayoutSider :collapsed="collapsed" />
    <Layout class="layout-main">
      <!-- layout header -->
      <QLayoutHeader :collapsed="collapsed" @changeCollapsed="handleChangeCollapsed" />
      <!-- layout content -->
      <QLayoutContent class="layout-content" />
    </Layout>
  </Layout>
</template>

<style lang="less" scoped>
.layout {
  &-default {
    height: 100%;
    background-color: v-bind('token.colorBgContainer');
  }

  &-main {
    overflow-y: scroll;
  }

  &-header {
    padding-inline: var(--spacing-large);
  }
}
</style>
