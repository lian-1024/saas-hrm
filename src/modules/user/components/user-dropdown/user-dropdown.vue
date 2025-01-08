<script setup lang="ts">
import router from '@/core/router'
import { useUserStore } from '@/core/stores'
import { QAvatar } from '@/shared/components/base/avatar'
import { generateMenuItem } from '@/shared/utils/generate-menu-item'
import { DashboardOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons-vue'
import { Dropdown, Flex, Menu, Space, TypographyText, type FlexProps, type MenuProps } from 'ant-design-vue'
import { h, ref } from 'vue'
import { OpenModalType, type ModalType } from '../../constants'
import UpdateModal from '../update-modal/index.vue'

defineOptions({
  name: "UserDropdown",
})

const { logout } = useUserStore()

const WrapperStyle: FlexProps = {
  gap: 'small',
  align: "center"
}

const avatarDropdownItems: MenuProps['items'] = [
  generateMenuItem("/dashboard", "首页", h(DashboardOutlined)),
  generateMenuItem("update-password", "修改密码", h(SettingOutlined)),
  generateMenuItem("update-avatar", "修改头像", h(SettingOutlined)),
  generateMenuItem("logout", "退出登录", h(LogoutOutlined)),
]

const updateModalStatus = ref<boolean>(false)
const updateModalType = ref<ModalType>(OpenModalType.PASSWORD)

const showModal = (type: ModalType) => {
  updateModalType.value = type
  updateModalStatus.value = true
}

const handleClickMenuItemActions: MenuProps['onClick'] = (info) => {
  switch (info.key) {
    case "logout":
      logout()
      break
    case "update-password":
      showModal(OpenModalType.PASSWORD)
      break
    case "update-avatar":
      showModal(OpenModalType.AVATAR)
      break
    default:
      router.push(info.key as string)
      break
  }
}
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
        <Menu :items="avatarDropdownItems" @click="handleClickMenuItemActions" />
      </template>
    </Dropdown>
    <UpdateModal v-model:type="updateModalType" v-model:open="updateModalStatus" />
  </Flex>
</template>

<style scoped lang="less">
.user {
  &-username {
    color: var(--color-background);
  }
}
</style>