<script setup lang="ts">
import UserDropdown from "@/modules/user/components/user-dropdown/user-dropdown.vue";
import ThemeSwitch from "@/shared/components/base/theme-switch/src/theme-switch.vue";
import { useAntdToken } from '@/shared/composables/use-antd-token';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
import { Flex, LayoutHeader, type FlexProps } from "ant-design-vue";
defineOptions({
  name: "QLayoutHeader",
});
const emits = defineEmits<{
  changeCollapsed: [collapsed?: boolean];
}>();
const collapsed = defineModel("collapsed", { default: false });


const LayoutHeaderFlex: FlexProps = {
  align: "center",
  justify: "space-between",
}
const { token } = useAntdToken()
</script>

<template>
  <LayoutHeader class="layout-header">
    <Flex v-bind="LayoutHeaderFlex">
      <div>
        <MenuUnfoldOutlined v-if="collapsed" class="trigger layout-header-collapsed-icon"
          @click="emits('changeCollapsed')" />
        <MenuFoldOutlined v-else class="trigger layout-header-collapsed-icon" @click="emits('changeCollapsed')" />
      </div>
      <ThemeSwitch />
      <UserDropdown />
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
