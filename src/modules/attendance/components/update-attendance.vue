<script lang="ts" setup>
import { QModal } from '@components/base/modal'
import { QSkeleton } from '@components/base/skeleton'
import { useRequest } from '@composables/use-request/use-request'
import dayjs from '@core/plugins/dayjs'
import AttendanceService from '@modules/attendance/services/attendance.service'
import type { AttendanceAdtStatu } from '@modules/attendance/types'
import { Button, message, Radio, Space, TypographyText } from 'ant-design-vue'
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  day: string
  adtStatu: number
  userId: number
  departmentId: number
}>()

const emits = defineEmits(['update'])

const openStatus = defineModel('open', { default: false })
// 使用watch监听props.adtStatu的变化来更新selectedStatus
const selectedStatus = ref(0)
watch(
  () => props.adtStatu,
  (newValue) => {
    selectedStatus.value = newValue
  },
)
const statusRadioList = ref<{ label: string; value: number }[]>([])

// 将考勤状态列表扁平化
const flatAttendanceAdtStatusList = (data: AttendanceAdtStatu[]) => {
  return data
    .map((item) => Object.entries(item))
    .flat()
    .map((item) => {
      const [value, label] = item
      return {
        label,
        value: Number(value),
      }
    })
}

// 获取考勤状态列表
const { run: getAttendancesAdtStatuList, loading: getAttendancesAdtStatuListLoading } = useRequest(
  AttendanceService.getAttendancesAdtStatuList,
  {
    manual: true,
    onSuccess: ({ data }) => {
      statusRadioList.value = flatAttendanceAdtStatusList(data)
    },
  },
)

const { t } = useI18n()

const { run: updateAttendance, loading: updateAttendanceLoading } = useRequest(
  AttendanceService.updateAttendance,
  {
    manual: true,
    onSuccess: () => {
      message.success(t('attendance.updateModal.messages.updateSuccess'))
      openStatus.value = false
      emits('update')
    },
    onError: () => {
      message.error(t('attendance.updateModal.messages.updateError'))
    },
  },
)

// 监听用户ID变化，获取考勤状态列表
watch(
  () => props.userId,
  (newValue) => {
    console.log('newValue', newValue)
    if (newValue) {
      getAttendancesAdtStatuList(newValue)
    }
  },
)

const handleConfirm = () => {
  updateAttendance(props.userId, {
    adtStatu: selectedStatus.value,
    day: dayjs(props.day).format('YYYYMMDD'),
    departmentId: props.departmentId,
    userId: props.userId,
  })
}

const handleCancel = () => {
  openStatus.value = false
}
</script>

<template>
  <QModal v-model:open="openStatus" mask>
    <template #title>
      <TypographyText>{{ t('attendance.updateModal.title', { date: day }) }}</TypographyText>
    </template>

    <div class="attendance-status">
      <p class="status-note">{{ t('attendance.updateModal.note') }}</p>

      <QSkeleton
        :loading="getAttendancesAdtStatuListLoading"
        active
        :title="false"
        :paragraph="{
          rows: 8,
        }"
      >
        <Radio.Group v-model:value="selectedStatus">
          <div class="attendance-status-radio-list">
            <Radio v-for="item in statusRadioList" :key="item.value" :value="item.value">
              {{ item.label }}
            </Radio>
          </div>
        </Radio.Group>
      </QSkeleton>
    </div>

    <template #footer>
      <Space>
        <Button @click="handleCancel">{{ t('attendance.updateModal.buttons.cancel') }}</Button>
        <Button type="primary" :loading="updateAttendanceLoading" @click="handleConfirm">{{
          t('attendance.updateModal.buttons.confirm')
        }}</Button>
      </Space>
    </template>
  </QModal>
</template>

<style lang="less" scoped>
.attendance-status {
  padding: 24px;

  .status-note {
    color: #ff4d4f;
    margin-bottom: 16px;
  }

  .attendance-status-radio-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-middle);
  }
}
</style>
