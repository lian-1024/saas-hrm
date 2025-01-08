<script setup lang="ts">
import { Form, Input, message, type FormProps } from 'ant-design-vue'
import { ref } from 'vue'

interface FormState {
  oldPassword: string
  newPassword: string
  confirmPassword: string
}

const emit = defineEmits<{
  success: []
}>()

const formRef = ref()
const loading = ref(false)
const model = ref<FormState>({
  oldPassword: '',
  newPassword: '',
  confirmPassword: ''
})

const rules = {
  oldPassword: [{ required: true, message: '请输入原密码' }],
  newPassword: [
    { required: true, message: '请输入新密码' },
    { min: 6, message: '密码长度不能小于6位' }
  ],
  confirmPassword: [
    { required: true, message: '请确认新密码' },
    {
      validator: async (_rule: any, value: string) => {
        if (value && value !== model.value.newPassword) {
          return Promise.reject('两次输入的密码不一致')
        }
        return Promise.resolve()
      }
    }
  ]
}

const handleSubmit = () => {
  formRef.value?.validate().then(async () => {
    try {
      loading.value = true
      // TODO: 调用修改密码API
      message.success('修改密码成功')
      emit('success')
    } catch (error: any) {
      message.error(error.message || '修改密码失败')
    } finally {
      loading.value = false
    }
  })
}

defineExpose({
  loading,
  handleSubmit
})


const formLabeCol: FormProps['labelCol'] = {
  span: 6
}

const formWrapperCol: FormProps['wrapperCol'] = {
  span: 14
}

</script>

<template>
  <Form ref="formRef" :model="model" :rules="rules" :label-col="formLabeCol" :wrapper-col="formWrapperCol">
    <Form.Item name="oldPassword" label="原密码">
      <Input.Password v-model:value="model.oldPassword" placeholder="请输入原密码" />
    </Form.Item>
    <Form.Item name="newPassword" label="新密码">
      <Input.Password v-model:value="model.newPassword" placeholder="请输入新密码" />
    </Form.Item>
    <Form.Item name="confirmPassword" label="确认密码">
      <Input.Password v-model:value="model.confirmPassword" placeholder="请确认新密码" />
    </Form.Item>
  </Form>
</template>
