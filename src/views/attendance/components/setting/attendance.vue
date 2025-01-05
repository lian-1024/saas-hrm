<script setup lang="ts">
import { useRequest } from '@/composables/use-request';
import AttendanceSettingService from '@/services/attendance-setting.service';
import DepartmentService from '@/services/department.service';
import type { UpdateAttendanceSettingParams } from '@/types/api/attendance';
import { DatePicker, Flex, Form, FormItem, message, Select, type FormInstance, type FormProps } from 'ant-design-vue';
import { computed, onMounted, reactive, ref } from 'vue';

defineOptions({
  name: "TabAttendance"
})




const departmentOptions = ref()

const formRules: FormProps['rules'] = {
  departmentId: [
    { required: true, message: '请选择部门' }
  ]
};

const formRef = ref<FormInstance>()

const formState = reactive<UpdateAttendanceSettingParams>({
  morningStartTime: "",
  morningEndTime: "",
  afternoonStartTime: "",
  afternoonEndTime: "",
  departmentId: 1,
  id: 1,
  companyId: 1
})

const formLabelCol: FormProps['labelCol'] = { span: 4 }
const formWrapperCol: FormProps['wrapperCol'] = { span: 16 }

const { run: getCompanyDepartmentList } = useRequest(DepartmentService.getCompanyDepartmentList, {
  manual: true,
  onSuccess: ({ data }) => {

    departmentOptions.value = data.map((item) => ({ label: item.name, value: item.id }))
    formState.companyId = data[0].id
  }
})

const { run: getAttendanceSettingById } = useRequest(AttendanceSettingService.getAttendanceSettingById, {
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
    message.success("更新考勤设置成功");
    formRef.value?.resetFields()
    
  },
  onError: (error) => {
    message.error("更新考勤设置失败")
  }
})






onMounted(async () => {
  try {
    await getCompanyDepartmentList()

    getAttendanceSettingById(formState.departmentId)
  } catch {
    message.error("似乎有些小问题")
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
    <FormItem label="部门" :model="formState" name="departmentId">
      <Select :options="departmentOptions" v-model:value="formState.departmentId" />
    </FormItem>
    <FormItem label="出勤时间" :validate-status="validateDate ? 'success' : 'error'" :help="validateDate ? '' : '请选择日期'">
      <Flex gap="middle" vertical>
        <Flex gap="small" align="center">
          <DatePicker picker="time" valueFormat="HH:mm:ss" v-model:value="formState.morningStartTime" />
          -
          <DatePicker picker="time" valueFormat="HH:mm:ss" v-model:value="formState.morningEndTime" />
        </Flex>
        <Flex gap="small" align="center">
          <DatePicker picker="time" valueFormat="HH:mm:ss" v-model:value="formState.afternoonStartTime" />
          -
          <DatePicker picker="time" valueFormat="HH:mm:ss" v-model:value="formState.afternoonEndTime" />
        </Flex>
      </Flex>
    </FormItem>
  </Form>
</template>

<style scoped lang="scss"></style>
