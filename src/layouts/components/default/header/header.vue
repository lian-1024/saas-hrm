<script setup lang="ts">
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
import { Flex, LayoutHeader, type FlexProps } from "ant-design-vue";

import QLayoutHeaderUser from "./components/user-dropdown.vue";
defineOptions({
  name: "QLayoutHeader",
});
const emits = defineEmits<{
  changeCollapsed: [collapsed?: boolean];
}>();
const collapsed = defineModel("collapsed");


const LayoutHeaderFlex: FlexProps = {
  align: "center",
  justify: "space-between",
}
</script>

<template>
  <LayoutHeader class="layout-header">
    <Flex v-bind="LayoutHeaderFlex">
      <div>
        <MenuUnfoldOutlined v-if="collapsed" class="trigger" @click="emits('changeCollapsed')" />
        <MenuFoldOutlined v-else class="trigger" @click="emits('changeCollapsed')" />
      </div>
      <QLayoutHeaderUser />
    </Flex>
  </LayoutHeader>
</template>

<style scoped lang="scss">
.layout-header {
  padding-inline: 16px;
}
</style>
