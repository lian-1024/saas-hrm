<script lang="ts" setup>
import { QModal } from '@/components/base/Modal'
import { useRequest } from '@/composables/use-request'
import AttendanceService from '@/services/attendance.service'
import type { AttendanceAdtStatu } from '@/types/api'
import dayjs from '@/utils/dayjs'
import { Button, message, Radio, Space, TypographyText, type RadioGroupProps } from 'ant-design-vue'
import { ref, watch } from 'vue'

const props = defineProps<{
  day: string,
  adtStatu: number,
  userId: number,
  departmentId: number
}>()

const emits = defineEmits(['update'])

const openStatus = defineModel("open", { default: false })
// 使用watch监听props.adtStatu的变化来更新selectedStatus
const selectedStatus = ref(0)
watch(() => props.adtStatu, (newValue) => {
  selectedStatus.value = newValue
})
const statusRadioList = ref<RadioGroupProps['options']>([])

// 将考勤状态列表扁平化
const flatAttendanceAdtStatusList = (data: AttendanceAdtStatu[]) => {
  return data.map(item => Object.entries(item)).flat().map(item => {
    const [value, label] = item
    return {
      label,
      value: Number(value)
    }
  })
}

// 获取考勤状态列表
const { run: getAttendancesAdtStatuList } = useRequest(AttendanceService.getAttendancesAdtStatuList, {
  manual: true,
  onSuccess: ({ data }) => {
    statusRadioList.value = flatAttendanceAdtStatusList(data)

  }
})


const { run: updateAttendance } = useRequest(AttendanceService.updateAttendance, {
  manual: true,
  onSuccess: () => {
    message.success('更新考勤状态成功')
    openStatus.value = false
    emits('update')
  },
  onError: () => {
    message.error('更新考勤状态失败')
  }
})

// 监听用户ID变化，获取考勤状态列表
watch(() => props.userId, (newValue) => {
  console.log("newValue", newValue)
  if (newValue) {
    getAttendancesAdtStatuList(newValue)
  }
})

const handleConfirm = () => {
  // TODO: 调用更新考勤状态的接口
  // openStatus.value = false
  console.log("selectedStatus", selectedStatus.value)
  updateAttendance(props.userId, {
    adtStatu: selectedStatus.value,
    day: dayjs(props.day).format('YYYYMMDD'),
    departmentId: props.departmentId,
    userId: props.userId
  })
}

const handleCancel = () => {
  openStatus.value = false
}
</script>

<template>
  <QModal v-model:open="openStatus" mask>
    <template #title>
      <TypographyText>{{ day }} (实际考勤方案)</TypographyText>
    </template>

    <div class="attendance-status">
      <p class="status-note">注: 统计考勤时，异常状态优先正常状态</p>

      <Radio.Group v-model:value="selectedStatus" :options="statusRadioList" />

    </div>

    <template #footer>
      <Space>
        <Button @click="handleCancel">取消</Button>
        <Button type="primary" @click="handleConfirm">确定</Button>
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
}
</style>