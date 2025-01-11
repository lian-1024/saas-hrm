<script lang="ts" setup>
import {
  ATTENDANCE_STATUS,
  type AttendanceStatusKey,
} from '@modules/attendance/constants/attendance'
import { Card, Flex, Popover, Tag, TypographyText } from 'ant-design-vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface TablePopoverProps {
  username: string
  yearOfReport: number
  monthOfReport: number
  dayOfReport: number
  adtStatu: string | number
  adtInTime?: string | null
  adtOutTime?: string | null
  adtInPlace?: string | null
  adtOutPlace?: string | null
}

const props = withDefaults(defineProps<TablePopoverProps>(), {
  adtInTime: '-',
  adtOutTime: '-',
  adtInPlace: '-',
  adtOutPlace: '-',
})

const { t } = useI18n()

const title = computed(
  () =>
    `${props.username}-${props.yearOfReport}/${props.monthOfReport}/${props.dayOfReport}-考情记录`,
)

const status = computed(() => {
  const status = ATTENDANCE_STATUS[props.adtStatu as AttendanceStatusKey]
  return {
    text: t('attendance.status.' + props.adtStatu),
    color: status.color,
  }
})
</script>

<template>
  <Popover>
    <TypographyText :style="{ color: status.color }">{{ status.text }}</TypographyText>
    <template #content>
      <Card
        :title="title"
        :head-style="{ padding: 'var(--spacing-large)' }"
        style="min-width: 500px"
      >
        <template #extra>
          <Tag :color="status.color">{{ status.text }}</Tag>
        </template>
        <Flex vertical gap="large">
          <TypographyText
            >{{ t('attendance.popover.checkInTime') }}：{{ adtInTime }}</TypographyText
          >
          <TypographyText
            >{{ t('attendance.popover.checkOutTime') }}：{{ adtOutTime }}</TypographyText
          >
          <TypographyText
            >{{ t('attendance.popover.checkInPlace') }}：{{ adtInPlace }}</TypographyText
          >
          <TypographyText
            >{{ t('attendance.popover.checkOutPlace') }}：{{ adtOutPlace }}</TypographyText
          >
        </Flex>
      </Card>
    </template>
  </Popover>
</template>

<style lang="less" scoped></style>
