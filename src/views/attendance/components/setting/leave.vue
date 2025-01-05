<script setup lang="ts">
import { useRequest } from '@/composables/use-request';
import { EnableStatus } from '@/constants/common';
import AttendanceSettingService from '@/services/attendance-setting.service';
import type { LeaveSetting, UpdateLeaveSettingParams } from '@/types/api/attendance';
import { Form, FormItem, message, Select, Switch, Table, type SelectProps, type TableProps } from 'ant-design-vue';
import { computed, onMounted, ref } from 'vue';
const props = defineProps<{
  departmentOptions: SelectProps['options']
}>()

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
    title: '请假名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '是否可用',
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

const { run: getLeaveSettingByDepartmentId } = useRequest(AttendanceSettingService.getLeaveSettingByDepartmentId, {
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
    message.success('更新请假设置成功')
  },
  onError: () => {
    message.error('更新请假设置失败')
  }
})


const handleSubmit = () => {
  console.log(leaveSettingList.value)
  updateLeaveSetting(leaveSettingList.value)
}


const isEnable = computed(() => (isEnable: number) => isEnable === EnableStatus.ENABLED)



defineExpose({
  handleSubmit
})
onMounted(() => {
  if (!props.departmentOptions) return
  const departmentId = props.departmentOptions[0].value || 0
  selectedDepartmentId.value = +departmentId
  getLeaveSettingByDepartmentId(selectedDepartmentId.value)
})

</script>

<template>
  <div>
    <Form>
      <FormItem label="部门" name="departmentId">
        <Select v-model:value="selectedDepartmentId" :options="departmentOptions" />
      </FormItem>
    </Form>
    <Table :pagination="false" :columns="leaveTypeColumns" :data-source="leaveSettingList">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'isEnable'">
          <Switch :checked="isEnable(record.isEnable)"
            @change="(checked) => handleSwitchChange(Boolean(checked), record)" />
        </template>
      </template>
    </Table>
  </div>
</template>

<style scoped lang="scss"></style>
