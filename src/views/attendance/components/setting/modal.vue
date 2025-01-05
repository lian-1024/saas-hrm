<script setup lang="ts">
import { QModal } from '@/components/base/Modal';
import { Button, Flex, TabPane, Tabs } from 'ant-design-vue';
import { ref } from 'vue';
import TabAskForLeave from './ask-for-leave.vue';
import TabAttendance from './attendance.vue';
import TabDeduction from './deduction.vue';
import TabOvertime from './overtime.vue';


defineOptions({
  name: "AttendanceSettingModal"
})
const modalStatus = defineModel("open", { default: false })



const tabAttendanceRef = ref<InstanceType<typeof TabAttendance> | null>(null)
const tabAskForLeaveRef = ref<InstanceType<typeof TabAskForLeave> | null>(null)
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
    key: "askForLeave",
    title: '请假设置',
    pane: TabAskForLeave
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

// 设置组件ref
const setComponentRef = (el: any, pane: string) => {
  switch (pane) {
    case 'attendance':
      tabAttendanceRef.value = el
      break
    case 'askForLeave':
      tabAskForLeaveRef.value = el
      break
    case 'deduction':
      tabDeductionRef.value = el
      break
    case 'overtime':
      tabOvertimeRef.value = el
      break
  }
}

// 确认保存
const handleConfirm = async () => {
  // 获取当前选中的tab
  const currentTab = activeKey.value
  const refs = {
    attendance: tabAttendanceRef,
    askForLeave: tabAskForLeaveRef,
    deduction: tabDeductionRef,
    overtime: tabOvertimeRef
  }
  // 获取当前选中的tab的ref
  const currentRef = refs[currentTab as keyof typeof refs]

  // 调用当前选中的tab的handleSubmit方法
  if (currentRef?.value?.handleSubmit) {
    await currentRef.value.handleSubmit()
    modalStatus.value = false
  }
}
</script>

<template>
  <QModal closable mask v-model:open="modalStatus" title="设置">
    <Tabs v-model:activeKey="activeKey">
      <TabPane v-for="pane in tabOptions" :key="pane.key" :tab="pane.title">
        <component :is="pane.pane" :ref="(el) => setComponentRef(el, pane.key)"></component>
      </TabPane>
    </Tabs>
    <template #footer>
      <Flex justify="center">
        <Button @click="handleConfirm" type="primary">保存更新</Button>
        <Button>取消</Button>
      </Flex>
    </template>
  </QModal>
</template>

<style scoped lang="scss"></style>
