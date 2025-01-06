<script setup lang="ts">
import RoleService from '@/modules/role/services/role.service';
import type { AddRoleParams } from '@/modules/role/types';
import { QModal } from '@/shared/components/base/modal/index';
import { useRequest } from '@/shared/composables/use-request/use-request';
import { EnableStatus } from '@/shared/constants/status';
import { Button, Flex, Form, FormItem, Input, message, Switch, Textarea, type FormInstance, type FormProps } from 'ant-design-vue';
import { computed, reactive, ref } from 'vue';

const modalStatus = defineModel('open', { default: false })
const emits = defineEmits(['success'])
const formRef = ref<FormInstance>();
const formData = reactive<AddRoleParams>({
  name: '',
  state: EnableStatus.DISABLED,
  description: ''
});
const rules: FormProps['rules'] = {
  name: [{ required: true, message: '请输入角色名称', trigger: 'blur' }],
  description: [{ required: true, message: '请输入角色描述', trigger: 'blur' }]
};

const closeModal = () => modalStatus.value = false

const { run: addRole, loading: addRoleLoading } = useRequest(RoleService.addRole, {
  manual: true,
  onSuccess: () => {
    message.success("新增角色成功")
    emits("success")
  },
  onError: (error) => {
    if (error.message) {
      message.error(error.message)
    } else {
      message.error(error)
    }
  },
  onFinally: () => {
    formRef.value?.resetFields()
    formData.state = EnableStatus.DISABLED
    closeModal()
  }
})


function handleSubmit() {
  formRef.value?.validate().then(async () => {
    addRole(formData)
  })
}




const isEnable = computed({
  get: () => Boolean(+formData.state),
  set: (newValue) => formData.state = newValue ? EnableStatus.ENABLED : EnableStatus.DISABLED
})


const labelCol: FormProps['labelCol'] = { span: 6 }
</script>
<template>
  <QModal v-model:open="modalStatus" title="新建角色" mask :closeable="true">
    <div class="add-role-modal-wrapper">
      <Form ref="formRef" :model="formData" :rules="rules" :label-col="labelCol">
        <FormItem label="角色名称" name="name">
          <Input v-model:value="formData.name" placeholder="请输入角色名称" />
        </FormItem>
        <FormItem label="启用">
          <Switch v-model:checked="isEnable" />
        </FormItem>
        <FormItem label="角色描述" name="description">
          <Textarea v-model:value="formData.description" placeholder="请输入角色描述" />
        </FormItem>
      </Form>
    </div>
    <template #footer>
      <Flex gap="middle" justify="center">
        <Button type="primary" @click="handleSubmit" :loading="addRoleLoading">确定</Button>
        <Button @click="closeModal()">取消</Button>
      </Flex>
    </template>
  </QModal>
</template>

<style scoped lang="less">
.add-role-modal-wrapper {
  padding: var(--spacing-large);
}
</style>