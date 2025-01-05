<script setup lang="ts">
import { QModal } from '@/components/base/Modal';
import { useRequest } from '@/composables/use-request';
import DepartmentService from '@/services/department.service';
import { Button, Flex, TabPane, Tabs } from 'ant-design-vue';
import { onMounted, ref } from 'vue';
import TabAttendance from './attendance.vue';
import TabDeduction from './deduction.vue';
import TabLeave from './leave.vue';
import TabOvertime from './overtime.vue';
defineOptions({
  name: "AttendanceSettingModal"
})
const modalStatus = defineModel("open", { default: false })



const tabAttendanceRef = ref<InstanceType<typeof TabAttendance> | null>(null)
const tabLeaveRef = ref<InstanceType<typeof TabLeave> | null>(null)
const tabDeductionRef = ref<InstanceType<typeof TabDeduction> | null>(null)
const tabOvertimeRef = ref<InstanceType<typeof TabOvertime> | null>(null)
// 当前选中的tab
const activeKey = ref('attendance')

const tabOptions = [
  {
    key: "attendance",
    title: '出勤设置',
    pane: TabAttendance
  },
  {
    key: "leave",
    title: '请假设置',
    pane: TabLeave
  },
  {
    key: "deduction",
    title: '扣款设置',
    pane: TabDeduction
  },
  {
    key: "overtime",
    title: '加班设置',
    pane: TabOvertime
  }

]

const departmentOptions = ref()


const { run: getCompanyDepartmentList } = useRequest(DepartmentService.getCompanyDepartmentList, {
  manual: true,
  onSuccess: ({ data }) => {
    departmentOptions.value = data.map((item) => ({ label: item.name, value: item.id }))
  }
})


// 设置组件ref
const setComponentRef = (el: any, pane: string) => {
  switch (pane) {
    case 'attendance':
      tabAttendanceRef.value = el
      break
    case 'leave':
      tabLeaveRef.value = el
      break
    case 'deduction':
      tabDeductionRef.value = el
      break
    case 'overtime':
      tabOvertimeRef.value = el
      break
  }
}

// 修改类型定义
type TabRefs = {
  attendance: typeof tabAttendanceRef
  leave: typeof tabLeaveRef
  deduction: typeof tabDeductionRef
  overtime: typeof tabOvertimeRef
}

// 修改确认处理函数
const handleConfirm = async () => {
  const currentTab = activeKey.value
  const refs: TabRefs = {
    attendance: tabAttendanceRef,
    leave: tabLeaveRef,
    deduction: tabDeductionRef,
    overtime: tabOvertimeRef
  }

  const currentRef = refs[currentTab as keyof TabRefs]

  if (currentRef?.value?.handleSubmit) {
    await currentRef.value.handleSubmit()
    modalStatus.value = false
  }
}

const handleCancel = () => {
  modalStatus.value = false
}

onMounted(() => {
  getCompanyDepartmentList()
})

</script>

<template>
  <QModal closable mask v-model:open="modalStatus" title="设置" :destroyOnClose="true">
    <Tabs v-model:activeKey="activeKey">
      <TabPane v-for="pane in tabOptions" :key="pane.key" :tab="pane.title">
        <component :departmentOptions="departmentOptions" :is="pane.pane" :ref="(el) => setComponentRef(el, pane.key)">
        </component>
      </TabPane>
    </Tabs>
    <template #footer>
      <Flex justify="center">
        <Button @click="handleConfirm" type="primary">保存更新</Button>
        <Button @click="handleCancel">取消</Button>
      </Flex>
    </template>
  </QModal>
</template>

<style scoped lang="scss"></style>
