import { useRequest } from '@/composables/use-request'
import AuthService from '@/services/auth.service'
import { message } from 'ant-design-vue'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { pinia } from '..'


export const createUserStore = defineStore('user', () => {
  // 状态
  const token = ref<string>('')
  const userInfo = ref<any>(null)

  // 登录方法
  const { run: login, loading: loginLoading } = useRequest(AuthService.login, {
    manual: true,
    onSuccess: (res) => {
      // 保存 token
      token.value = res.data
      console.log("token:", token.value)
      console.log("res:", res)
      // 获取用户信息
      // getUserInfo()
      if (res.message) {
        message.success(res.message)
      } else {
        message.success('登录成功')
      }

      console.log("router:push");

    },
    onError: (error) => {
      if (error.message) {
        message.error(error.message)
      }
      message.error('登录失败')
    }
  })

  // 获取用户信息
  // const { run: getUserInfo } = useRequest(AuthService.getUserInfo, {
  //   manual: true,
  //   onSuccess: (res) => {
  //     userInfo.value = res
  //   }
  // })

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
    logout
  }
}, {
  persist: true
})

// 支持热更新
// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(createUserStore, import.meta.hot))

// }


export const useUserStore = () => createUserStore(pinia)