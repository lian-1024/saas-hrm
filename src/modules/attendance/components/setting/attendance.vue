<script setup lang="ts">
import AttendanceSettingService from '@/modules/attendance/services/attendance-setting.service';
import type { UpdateAttendanceSettingParams } from '@/modules/attendance/types';
import { QSkeleton } from '@/shared/components/base/skeleton';
import { useRequest } from '@/shared/composables/use-request/use-request';
import { DatePicker, Flex, Form, FormItem, message, Select, type FormInstance, type FormProps, type SelectProps } from 'ant-design-vue';
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

defineOptions({
  name: "TabAttendance"
})


const props = defineProps<{
  departmentOptions: SelectProps['options']
}>()


const formRules: FormProps['rules'] = {
  departmentId: [
    { required: true, message: t('attendance.settings.attendance.rules.selectDepartment') }
  ]
};

const formRef = ref<FormInstance>()
const selectedDepartmentId = ref<number>(1)

const formState = reactive<UpdateAttendanceSettingParams>({
  morningStartTime: "",
  morningEndTime: "",
  afternoonStartTime: "",
  afternoonEndTime: "",
  departmentId: selectedDepartmentId.value,
  id: 1,
  companyId: 1
})


const formLabelCol: FormProps['labelCol'] = { span: 4 }
const formWrapperCol: FormProps['wrapperCol'] = { span: 16 }



const { run: getAttendanceSettingById, loading: getAttendanceSettingLoading } = useRequest(AttendanceSettingService.getAttendanceSettingById, {
  manual: true,
  onSuccess: ({ data }) => {
    Object.assign(formState, data)

  },
  onError: (message) => {
    console.log("message", message)
  }
})

const { run: updateAttendanceSetting } = useRequest(AttendanceSettingService.updateAttendanceSetting, {
  manual: true,
  onSuccess: () => {
    message.success(t('attendance.settings.attendance.messages.updateSuccess'));
    formRef.value?.resetFields()
  },
  onError: (error) => {
    message.error(t('attendance.settings.attendance.messages.updateError'))
  }
})

const validateDate = computed(() => {
  // 检查所有时间是否都已输入
  return Boolean(
    formState.morningStartTime &&
    formState.morningEndTime &&
    formState.afternoonStartTime &&
    formState.afternoonEndTime
  )
})

watch(() => selectedDepartmentId.value, (newVal) => {
  formState.departmentId = newVal
  getAttendanceSettingById(newVal)
})

onMounted(() => {
  if (!props.departmentOptions) return
  const departmentId = props.departmentOptions[0].value || 0
  selectedDepartmentId.value = +departmentId
  getAttendanceSettingById(selectedDepartmentId.value)
})

const handleSubmit = () => {
  if (!formRef.value) return
  if (!validateDate.value) return
  formRef.value.validateFields().then(() => updateAttendanceSetting({ ...formState, companyId: +formState.companyId }))
}


defineExpose({
  handleSubmit
})


</script>

<template>
  <Form ref="formRef" :label-col="formLabelCol" :model="formState" :wrapper-col="formWrapperCol" :rules="formRules">
    <FormItem :label="t('attendance.settings.attendance.department')" :model="formState" name="departmentId">
      <Select :options="departmentOptions" v-model:value="selectedDepartmentId" />
    </FormItem>
    <QSkeleton :title="false" active :loading="getAttendanceSettingLoading" :paragraph="{
      rows: 8
    }">
      <FormItem :label="t('attendance.settings.attendance.attendanceTime')"
        :validate-status="validateDate ? 'success' : 'error'"
        :help="validateDate ? '' : t('attendance.settings.attendance.rules.selectDate')">
        <Flex gap="middle" vertical>
          <Flex gap="small" align="center">
            <DatePicker picker="time" value-format="HH:mm:ss" v-model:value="formState.morningStartTime" />
            -
            <DatePicker picker="time" value-format="HH:mm:ss" v-model:value="formState.morningEndTime" />
          </Flex>
          <Flex gap="small" align="center">
            <DatePicker picker="time" value-format="HH:mm:ss" v-model:value="formState.afternoonStartTime" />
            -
            <DatePicker picker="time" value-format="HH:mm:ss" v-model:value="formState.afternoonEndTime" />
          </Flex>
        </Flex>
      </FormItem>
    </QSkeleton>
  </Form>
</template>

<style scoped lang="scss"></style>
