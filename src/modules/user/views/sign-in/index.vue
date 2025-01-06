<script lang="ts" setup>
import SignInHero from '@/modules/user/components/hero.vue'
import MobileForm from '@/modules/user/components/mobile-form.vue'
import QrcodeForm from '@/modules/user/components/qrcode-form.vue'
import { Flex } from 'ant-design-vue'
import { ref } from 'vue'

defineOptions({
  name: 'SignInPage'
})

const loginType = ref<'mobile' | 'qrcode'>('mobile')

const toggleLoginType = () => {
  loginType.value = loginType.value === 'mobile' ? 'qrcode' : 'mobile'
}
</script>

<template>
  <Flex class="sign-in">
    <SignInHero class="sign-in-hero" />
    <div class="sign-in-form">
      <div class="sign-in-form-wrapper">
        <h2 class="sign-in-form-title">
          {{ loginType === 'mobile' ? '手机号登录' : '扫码登录' }}
        </h2>

        <component :is="loginType === 'mobile' ? MobileForm : QrcodeForm" />

        <div class="sign-in-form-footer">
          <a @click="toggleLoginType">
            使用{{ loginType === 'mobile' ? '扫码登录' : '手机号登录' }}
          </a>
        </div>
      </div>
    </div>
  </Flex>
</template>

<style scoped lang="less">
.sign-in {
  display: flex;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;

  &-hero {
    flex: 2;
    height: 100%;
  }

  &-form {
    display: flex;
    align-items: center;
    flex: 1;
    padding-left: 160px;
    overflow: auto;

    &-wrapper {
      width: 100%;
      max-width: 330px;
    }

    &-title {
      margin-bottom: 40px;
      color: #1e2022;
      font-weight: 700;
      font-size: 24px;
      text-align: left;
    }

    &-footer {
      margin-top: 24px;
      text-align: center;

      a {
        color: #1890ff;
        cursor: pointer;

        &:hover {
          color: #40a9ff;
        }
      }
    }
  }
}

// 响应式处理
@media screen and (max-width: 768px) {
  .sign-in {
    &-hero {
      display: none;
    }

    &-form {
      width: 100%;
      padding: 0 20px;
    }
  }
}
</style>
