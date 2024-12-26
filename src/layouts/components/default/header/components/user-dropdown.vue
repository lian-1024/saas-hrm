<script setup lang="ts">
import { QAvatar } from '@/components/base/Avatar';
import { generateMenuItem } from '@/utils/generate-menu-item';
import { DashboardOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { Dropdown, Flex, Menu, Space, TypographyText, type DropdownProps, type FlexProps, type MenuProps } from 'ant-design-vue';
import { h } from 'vue';

defineOptions({
  name: "QLayoutHeaderUser",
})


const WrapperStyle: FlexProps = {
  gap: 'small',
  align: "center"
}

const AvatarDropdownItems: MenuProps['items'] = [
  generateMenuItem("/dashboard", "Dashboard", h(DashboardOutlined)),
  generateMenuItem("/setting", "setting", h(SettingOutlined)),
  generateMenuItem("/logout", "logout", h(LogoutOutlined)),
]

const handleClickActions: MenuProps['onClick'] = (info) => {
  console.log('handleClickActions:', info);
}

const avatarDropdownAttrs: DropdownProps = {
  trigger: ['click', 'hover'],
  overlay: h(Menu, {
    items: AvatarDropdownItems,
    onClick: handleClickActions,
  })
}




</script>

<template>
  <Flex v-bind="WrapperStyle">
    <Dropdown v-bind="avatarDropdownAttrs">
      <Space gap="middle">
        <QAvatar size="large" />
        <TypographyText>
          Lianqq
        </TypographyText>
      </Space>
      <template #overlay>
        <Menu :items="AvatarDropdownItems" @click="handleClickActions" />
      </template>
    </Dropdown>
  </Flex>
</template>

<style scoped lang="scss"></style>