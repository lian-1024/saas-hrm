<script setup lang="ts">
import { QModal } from '@/components/base/Modal';
import { useRequest } from '@/composables/use-request';
import { OpenStatus } from '@/constants/common';
import PermissionService from '@/services/permission.service';
import type { Permission, PermissionVO } from '@/types/api/permission';
import { Button, Flex, Form, FormItem, Input, message, Switch, type FormInstance, type FormProps } from 'ant-design-vue';
import { computed, reactive, ref } from 'vue';

interface PermissionModalProps {
  permissionId: number
  isEdit: boolean,
  permissionList: PermissionVO[]
}

const modalStatus = defineModel("open", { default: false })
const props = defineProps<PermissionModalProps>()
const formRef = ref<FormInstance>()


const permissionForm = reactive<Omit<Permission, 'id'>>({
  name: "",
  code: "",
  description: "",
  enVisible: 0,
  type: 0,
  pid: 1
})


const formLabelCol: FormProps['labelCol'] = { span: 6 }
const formWrapperCol: FormProps['wrapperCol'] = { span: 18 }

const modalTitle = computed(() => props.isEdit ? "编辑权限点" : "新增权限点")

const closeModal = () => modalStatus.value = false



/**是否开启 */
const isOpenPermission = computed(() => permissionForm.enVisible === OpenStatus.OPENED)
/**切换开启状态 */
const handleChangeIsOpenPermission = () => {
  permissionForm.enVisible = permissionForm.enVisible === OpenStatus.OPENED ? OpenStatus.CLOSED : OpenStatus.OPENED
}

const permissionFormRules: FormProps['rules'] = {
  name: [
    { required: true, message: '请输入权限名称', trigger: 'blur' },
    {
      validator: async (_, value) => {
        return new Promise((resolve, reject) => {
          const isExist = props.permissionList.filter(item => item.name === value).length > 0
          if (isExist) reject('权限名称已存在')

          if (value.length < 2 || value.length > 50) {
            return reject('');
          }
          return resolve();
        })
      },
      trigger: 'blur'
    },
    {
      max: 50,
      min: 2,
      message: "权限名称长度应为2-50个字符",
      trigger: 'blur'
    }
  ],
  code: [
    { required: true, message: '请输入权限标识', trigger: 'blur' },
    {
      validator: async (_, value) => {
        return new Promise((resolve, reject) => {
          const isExist = props.permissionList.filter(item => item.code === value).length > 0
          if (isExist) reject('权限标识已存在')
          resolve();
        })
      },
      trigger: 'blur'
    },
    {
      max: 50,
      min: 2,
      message: "权限标识长度应为2-50个字符",
      trigger: 'blur'
    }
  ]

};
const handleEditPermission = () => {
  console.log("Edit ID:", props.permissionId);

  console.log("编辑");
}

const handleAddPermission = async () => {

}

const { run: addPermission } = useRequest(PermissionService.addPermission, {
  manual: true,
  onSuccess: () => {
    message.success("新增权限点成功")
    closeModal()
  }
})

const { } = useRequest(PermissionService)

// confirm 
const handleConfirm = async () => {
  if (!formRef.value) return
  formRef.value.validate().then(async res => {
    console.log("res:", res);
    if (props.isEdit) {
      handleEditPermission()
    } else {
      await addPermission(res)
    }
  })

}

const handleCancel = () => modalStatus.value = false
</script>

<template>
  <QModal v-model:open="modalStatus" @cancel="handleCancel" :title="modalTitle" closable>
    <Form ref="formRef" class="permission-form" :rules="permissionFormRules" :model="permissionForm"
      :label-col="formLabelCol" :wrapper-col="formWrapperCol">
      <FormItem label="权限名称" name="name">
        <Input v-model:value="permissionForm.name" placeholder="请输入权限名称" />
      </FormItem>
      <FormItem label="权限标识" name="code">
        <Input v-model:value="permissionForm.code" placeholder="请输入权限标识" />
      </FormItem>
      <FormItem label="权限描述" name="description">
        <Input v-model:value="permissionForm.description" placeholder="请输入权限描述" />
      </FormItem>
      <FormItem label="开启" name="enVisible">
        <Switch :checked="isOpenPermission" @change="handleChangeIsOpenPermission" />
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