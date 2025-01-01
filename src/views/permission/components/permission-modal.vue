<script setup lang="ts">
import { QModal } from '@/components/base/Modal';
import type { CreatePermissionParams } from '@/types/api/permission';
import { Button, Flex, Form, FormItem, Input, Switch, type FormProps } from 'ant-design-vue';
import { computed, reactive } from 'vue';

interface PermissionModalProps {
  permissionId: number
  isEdit: boolean,
}

const modalStatus = defineModel("open", { default: false })
const props = defineProps<PermissionModalProps>()


const permissionForm = reactive<CreatePermissionParams>({
  name: "",
  code: "",
  description: "",
  enVisible: "0",
  type: 0,
  pid: 1
})

const handleChangeEnablePermission = () => permissionForm.enVisible == '1' ? permissionForm.enVisible = '0' : permissionForm.enVisible = '1'

const enablePermission = computed(() => permissionForm.enVisible === '1')

const formLabelCol: FormProps['labelCol'] = { span: 6 }
const formWrapperCol: FormProps['wrapperCol'] = { span: 18 }

const modalTitle = computed(() => props.isEdit ? "编辑权限点" : "新增权限点")

const handleEditPermission = () => {
  console.log("Edit ID:", props.permissionId);

  console.log("编辑");
}

const handleAddPermission = () => {
  console.log("新增");

}

// confirm 
const handleConfirm = () => {
  if (props.isEdit) {
    handleEditPermission()
  } else {
    handleAddPermission()
  }
  modalStatus.value = false
}

const handleCancel = () => modalStatus.value = false

</script>

<template>
  <QModal v-model:open="modalStatus" @cancel="handleCancel" :title="modalTitle" closable>
    <Form class="permission-form" :model="permissionForm" :label-col="formLabelCol" :wrapper-col="formWrapperCol">
      <FormItem label="权限名称" name="name">
        <Input v-model:value="permissionForm.name" placeholder="请输入权限名称" />
      </FormItem>
      <FormItem label="权限标识" name="code">
        <Input v-model:value="permissionForm.name" placeholder="请输入权限标识" />
      </FormItem>
      <FormItem label="权限描述" name="description">
        <Input v-model:value="permissionForm.name" placeholder="请输入权限描述" />
      </FormItem>
      <FormItem label="开启" name="description">
        <Switch v-model:checked="enablePermission" @change="handleChangeEnablePermission" />
      </FormItem>
    </Form>

    <template #footer>
      <Flex justify="center" gap="small">
        <Button type="primary" @click="handleConfirm">确定</Button>
        <Button @click="handleCancel">取消</Button>
      </Flex>
    </template>
  </QModal>
</template>

<style scoped lang="scss">
.permission {
  &-form {
    padding-inline: var(--spacing-small)
  }
}
</style>