<script setup lang="ts">
import PermissionService from '@/modules/permission/services/permission.service'
import type { Permission } from '@/modules/permission/types'
import { QModal } from '@/shared/components/base/modal'
import { QSpin } from '@/shared/components/base/spin'
import { useAntdToken } from '@/shared/composables/use-antd-token'
import { useRequest } from '@/shared/composables/use-request/use-request'
import { OpenStatus } from '@/shared/constants/status'
import type { PermissionTableTreeNode } from '@/shared/utils/convert/types'
import {
  Button,
  Flex,
  Form,
  FormItem,
  Input,
  message,
  Switch,
  type FormInstance,
  type FormProps,
} from 'ant-design-vue'
import { computed, reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { isPermissionExistCode, isPermissionExistName } from '../utils/find-permission'

interface PermissionModalProps {
  permissionId?: number
  isEdit: boolean
  permissionTree: PermissionTableTreeNode[]
}

const modalStatus = defineModel('open', { default: false })
const props = defineProps<PermissionModalProps>()
const formRef = ref<FormInstance>()

const emits = defineEmits(['success'])

const permissionForm = reactive<Permission>({
  id: 0,
  name: '',
  code: '',
  description: '',
  enVisible: 0,
  type: 0,
  pid: 1,
})

const { t } = useI18n()

const modalTitle = computed(() =>
  props.isEdit ? t('permission.modal.title.edit') : t('permission.modal.title.add'),
)

const closeModal = () => {
  modalStatus.value = false
  formRef.value?.resetFields()
}

/**是否开启 */
const isOpenPermission = computed(() => permissionForm.enVisible === OpenStatus.OPENED)
/**切换开启状态 */
const handleChangeIsOpenPermission = () => {
  permissionForm.enVisible =
    permissionForm.enVisible === OpenStatus.OPENED ? OpenStatus.CLOSED : OpenStatus.OPENED
}

const permissionFormRules: FormProps['rules'] = {
  name: [
    { required: true, message: t('permission.modal.form.rules.name.required'), trigger: 'blur' },
    {
      validator: async (_, value) => {
        return new Promise((resolve, reject) => {
          if (props.isEdit) return resolve()
          const isExist = isPermissionExistName(props.permissionTree, value)
          if (isExist) reject(t('permission.modal.form.rules.name.exists'))
          return resolve()
        })
      },
      trigger: 'blur',
    },
    {
      max: 50,
      min: 2,
      message: t('permission.modal.form.rules.name.length'),
      trigger: 'blur',
    },
  ],
  code: [
    { required: true, message: t('permission.modal.form.rules.code.required'), trigger: 'blur' },
    {
      validator: async (_, value) => {
        return new Promise((resolve, reject) => {
          if (props.isEdit) return resolve()
          const isExist = isPermissionExistCode(props.permissionTree, value)
          if (isExist) reject(t('permission.modal.form.rules.code.exists'))
          resolve()
        })
      },
      trigger: 'blur',
    },
    {
      max: 50,
      min: 2,
      message: t('permission.modal.form.rules.code.length'),
      trigger: 'blur',
    },
  ],
}

const { run: updatePermission, loading: updatePermissionLoading } = useRequest(
  PermissionService.updatePermission,
  {
    manual: true,
    onSuccess: () => {
      message.success(t('permission.messages.editSuccess'))
      closeModal()
      emits('success')
    },
    onError: (error) => {
      message.error(error.message || t('permission.messages.editError'))
    },
    onFinally: () => {
      closeModal()
    },
  },
)

const { run: getPermissionById, loading: getPermissionByIdLoading } = useRequest(
  PermissionService.getPermissionById,
  {
    manual: true,
    onSuccess: ({ data }) => {
      Object.assign(permissionForm, data)
    },
  },
)

const { run: addPermission, loading: addPermissionLoading } = useRequest(
  PermissionService.addPermission,
  {
    manual: true,
    onSuccess: () => {
      message.success(t('permission.messages.addSuccess'))
      closeModal()
      emits('success')
    },
    onError: (error) => {
      message.error(error.message || t('permission.messages.addError'))
    },
  },
)

// confirm
const handleConfirm = async () => {
  if (!formRef.value) return
  formRef.value.validate().then(async (res) => {
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
      <Form layout="vertical" ref="formRef" class="permission-form" :rules="permissionFormRules"
        :model="permissionForm">
        <FormItem :label="t('permission.modal.form.fields.name')" name="name">
          <Input v-model:value="permissionForm.name" :placeholder="t('permission.modal.form.placeholder.name')" />
        </FormItem>
        <FormItem :label="t('permission.modal.form.fields.code')" name="code">
          <Input v-model:value="permissionForm.code" :placeholder="t('permission.modal.form.placeholder.code')" />
        </FormItem>
        <FormItem :label="t('permission.modal.form.fields.description')" name="description">
          <Input v-model:value="permissionForm.description"
            :placeholder="t('permission.modal.form.placeholder.description')" />
        </FormItem>
        <FormItem :label="t('permission.modal.form.fields.enable')" name="enVisible">
          <Switch :checked="isOpenPermission" @change="handleChangeIsOpenPermission" />
        </FormItem>
      </Form>
    </QSpin>

    <template #footer>
      <Flex justify="center" gap="small">
        <Button type="primary" @click="handleConfirm" :loading="loading">{{
          t('permission.modal.buttons.confirm')
        }}</Button>
        <Button @click="handleCancel">{{ t('permission.modal.buttons.cancel') }}</Button>
      </Flex>
    </template>
  </QModal>
</template>

<style scoped lang="less">
.permission {
  &-form {
    margin-block: v-bind('`${token.marginLG}px`');
    padding: v-bind('`${token.paddingLG}px`');
    border-radius: v-bind('`${token.borderRadiusLG}px`');
    background-color: v-bind('token.colorBgContainer');
  }
}
</style>
