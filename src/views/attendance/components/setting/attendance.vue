<script setup lang="ts">
import type { AttendanceSettingDTO } from '@/types/attendance';
import { DatePicker, Flex, Form, FormItem, Select, type FormProps } from 'ant-design-vue';
import { reactive, ref } from 'vue';
defineOptions({
  name: "TabAttendance"
})


const handleSubmit = () => {
  console.log("submit TabAttendance");

}

const departmentOptions = ref([
  { label: '部门1', value: 1 },
  { label: '部门2', value: 2 },
  { label: '部门3', value: 3 }
])

const formState = reactive<AttendanceSettingDTO>({
  morningStartTime: "08:45:00",
  morningEndTime: "12:00:00",
  afternoonStartTime: "13:30:00",
  afternoonEndTime: "17:45:00",
  departmentId: 1,
  id: 1,
  companyId: 1
})

const formLabelCol: FormProps['labelCol'] = { span: 4 }
const formWrapperCol: FormProps['wrapperCol'] = { span: 16 }

defineExpose({
  handleSubmit
})

</script>

<template>
  <Form :label-col="formLabelCol" :wrapper-col="formWrapperCol">
    <FormItem label="部门" :model="formState">
      <Select :options="departmentOptions" v-model:value="formState.departmentId" />
    </FormItem>
    <FormItem label="出勤时间">
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
