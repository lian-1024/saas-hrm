<script lang="ts" setup>
import { QModal } from '@/shared/components/base/modal';
import { useAntdToken } from '@/shared/composables/use-antd-token';
import { useTheme } from '@/shared/composables/use-theme';
import { MESSAGE_LEVEL } from '@/shared/constants/message';
import { useRequest } from '@shared/composables/use-request';
import { Flex, Form, Input, message, Select, Tag, type FormInstance } from 'ant-design-vue';
import { computed, reactive, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import EmployeeService from '../services/employee.service';
import { type EmployeeVO } from '../types';


const modalStatus = defineModel<boolean>("open", { default: false })

interface EmployeeOption extends Pick<EmployeeVO, 'id' | 'username'> { }


const props = defineProps<{
  employees: EmployeeOption[]
}>()




const { token } = useAntdToken()
const { isDark } = useTheme()

const employees = ref<EmployeeOption[]>(props.employees)

watch([() => props.employees, () => modalStatus.value], ([newVal, open]) => {
  if (open) {
    employees.value = convertEmployee(newVal)
  }
})

const convertEmployee = (employee: EmployeeOption[]) => {
  return employee.map(item => ({
    id: item.id,
    username: `@${item.username}`,
  }))
}


const handleRemoveEmployee = (id: string | number) => {
  employees.value = employees.value.filter(item => item.id !== id)
}

const { t } = useI18n()

const messageLevelOptions = computed(() => [
  {
    label: t('common.message.level.notification'),
    value: MESSAGE_LEVEL.NOTIFICATION,
  },
  {
    label: t('common.message.level.tips'),
    value: MESSAGE_LEVEL.TIPS,
  },
  {
    label: t('common.message.level.important'),
    value: MESSAGE_LEVEL.IMPORTANT,
  },
  {
    label: t('common.message.level.urgent'),
    value: MESSAGE_LEVEL.URGENT,
  },
])

const fromData = reactive({
  type: MESSAGE_LEVEL.NOTIFICATION,
  content: '',
})

const formRef = ref<FormInstance>()


const formRules = {
  type: [{ required: true, message: t('employee.massNotification.rules.messageLevel') }],
  content: [{ required: true, message: t('employee.massNotification.rules.content') }],
}

const closeModal = () => {

  modalStatus.value = false
  if (formRef.value) {
    formRef.value.resetFields()
    employees.value = []
  }
}

const { run: massNotification, loading: massNotificationLoading } = useRequest(
  EmployeeService.massNotification,
  {
    manual: true,
    onSuccess: () => {
      message.success(t('employee.messages.massNotificationSuccess'))
      closeModal()
    },
    onError: ({ message }) => {
      message.error(message || t('employee.messages.massNotificationError'))
    }
  },
)

const handleSubmit = async () => {

  if (!formRef.value) return
  // 表单验证
  await formRef.value.validate().then((res) => {
    massNotification({
      ...fromData,
      userIds: employees.value.map(item => item.id),
    })
  })
}
const handleCancel = () => {
  closeModal()
}
</script>

<template>
  <QModal :title="t('employee.massNotification.title')" v-model:open="modalStatus"
    :confirm-loading="massNotificationLoading" @ok="handleSubmit" @cancel="handleCancel" mask>
    <Flex vertical>
      <Flex wrap="wrap" gap="small" class="mass-selected-employee">
        <Tag :color="isDark ? 'default' : 'processing'" v-for="item in employees" :key="item.id" closable
          @close="handleRemoveEmployee(item.id)">{{ item.username }}</Tag>
      </Flex>
    </Flex>
    <Form :rules="formRules" ref="formRef" :model="fromData">
      <Form.Item :label="t('employee.massNotification.messageLevel')" name="type">
        <Select v-model:value="fromData.type" :options="messageLevelOptions" />
      </Form.Item>
      <Form.Item :label="t('employee.massNotification.content')" name="content">
        <Input.TextArea v-model:value="fromData.content" :placeholder="t('employee.massNotification.rules.content')" />
      </Form.Item>
    </Form>
  </QModal>
</template>

<style lang="less" scoped>
.mass-selected-employee {

  margin-bottom: v-bind('`${token.margin}px`');
  padding: v-bind('`${token.padding}px`');
  border: 1px solid v-bind('token.colorBorder');
  border-radius: v-bind('`${token.borderRadiusLG}px`');
}
</style>