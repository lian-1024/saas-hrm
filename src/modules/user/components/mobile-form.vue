<script lang="ts" setup>
import { useUserStore } from '@/core/stores'
import type { LoginParams } from '@/modules/user/types'
import { Button, Checkbox, Form, Input, TypographyLink, type FormProps } from 'ant-design-vue'
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface FormState extends LoginParams {
  isAgree: boolean
}

const formRef = ref()

const formState = reactive<FormState>({
  mobile: '13800000002',
  password: 'hm#qd@23!',
  isAgree: true,
})

const rules: FormProps['rules'] = {
  mobile: [
    { required: true, message: t('user.mobileForm.rules.mobile.required') },
    { pattern: /^1[3-9]\d{9}$/, message: t('user.mobileForm.rules.mobile.format') },
  ],
  password: [
    { required: true, message: t('user.mobileForm.rules.password.required') },
    { min: 6, message: t('user.mobileForm.rules.password.minLength') },
  ],
  isAgree: [
    {
      validator: (_, value) => {
        if (!value) {
          return Promise.reject(t('user.mobileForm.rules.agreement.required'))
        }
        return Promise.resolve()
      },
    },
  ],
}

const userStore = useUserStore()

// 表单提交
const handleFinish = async (values: FormState) => {
  await userStore.login(values)
}

const formLayout: FormProps = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
}
</script>

<template>
  <Form ref="formRef" :model="formState" :rules="rules" v-bind="formLayout" @finish="handleFinish">
    <Form.Item name="mobile">
      <Input
        v-model:value="formState.mobile"
        size="large"
        :placeholder="t('user.mobileForm.placeholder.mobile')"
      >
        <template #prefix>
          <span class="anticon">
            <i class="iconfont icon-phone"></i>
          </span>
        </template>
      </Input>
    </Form.Item>
    <Form.Item name="password">
      <Input.Password
        v-model:value="formState.password"
        size="large"
        :placeholder="t('user.mobileForm.placeholder.password')"
      >
        <template #prefix>
          <span class="anticon">
            <i class="iconfont icon-lock"></i>
          </span>
        </template>
      </Input.Password>
    </Form.Item>
    <Form.Item name="isAgree">
      <Checkbox v-model:checked="formState.isAgree">
        {{ t('user.mobileForm.agreement.text') }}
        <TypographyLink>{{ t('user.mobileForm.agreement.link') }}</TypographyLink>
      </Checkbox>
    </Form.Item>
    <Form.Item>
      <Button
        :loading="userStore.loginLoading"
        type="primary"
        html-type="submit"
        block
        size="large"
      >
        {{ t('user.mobileForm.button.login') }}
      </Button>
    </Form.Item>
  </Form>
</template>
