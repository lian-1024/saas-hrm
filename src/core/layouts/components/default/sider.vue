<script setup lang="ts">
import router from '@/core/router';
import useRouter from '@/shared/composables/use-router';
import { useTheme } from '@/shared/composables/use-theme';
import { generateMenuItem } from '@/shared/utils/generate-menu-item';
import { LayoutSider, Menu, type MenuProps } from 'ant-design-vue';
import { computed, h, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { useAntdToken } from '../../../../shared/composables/use-antd-token/index';
import QLogo from './logo.vue';

const { t } = useI18n()
const { getRoutes } = useRouter()
const route = useRoute()

defineOptions({
  name: "QLayoutSider"
})

const collapsed = defineModel<boolean>("collapsed", { default: false })

// 当前选中的菜单项
const selectedKeys = computed<string[]>(() => {
  // 如果是子路由，返回父路由的路径
  if (route.meta?.parentKey) {
    return [`/${route.meta.parentKey}`]
  }
  // 否则返回当前路由的路径
  return [route.path]
})

// 展开的子菜单
const openKeys = ref<string[]>([])

// 监听路由变化，自动展开对应的子菜单
watch(() => route.path, (path) => {
  const matched = route.matched
  // 获取所有需要展开的父级菜单
  const parentPaths = matched
    .slice(0, -1) // 排除当前路由
    .map(route => route.path)
    .filter(path => path !== '/') // 排除根路由

  if (!collapsed.value) {
    openKeys.value = parentPaths
  }
}, { immediate: true })

// 监听折叠状态，折叠时关闭所有展开的子菜单
watch(collapsed, (val) => {
  if (val) {
    openKeys.value = []
  }
})

// 点击菜单项
const handleClickMenuItem: MenuProps['onClick'] = ({ key }) => {
  router.push(key as string)
}

// 子菜单展开/收起时
const handleOpenChange: MenuProps['onOpenChange'] = (keys) => {
  openKeys.value = keys as string[]
}

const { themeStatus } = useTheme()
const { token } = useAntdToken()

// 生成菜单项
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
</script>

<template>
  <LayoutSider width="150" class="layout-sider" v-model:collapsed="collapsed" :trigger="null" collapsible
    :theme="themeStatus">
    <QLogo />
    <Menu :theme="themeStatus" mode="inline" v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys"
      :items="menuItems" @click="handleClickMenuItem" @openChange="handleOpenChange" class="layout-sider-menu" />
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