<script lang="ts" setup>
import SignInHero from '@/modules/user/components/hero.vue'
import MobileForm from '@/modules/user/components/mobile-form.vue'
import QrcodeForm from '@/modules/user/components/qrcode-form.vue'
import { useAntdToken } from '@/shared/composables/use-antd-token'
import { Flex, TypographyTitle } from 'ant-design-vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

defineOptions({
  name: 'SignInPage'
})

const { t } = useI18n()

const loginType = ref<'mobile' | 'qrcode'>('mobile')

const toggleLoginType = () => {
  loginType.value = loginType.value === 'mobile' ? 'qrcode' : 'mobile'
}

const { token } = useAntdToken()
</script>

<template>
  <Flex class="sign-in">
    <SignInHero class="sign-in-hero" />
    <div class="sign-in-form">
      <div class="sign-in-form-wrapper">
        <TypographyTitle :level="3" class="sign-in-form-title">
          {{ t(`user.signIn.title.${loginType}`) }}
        </TypographyTitle>

        <component :is="loginType === 'mobile' ? MobileForm : QrcodeForm" />

        <div class="sign-in-form-footer">
          <a @click="toggleLoginType">
            {{ t(`user.signIn.switchType.${loginType}`) }}
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
  background-color: v-bind('token.colorBgContainer');

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
