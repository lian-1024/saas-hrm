import router from '@/core/router'
import UserService from '@/modules/user/services/user.service'
import type { UserInfoVO } from '@/modules/user/types'
import { useRequest } from '@/shared/composables/use-request/use-request'
import { message } from 'ant-design-vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'
import { pinia } from '..'


export const createUserStore = defineStore('user', () => {
  // 状态
  const token = ref<string>('')
  const userInfo = ref<UserInfoVO | null>(null)

  // 登录方法
  const { run: login, loading: loginLoading } = useRequest(UserService.login, {
    manual: true,
    onSuccess: (res) => {
      // 保存 token
      token.value = res.data

      // 获取用户信息
      // getUserInfo()
      if (res.message) {
        message.success(res.message)
      } else {
        message.success('登录成功')
      }

      console.log("router:push");
      router.push('/')

    },
    onError: (error) => {
      if (error.message) {
        message.error(error.message)
      }
      message.error('登录失败')
    }
  })

  const { run: getUserInfo, loading: getUserInfoLoading } = useRequest(UserService.getUserInfoByToken, {
    manual: true,
    onSuccess: (res) => {
      userInfo.value = res.data
    },
    onError: (error) => {
      console.log("getUserInfo error:", error);
    }
  })




  // 退出登录
  const logout = () => {
    token.value = ''
    userInfo.value = null
  }

  return {
    token,
    userInfo,
    login,
    loginLoading,
    logout,
    getUserInfo,
    getUserInfoLoading
  }
}, {
  persist: true
})

// 热更新
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(createUserStore, import.meta.hot))
}


// 解决未初始化问题
export const useUserStore = () => {
  return createUserStore(pinia)
}