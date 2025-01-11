<script setup lang="ts">
import DepartmentService from '@/modules/department/services/department.service'
import { QModal } from '@/shared/components/base/modal'
import { QSkeleton } from '@/shared/components/base/skeleton'
import { useRequest } from '@/shared/composables/use-request/use-request'
import { Button, Flex, TabPane, Tabs } from 'ant-design-vue'
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import TabAttendance from './attendance.vue'
import TabDeduction from './deduction.vue'
import TabLeave from './leave.vue'
import TabOvertime from './overtime.vue'

defineOptions({
  name: 'AttendanceSettingModal',
})
const modalStatus = defineModel('open', { default: false })

const tabAttendanceRef = ref<InstanceType<typeof TabAttendance> | null>(null)
const tabLeaveRef = ref<InstanceType<typeof TabLeave> | null>(null)
const tabDeductionRef = ref<InstanceType<typeof TabDeduction> | null>(null)
const tabOvertimeRef = ref<InstanceType<typeof TabOvertime> | null>(null)
// 当前选中的tab
const activeKey = ref('attendance')

const { t } = useI18n()

const tabOptions = [
  {
    key: 'attendance',
    title: t('attendance.setting.tabs.attendance'),
    pane: TabAttendance,
  },
  {
    key: 'leave',
    title: t('attendance.setting.tabs.leave'),
    pane: TabLeave,
  },
  {
    key: 'deduction',
    title: t('attendance.setting.tabs.deduction'),
    pane: TabDeduction,
  },
  {
    key: 'overtime',
    title: t('attendance.setting.tabs.overtime'),
    pane: TabOvertime,
  },
]

const departmentOptions = ref()

const { run: getCompanyDepartmentList, loading: getCompanyDepartmentListLoading } = useRequest(
  DepartmentService.getCompanyDepartmentList,
  {
    manual: true,
    onSuccess: ({ data }) => {
      departmentOptions.value = data.map((item) => ({ label: item.name, value: item.id }))
    },
  },
)

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

const confirmLoading = ref(false)

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
    overtime: tabOvertimeRef,
  }

  const currentRef = refs[currentTab as keyof TabRefs]
  confirmLoading.value = true
  if (currentRef?.value?.handleSubmit) {
    await currentRef.value.handleSubmit()
    modalStatus.value = false
    confirmLoading.value = false
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
  <QModal
    :width="800"
    closable
    mask
    v-model:open="modalStatus"
    :title="t('attendance.setting.title')"
    :destroyOnClose="true"
  >
    <Tabs v-model:activeKey="activeKey">
      <TabPane v-for="pane in tabOptions" :key="pane.key" :tab="pane.title">
        <QSkeleton
          :loading="getCompanyDepartmentListLoading"
          active
          :paragraph="{
            rows: 8,
          }"
        >
          <component
            :departmentOptions="departmentOptions"
            :is="pane.pane"
            :ref="(el) => setComponentRef(el, pane.key)"
          >
          </component>
        </QSkeleton>
      </TabPane>
    </Tabs>
    <template #footer>
      <Flex justify="center">
        <Button @click="handleConfirm" type="primary" :loading="confirmLoading">{{
          t('attendance.setting.buttons.saveUpdate')
        }}</Button>
        <Button @click="handleCancel">{{ t('attendance.setting.buttons.cancel') }}</Button>
      </Flex>
    </template>
  </QModal>
</template>

<style scoped lang="scss"></style>
