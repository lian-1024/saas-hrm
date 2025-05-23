<script setup lang="ts">
import router from '@/core/router'
import { useUserStore } from '@/core/stores'
import { QAvatar } from '@/shared/components/base/avatar'
import { QSkeleton } from '@/shared/components/base/skeleton'
import { useAntdToken } from '@/shared/composables/use-antd-token'
import { generateMenuItem } from '@/shared/utils/generate-menu-item'
import { DashboardOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons-vue'
import {
  Dropdown,
  Flex,
  Menu,
  Space,
  TypographyText,
  type FlexProps,
  type MenuProps,
} from 'ant-design-vue'
import { defineAsyncComponent, h, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { OpenModalType, type ModalType } from '../../constants'

const { t } = useI18n()
const UpdateModal = defineAsyncComponent(() => import('../update-modal/index.vue'))

defineOptions({
  name: 'UserDropdown',
})

const userStore = useUserStore()

const WrapperStyle: FlexProps = {
  gap: 'small',
  align: 'center',
}

const avatarDropdownItems: MenuProps['items'] = [
  generateMenuItem('/dashboard', t('user.dropdown.menu.dashboard'), h(DashboardOutlined)),
  generateMenuItem('update-password', t('user.dropdown.menu.password'), h(SettingOutlined)),
  generateMenuItem('update-avatar', t('user.dropdown.menu.avatar'), h(SettingOutlined)),
  generateMenuItem('logout', t('user.dropdown.menu.logout'), h(LogoutOutlined)),
]

const updateModalStatus = ref<boolean>(false)
const updateModalType = ref<ModalType>(OpenModalType.PASSWORD)

const showModal = (type: ModalType) => {
  updateModalType.value = type
  updateModalStatus.value = true
}

const handleClickMenuItemActions: MenuProps['onClick'] = (info) => {
  switch (info.key) {
    case 'logout':
      userStore.logout()
      break
    case 'update-password':
      showModal(OpenModalType.PASSWORD)
      break
    case 'update-avatar':
      showModal(OpenModalType.AVATAR)
      break
    default:
      router.push(info.key as string)
      break
  }
}

const { token } = useAntdToken()
</script>

<template>
  <QSkeleton :loading="!userStore.userInfo?.staffPhoto" avatar :paragraph="false">
    <Flex v-bind="WrapperStyle">
      <Dropdown>
        <Space gap="middle">
          <TypographyText class="user-username">
            {{ userStore.userInfo?.username }}
          </TypographyText>
          <QAvatar size="large" :src="userStore.userInfo?.staffPhoto" />
        </Space>
        <template #overlay>
          <Menu :items="avatarDropdownItems" @click="handleClickMenuItemActions" />
        </template>
      </Dropdown>
      <UpdateModal v-model:type="updateModalType" v-model:open="updateModalStatus" />
    </Flex>
  </QSkeleton>
</template>

<style scoped lang="less">
.user {
  &-username {
    color: v-bind('token.colorText');
  }
}
</style>
