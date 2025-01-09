<script setup lang="ts">
import PermissionService from '@/modules/permission/services/permission.service';
import type { Permission } from '@/modules/permission/types';
import { QModal } from '@/shared/components/base/modal';
import { QSpin } from '@/shared/components/base/spin';
import { useRequest } from '@/shared/composables/use-request/use-request';
import { OpenStatus } from '@/shared/constants/status';
import type { PermissionTableTreeNode } from '@/shared/utils/convert/types';
import { Button, Flex, Form, FormItem, Input, message, Switch, type FormInstance, type FormProps } from 'ant-design-vue';
import { computed, reactive, ref, watch } from 'vue';
import { isPermissionExistCode, isPermissionExistName } from '../utils/find-permission';
import { useAntdToken } from '@/shared/composables/use-antd-token';
interface PermissionModalProps {
  permissionId: number
  isEdit: boolean,
  permissionTree: PermissionTableTreeNode[]
}

const modalStatus = defineModel("open", { default: false })
const props = defineProps<PermissionModalProps>()
const formRef = ref<FormInstance>()


const emits = defineEmits(['success'])


const permissionForm = reactive<Permission>({
  id: 0,
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

const closeModal = () => {
  modalStatus.value = false
  formRef.value?.resetFields()
}



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
          if (props.isEdit) return resolve()
          const isExist = isPermissionExistName(props.permissionTree, value)
          console.log("isExist", isExist);
          if (isExist) reject('权限名称已存在')
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
          if (props.isEdit) return resolve()
          const isExist = isPermissionExistCode(props.permissionTree, value)
          console.log("isExist", isExist);

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

const { run: updatePermission, loading: updatePermissionLoading } = useRequest(PermissionService.updatePermission, {
  manual: true,
  onSuccess: () => {
    message.success("编辑权限点成功")
    closeModal()
    emits('success')
  },
  onError: (error) => {
    message.error(error.message || "编辑权限点失败")
  },
  onFinally: () => {
    closeModal()
  }
})

const { run: getPermissionById, loading: getPermissionByIdLoading } = useRequest(PermissionService.getPermissionById, {
  manual: true,
  onSuccess: ({ data }) => {
    Object.assign(permissionForm, data)
  }
})


const { run: addPermission, loading: addPermissionLoading } = useRequest(PermissionService.addPermission, {
  manual: true,
  onSuccess: () => {
    message.success("新增权限点成功")
    closeModal()
    emits('success')
  }
})


// confirm 
const handleConfirm = async () => {
  if (!formRef.value) return
  formRef.value.validate().then(async res => {
    if (props.isEdit) {
      await updatePermission({ ...permissionForm })
    } else {
      const { id, ...rest } = permissionForm
      await addPermission({ ...rest, pid: props.permissionId })
    }
  })

}

const handleCancel = () => closeModal()


const loading = computed(() => addPermissionLoading.value || updatePermissionLoading.value)

watch([modalStatus, () => props.permissionId], ([modalStatus, permissionId]) => {

  props.isEdit && modalStatus && permissionId && getPermissionById(permissionId)
})

const { token } = useAntdToken()
</script>

<template>
  <QModal mask v-model:open="modalStatus" @cancel="handleCancel" :title="modalTitle" closable>
    <QSpin :spinning="getPermissionByIdLoading">
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
    </QSpin>

    <template #footer>
      <Flex justify="center" gap="small">
        <Button type="primary" @click="handleConfirm" :loading="loading">确定</Button>
        <Button @click="handleCancel">取消</Button>
      </Flex>
    </template>
  </QModal>
</template>

<style scoped lang="scss">
.permission {
  &-form {
    margin-block: v-bind("`${token.marginLG}px`");
    padding: v-bind("`${token.paddingLG}px`");
    border-radius: v-bind("`${token.borderRadiusLG}px`");
    background-color: v-bind("token.colorBgContainer");
  }
}
</style>