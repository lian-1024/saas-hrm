<script setup lang="ts">
import AttendanceSettingService from '@/modules/attendance/services/attendance-setting.service';
import type { LeaveSetting, UpdateLeaveSettingParams } from '@/modules/attendance/types';
import { QSkeleton } from '@/shared/components/base/skeleton';
import { useRequest } from '@/shared/composables/use-request/use-request';
import { EnableStatus } from '@/shared/constants/status';
import { Form, FormItem, message, Select, Switch, Table, type FormProps, type SelectProps, type TableProps } from 'ant-design-vue';
import { onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps<{
  departmentOptions: SelectProps['options']
}>()

const { t } = useI18n()

const leaveTypeMap: Record<string, string> = {
  '60000': '年假',
  '60100': '事假',
  '60200': '病假',
  '60300': '婚假',
  '60400': '丧假',
  '60500': '产假',
  '60600': '奖励产假',
  '60700': '陪产假',
  '60800': '探亲假',
  '60900': '工伤假',
  '61000': '调休假',
  '61100': '产检假',
  '61200': '流产假',
  '61300': '长期病假'
}

const leaveTypeColumns: TableProps['columns'] = [
  {
    key: 'leaveType',
  },
  {
    title: t('attendance.settings.leave.name'),
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: t('attendance.settings.leave.isEnabled'),
    dataIndex: 'isEnable',
    key: 'isEnable'
  }
]




const selectedDepartmentId = ref()

const leaveSettingList = ref<UpdateLeaveSettingParams[]>()



const convertToLeaveSettingList = (data: LeaveSetting[]): UpdateLeaveSettingParams[] =>
  data.map(({ companyId, ...rest }) => ({
    ...rest,
    name: leaveTypeMap[rest.leaveType]
  }))

const { run: getLeaveSettingByDepartmentId, loading: getLeaveSettingByDepartmentIdLoading } = useRequest(AttendanceSettingService.getLeaveSettingByDepartmentId, {
  manual: true,
  onSuccess: ({ data }) => {
    console.log(data)
    leaveSettingList.value = convertToLeaveSettingList(data)
  }
})


// Switch 切换处理函数
const handleSwitchChange = (checked: boolean, record: Record<string, any>) => {
  record.isEnable = checked ? EnableStatus.ENABLED : EnableStatus.DISABLED
}


const { run: updateLeaveSetting } = useRequest(AttendanceSettingService.updateLeaveSetting, {
  manual: true,
  onSuccess: () => {
    message.success(t('attendance.settings.leave.messages.updateSuccess'))
  },
  onError: () => {
    message.error(t('attendance.settings.leave.messages.updateError'))
  }
})


const handleSubmit = async () => {
  console.log(leaveSettingList.value)
  await updateLeaveSetting(leaveSettingList.value)
}

watch(selectedDepartmentId, (newValue) => {
  getLeaveSettingByDepartmentId(newValue)
})

defineExpose({
  handleSubmit
})
onMounted(() => {
  if (!props.departmentOptions) return
  const departmentId = props.departmentOptions[0].value || 0
  selectedDepartmentId.value = +departmentId
  getLeaveSettingByDepartmentId(selectedDepartmentId.value)
})

const formLabelCol: FormProps['labelCol'] = { span: 4 }
const formWrapperCol: FormProps['wrapperCol'] = { span: 16 }

</script>

<template>
  <div>
    <Form :label-col="formLabelCol" :wrapper-col="formWrapperCol">
      <FormItem :label="t('attendance.settings.leave.department')" name="departmentId">
        <Select v-model:value="selectedDepartmentId" :options="departmentOptions" />
      </FormItem>
    </Form>
    <QSkeleton :title="false" active :loading="getLeaveSettingByDepartmentIdLoading" :paragraph="{
      rows: 8
    }">
      <Table :pagination="false" :columns="leaveTypeColumns" :data-source="leaveSettingList">
        <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'isEnable'">
            <Switch :checked="Boolean(record.isEnable)"
              @change="(checked) => handleSwitchChange(Boolean(checked), record)" />
          </template>
        </template>
      </Table>
    </QSkeleton>
  </div>
</template>

<style scoped lang="scss"></style>
