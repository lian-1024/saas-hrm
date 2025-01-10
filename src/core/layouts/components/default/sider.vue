<script setup lang="ts">
import router from '@/core/router';
import useRouter from '@/shared/composables/use-router';
import { useTheme } from '@/shared/composables/use-theme';
import { generateMenuItem } from '@/shared/utils/generate-menu-item';
import { LayoutSider, Menu, type MenuProps } from 'ant-design-vue';
import { computed, h, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useAntdToken } from '../../../../shared/composables/use-antd-token/index';
import QLogo from './logo.vue';

const { t } = useI18n();
const { getRoutes } = useRouter()

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

const menuItems = computed<MenuProps['items']>(() => {
  return getRoutes()
    .filter(item => item.meta)
    .filter(route => route.meta.title && !route.meta.hidden)
    .sort((a, b) => (a.meta.index ?? 0) - (b.meta.index ?? 0))
    .map(route => {
      return generateMenuItem(
        route.path,
        t(route.meta.title as string),
        typeof route.meta.icon === 'string' ? h(route.meta.icon) : route.meta.icon
      )
    })
})

onMounted(() => {
  getRoutes()
})

</script>

<template>
  <LayoutSider width="150" class="layout-sider" v-model:collapsed="collapsed" :trigger="null" collapsible
    :theme="themeStatus">
    <!-- layout menu -->
    <QLogo />
    <!-- layout menu -->
    <Menu :theme="themeStatus" v-model:selectedKeys="selectedKeys" :items="menuItems" mode="inline"
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
