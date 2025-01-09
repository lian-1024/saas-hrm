<script lang="ts" setup>
import { useUserStore } from '@/core/stores';
import type { LoginParams } from '@/modules/user/types';
import { Button, Checkbox, Form, Input, TypographyLink, type FormProps } from 'ant-design-vue';
import { reactive, ref } from 'vue';

interface FormState extends LoginParams {
  isAgree: boolean
}

const formRef = ref()

const formState = reactive<FormState>({
  mobile: '13800000002',
  password: 'hm#qd@23!',
  isAgree: true
})


const rules: FormProps['rules'] = {
  mobile: [
    { required: true, message: '请输入手机号' },
    { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确' }
  ],
  password: [
    { required: true, message: '请输入密码' },
    { min: 6, message: '密码不能少于6位' }
  ],
  isAgree: [
    {
      validator: (_, value) => {
        if (!value) {
          return Promise.reject('请阅读并同意用户平台使用协议')
        }
        return Promise.resolve()
      }
    }
  ]
}

const userStore = useUserStore()



// 表单提交
const handleFinish = async (values: FormState) => {
  await userStore.login(values)
}

const formLayout: FormProps = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 }
}
</script>

<template>
  <Form ref="formRef" :model="formState" :rules="rules" v-bind="formLayout" @finish="handleFinish">
    <Form.Item name="mobile">
      <Input v-model:value="formState.mobile" size="large" placeholder="请输入手机号">
      <template #prefix>
        <span class="anticon">
          <i class="iconfont icon-phone"></i>
        </span>
      </template>
      </Input>
    </Form.Item>
    <Form.Item name="password">
      <Input.Password v-model:value="formState.password" size="large" placeholder="请输入密码">
        <template #prefix>
          <span class="anticon">
            <i class="iconfont icon-lock"></i>
          </span>
        </template>
      </Input.Password>
    </Form.Item>
    <Form.Item name="isAgree">
      <Checkbox v-model:checked="formState.isAgree">
        我已阅读并同意
        <TypographyLink>《用户平台使用协议》</TypographyLink>
      </Checkbox>
    </Form.Item>
    <Form.Item>
      <Button :loading="userStore.loginLoading" type="primary" html-type="submit" block size="large">
        登录
      </Button>
    </Form.Item>
  </Form>
</template>
