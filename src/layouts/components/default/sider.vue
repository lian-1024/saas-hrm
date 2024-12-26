<script setup lang="ts">
import { SiderMenuItem } from '@/config/menu.config';
import router from '@/router';
import { LayoutSider, Menu, type MenuProps } from 'ant-design-vue';
import { ref } from 'vue';


defineOptions({
  name: "QLayoutSider"
})

const collapsed = defineModel<boolean>("collapsed")
// current selected keys
const selectedKeys = ref<string[]>(['1'])

// click menu item
const handleClickMenuItem: MenuProps['onClick'] = ({ key }) => {
  router.push(key as string)
}
</script>

<template>
  <LayoutSider class="layout-sider" v-model:collapsed="collapsed" :trigger="null" collapsible>
    <!-- layout menu -->
    <div class="logo" />
    <!-- layout menu -->
    <Menu v-model:selectedKeys="selectedKeys" :items="SiderMenuItem" theme="dark" mode="inline"
      @click="handleClickMenuItem" />
  </LayoutSider>
</template>

<style scoped lang="scss"></style>