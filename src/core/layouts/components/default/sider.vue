<script setup lang="ts">
import { SiderMenuItem } from '@/core/layouts/config/menu.config';
import router from '@/core/router';
import { LayoutSider, Menu, type MenuProps } from 'ant-design-vue';
import { ref } from 'vue';
import QLogo from './logo.vue';


defineOptions({
  name: "QLayoutSider"
})

const collapsed = defineModel<boolean>("collapsed", { default: false })
// current selected keys
const selectedKeys = ref<string[]>(['1'])

// click menu item
const handleClickMenuItem: MenuProps['onClick'] = ({ key }) => {
  router.push(key as string)
}
</script>

<template>
  <LayoutSider width="150" class="layout-sider" v-model:collapsed="collapsed" :trigger="null" collapsible>
    <!-- layout menu -->
    <QLogo />
    <!-- layout menu -->
    <Menu v-model:selectedKeys="selectedKeys" :items="SiderMenuItem" theme="dark" mode="inline"
      @click="handleClickMenuItem" />
  </LayoutSider>
</template>

<style scoped lang="scss"></style>
