<script setup lang="ts">
import { QModal } from '@/components/base/Modal';
import { useRequest } from '@/composables/use-request';
import RoleService from '@/services/role.service';
import type { AddRoleParams } from '@/types/api/role';
import { Button, Flex, Form, FormItem, Input, message, Switch, Textarea, type FormInstance, type FormProps, type SwitchProps } from 'ant-design-vue';
import { computed, ref } from 'vue';

const modalStatus = defineModel('open', { default: false })
const emits = defineEmits(['confirm'])
const formRef = ref<FormInstance>();
const formData = ref<AddRoleParams>({
  name: '',
  state: 0,
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
    emits("confirm")
  },
  onError: (error) => {
    if (error.message) {
      message.error(error.message)
    } else {
      message.error(error)
    }
  },
  onFinally: () => {
    closeModal()
    formRef.value?.resetFields()
    formData.value.state = 0
  }
})


function handleSubmit() {
  formRef.value?.validate().then(async () => {
    addRole(formData.value)
  })
}


const handleSwitchChange: SwitchProps['onChange'] = (checked) => {
  formData.value.state = checked ? 1 : 0
}

const isEnable = computed(() => formData.value.state === 1)

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
          <Switch :checked="isEnable" @change="handleSwitchChange" />
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