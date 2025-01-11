<script setup lang="ts">
import RoleService from '@/modules/role/services/role.service'
import type { AddRoleParams } from '@/modules/role/types'
import { QModal } from '@/shared/components/base/modal/index'
import { useAntdToken } from '@/shared/composables/use-antd-token'
import { useRequest } from '@/shared/composables/use-request/use-request'
import { EnableStatus } from '@/shared/constants/status'
import {
  Button,
  Flex,
  Form,
  FormItem,
  Input,
  message,
  Switch,
  Textarea,
  type FormInstance,
  type FormProps,
} from 'ant-design-vue'
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const { token } = useAntdToken()
const modalStatus = defineModel('open', { default: false })
const emits = defineEmits(['success'])
const formRef = ref<FormInstance>()
const formData = reactive<AddRoleParams>({
  name: '',
  state: EnableStatus.DISABLED,
  description: '',
})
const rules: FormProps['rules'] = {
  name: [{ required: true, message: t('role.form.rules.name.required'), trigger: 'blur' }],
  description: [
    { required: true, message: t('role.form.rules.description.required'), trigger: 'blur' },
  ],
}

const closeModal = () => (modalStatus.value = false)

const { run: addRole, loading: addRoleLoading } = useRequest(RoleService.addRole, {
  manual: true,
  onSuccess: () => {
    message.success(t('role.table.operationMessage.addRoleSuccess'))
    emits('success')
  },
  onError: (error) => {
    message.error(error.message || t('role.table.operationMessage.addRoleError'))
  },
  onFinally: () => {
    formRef.value?.resetFields()
    formData.state = EnableStatus.DISABLED
    closeModal()
  },
})

function handleSubmit() {
  formRef.value?.validate().then(async () => {
    addRole(formData)
  })
}

const isEnable = computed({
  get: () => Boolean(+formData.state),
  set: (newValue) => (formData.state = newValue ? EnableStatus.ENABLED : EnableStatus.DISABLED),
})

const labelCol: FormProps['labelCol'] = { span: 6 }
</script>
<template>
  <QModal v-model:open="modalStatus" :title="$t('role.form.title')" mask :closeable="true">
    <div class="add-role-modal-wrapper">
      <Form layout="vertical" ref="formRef" :model="formData" :rules="rules" :label-col="labelCol">
        <FormItem :label="$t('role.form.fields.name')" name="name">
          <Input v-model:value="formData.name" :placeholder="$t('role.form.placeholder.name')" />
        </FormItem>
        <FormItem :label="$t('role.form.fields.status')">
          <Switch v-model:checked="isEnable" />
        </FormItem>
        <FormItem :label="$t('role.form.fields.description')" name="description">
          <Textarea
            v-model:value="formData.description"
            :placeholder="$t('role.form.placeholder.description')"
          />
        </FormItem>
      </Form>
    </div>
    <template #footer>
      <Flex gap="middle" justify="center">
        <Button type="primary" @click="handleSubmit" :loading="addRoleLoading">{{
          $t('common.confirm')
        }}</Button>
        <Button @click="closeModal()">{{ $t('common.cancel') }}</Button>
      </Flex>
    </template>
  </QModal>
</template>

<style scoped lang="less">
.add-role-modal-wrapper {
  margin-block: v-bind('`${token.marginLG}px`');
  padding: v-bind('`${token.paddingLG}px`');
  border-radius: v-bind('`${token.borderRadiusLG}px`');
  background-color: v-bind('token.colorBgContainer');
}
</style>
