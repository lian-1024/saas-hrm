<script lang="ts" setup>
import { Button, Checkbox, Form, Input, message, type FormProps } from 'ant-design-vue'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { LoginParams } from '@/types/api'
interface FormState extends LoginParams {
  isAgree: boolean
}

const formRef = ref()
const loading = ref(false)
const router = useRouter()

const formState = reactive<FormState>({
  mobile: '',
  password: '',
  isAgree: true
})

const rules = {
  mobile: [
    { required: true, message: '请输入手机号' },
    { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确' }
  ],
  password: [
    { required: true, message: '请输入密码' },
    { min: 6, message: '密码不能少于6位' }
  ]
}

const handleFinish = async (values: FormState) => {
  try {
    loading.value = true
    console.log('Success:', values)
    // TODO: 调用登录接口
    message.success('登录成功')
    router.push('/')
  } catch (error) {
    console.error('Error:', error)
    message.error('登录失败')
  } finally {
    loading.value = false
  }
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
    <Form.Item name="remember">
      <Checkbox v-model:checked="formState.isAgree">用户平台使用协议</Checkbox>
    </Form.Item>
    <Form.Item>
      <Button type="primary" html-type="submit" :loading="loading" block size="large">
        登录
      </Button>
    </Form.Item>
  </Form>
</template>
