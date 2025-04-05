import { i18n } from '@/core/plugins/i18n'
import router from '@/core/router'
import UserService from '@/modules/user/services/user.service'
import type { UserInfoVO } from '@/modules/user/types'
import { useRequest } from '@/shared/composables/use-request/use-request'
import useRouter from '@/shared/composables/use-router'
import { message } from 'ant-design-vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'
import { pinia } from '..'

const { resetRoutes, setIsRoutesGenerated } = useRouter()
export const createUserStore = defineStore(
  'user',
  () => {
    // token
    const token = ref<string>('')
    // 用户信息
    const userInfo = ref<UserInfoVO | null>(null)

    // 登录
    const { run: login, loading: loginLoading } = useRequest(UserService.login, {
      manual: true,
      onSuccess: (res) => {
        // 保存 token
        token.value = res.data
        message.success(i18n.global.t('user.signIn.messages.loginSuccess'))
        router.push('/')
      },
      onError: (error) => {
        message.error(error.message || i18n.global.t('user.signIn.messages.loginError'))
      },
    })

    // 获取用户信息
    const { run: getUserInfo, loading: getUserInfoLoading } = useRequest(
      UserService.getUserInfoByToken,
      {
        manual: true,
        onSuccess: (res) => {
          userInfo.value = res.data
        },
        onError: (error) => {
          console.log('getUserInfo error:', error)
        },
      },
    )

    // 退出登录
    const logout = () => {
      // 清除 token
      token.value = ''
      // 清除用户信息
      userInfo.value = null
      // 重置路由
      resetRoutes()
      // 跳转登录页
      router.push('/sign-in')
    }

    return {
      token,
      userInfo,
      login,
      loginLoading,
      logout,
      getUserInfo,
      getUserInfoLoading,
    }
  },
  {
    persist: true,
  },
) // 热更新
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(createUserStore, import.meta.hot))
}

// 解决未初始化问题
export const useUserStore = () => {
  return createUserStore(pinia)
}
