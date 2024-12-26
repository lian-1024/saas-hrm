<script lang="ts" setup>
import { Layout } from 'ant-design-vue';

import { ref } from 'vue';
import QLayoutContent from './components/default/content.vue';
import QLayoutHeader from './components/default/header/header.vue';
import QLayoutSider from './components/default/sider.vue';
defineOptions({
  name: "LayoutDefault"
})

// collapsed status
const collapsed = ref<boolean>(false);


// change collapsed status
const handleChangeCollapsed= (status?: boolean) => {
  if(status !== undefined) {
    collapsed.value = status
  } else {
    collapsed.value = !collapsed.value
  }
}

</script>

<template>
  <Layout class="layout-default">
    <!-- layout sider -->
    <QLayoutSider :collapsed="collapsed"/>
    <Layout>
      <!-- layout header -->
      <QLayoutHeader :collapsed="collapsed" @changeCollapsed="handleChangeCollapsed" />
      <!-- layout content -->
      <QLayoutContent/>
    </Layout>
  </Layout>
</template>

<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}

.layout-header {
  padding-inline: var(--qq-spacing-large);
}
</style>
