<script setup lang="ts">
import { QAvatar } from '@/shared/components/base/avatar';
import { generateMenuItem } from '@/shared/utils/generate-menu-item';
import { DashboardOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { Dropdown, Flex, Menu, Space, TypographyText, type FlexProps, type MenuProps } from 'ant-design-vue';
import { h } from 'vue';
import { handleClickMenuItemActions } from './actions';
defineOptions({
  name: "QLayoutHeaderUser",
})


const WrapperStyle: FlexProps = {
  gap: 'small',
  align: "center"
}

const AvatarDropdownItems: MenuProps['items'] = [
  generateMenuItem("/dashboard", "首页", h(DashboardOutlined)),
  generateMenuItem("/update-password", "修改密码", h(SettingOutlined)),
  generateMenuItem("/update-avatar", "修改头像", h(SettingOutlined)),
  generateMenuItem("/logout", "退出登录", h(LogoutOutlined)),
]


// const avatarDropdownAttrs: DropdownProps = {
//   trigger: ['click', 'hover'],
//   overlay: h(Menu, {
//     items: AvatarDropdownItems,
//     onClick: handleClickMenuItemActions,
//   })
// }




</script>

<template>
  <Flex v-bind="WrapperStyle">
    <Dropdown>
      <Space gap="middle">
        <QAvatar size="large" />
        <TypographyText class="user-username">
          Lianqq
        </TypographyText>
      </Space>
      <template #overlay>
        <Menu :items="AvatarDropdownItems" @click="handleClickMenuItemActions" />
      </template>
    </Dropdown>
  </Flex>
</template>

<style scoped lang="less">
.user {
  &-username {
    color: var(--color-background);
  }
}
</style>