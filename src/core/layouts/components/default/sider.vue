<script setup lang="ts">
import { SiderMenuItem } from '@/core/layouts/config/menu.config';
import router from '@/core/router';
import { useTheme } from '@/shared/composables/use-theme';
import { LayoutSider, Menu, type MenuProps } from 'ant-design-vue';
import { ref } from 'vue';
import { useAntdToken } from '../../../../shared/composables/use-antd-token/index';
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

const { themeStatus } = useTheme()

const { token } = useAntdToken()
</script>

<template>
  <LayoutSider width="150" class="layout-sider" v-model:collapsed="collapsed" :trigger="null" collapsible
    :theme="themeStatus">
    <!-- layout menu -->
    <QLogo />
    <!-- layout menu -->
    <Menu :theme="themeStatus" v-model:selectedKeys="selectedKeys" :items="SiderMenuItem" mode="inline"
      @click="handleClickMenuItem" class="layout-sider-menu" />
  </LayoutSider>
</template>

<style scoped lang="scss">
.layout-sider {
  background-color: v-bind("token.colorBgContainer");

  &-menu {
    background-color: v-bind("token.colorBgContainer");
  }
}
</style>
