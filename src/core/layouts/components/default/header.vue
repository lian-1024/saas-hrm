<script setup lang="ts">
import { QNotificationPopover } from '@/shared/components/business/notification-popover'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import { QLocalSelect } from '@components/base/local-select'
import { QThemeSwitch } from '@components/base/theme-switch'
import { useAntdToken } from '@composables/use-antd-token'
import QUserDropdown from '@modules/user/components/user-dropdown/user-dropdown.vue'
import { Flex, LayoutHeader, type FlexProps } from 'ant-design-vue'
defineOptions({
  name: 'QLayoutHeader',
})


const emits = defineEmits<{
  changeCollapsed: [collapsed?: boolean]
}>()
const collapsed = defineModel('collapsed', { default: false })

const LayoutHeaderFlex: FlexProps = {
  align: 'center',
  justify: 'space-between',
}
const { token } = useAntdToken()


</script>

<template>
  <LayoutHeader class="layout-header">
    <Flex v-bind="LayoutHeaderFlex">
      <div class="flex-1">
        <MenuUnfoldOutlined v-if="collapsed" class="trigger layout-header-collapsed-icon"
          @click="emits('changeCollapsed')" />
        <MenuFoldOutlined v-else class="trigger layout-header-collapsed-icon" @click="emits('changeCollapsed')" />
      </div>
      <Flex gap="large" align="center">
        <QThemeSwitch />
        <QNotificationPopover />
        <QLocalSelect />
        <QUserDropdown />
      </Flex>,
    </Flex>
  </LayoutHeader>
</template>

<style scoped lang="less">
.layout-header {
  padding-inline: 16px;
  background-color: v-bind('token.colorBgContainer');
  border-bottom: 1px solid v-bind('token.colorBorderSecondary');

  &-collapsed-icon {
    color: v-bind('token.colorText');
  }
}
</style>
