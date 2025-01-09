<script setup lang="ts">
import UserService from '@/modules/user/services/user.service'
import { useRequest } from '@/shared/composables/use-request'
import { Form, Input, message, type FormProps } from 'ant-design-vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface FormState {
  oldPassword: string
  newPassword: string
  confirmPassword: string
}

const emit = defineEmits<{
  success: []
}>()

const formRef = ref()
const model = ref<FormState>({
  oldPassword: '',
  newPassword: '',
  confirmPassword: ''
})

const rules = {
  oldPassword: [{ required: true, message: t('user.updateModal.password.rules.old.required') }],
  newPassword: [
    { required: true, message: t('user.updateModal.password.rules.new.required') },
    { min: 6, message: t('user.updateModal.password.rules.new.minLength') }
  ],
  confirmPassword: [
    { required: true, message: t('user.updateModal.password.rules.confirm.required') },
    {
      validator: async (_rule: any, value: string) => {
        if (value && value !== model.value.newPassword) {
          return Promise.reject(t('user.updateModal.password.rules.confirm.match'))
        }
        return Promise.resolve()
      }
    }
  ]
}

const { loading, run: updatePassword } = useRequest(UserService.updatePassword, {
  manual: true,
  onSuccess: () => {
    message.success(t('user.updateModal.password.messages.success'))
    emit('success')
  },
  onError: (error) => {
    message.error(error.message || t('user.updateModal.password.messages.error'))
  }
})

const handleSubmit = () => {
  formRef.value?.validate().then(async () => {
    const { oldPassword, newPassword } = model.value

    updatePassword({
      oldPassword,
      newPassword
    })
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
    <Form.Item name="oldPassword" :label="t('user.updateModal.password.label.old')">
      <Input.Password v-model:value="model.oldPassword" :placeholder="t('user.updateModal.password.placeholder.old')" />
    </Form.Item>
    <Form.Item name="newPassword" :label="t('user.updateModal.password.label.new')">
      <Input.Password v-model:value="model.newPassword" :placeholder="t('user.updateModal.password.placeholder.new')" />
    </Form.Item>
    <Form.Item name="confirmPassword" :label="t('user.updateModal.password.label.confirm')">
      <Input.Password v-model:value="model.confirmPassword"
        :placeholder="t('user.updateModal.password.placeholder.confirm')" />
    </Form.Item>
  </Form>
</template>
