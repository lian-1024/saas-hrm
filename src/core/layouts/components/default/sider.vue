<script setup lang="ts">
import router from '@/core/router';
import { useTheme } from '@/shared/composables/use-theme';
import { generateMenuItem } from '@/shared/utils/generate-menu-item';
import { ApartmentOutlined, CalendarOutlined, DashboardOutlined, LockOutlined, UserOutlined } from '@ant-design/icons-vue';
import { LayoutSider, Menu, type MenuProps } from 'ant-design-vue';
import { computed, h, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useAntdToken } from '../../../../shared/composables/use-antd-token/index';
import QLogo from './logo.vue';
const { t } = useI18n();

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

const siderMenuItem = computed<MenuProps['items']>(() => (
  [
    // 首页
    generateMenuItem("/dashboard", t('nav.dashboard'), h(DashboardOutlined)),
    // 组织
    generateMenuItem("/department", t('nav.department'), h(ApartmentOutlined)),
    // 角色
    generateMenuItem("/role", t('nav.role'), h(UserOutlined)),
    // 员工
    generateMenuItem("/employee", t('nav.employee'), h(DashboardOutlined)),
    // 权限
    generateMenuItem("/permission", t('nav.permission'), h(LockOutlined)),
    // 考勤
    generateMenuItem("/attendance", t('nav.attendance'), h(CalendarOutlined)),
  ]
))


const getRoutes = () => {
  console.log("router.getRoutes():", router.getRoutes())
}

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
    <Menu :theme="themeStatus" v-model:selectedKeys="selectedKeys" :items="siderMenuItem" mode="inline"
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
