<script lang="ts" setup>
import { ATTENDANCE_STATUS, type AttendanceStatusKey } from '@/modules/attendance/constants/attendance'
import { Card, Flex, Popover, Tag, TypographyText } from 'ant-design-vue'
import { computed } from 'vue'

interface TablePopoverProps {
  username: string,
  yearOfReport: number
  monthOfReport: number
  dayOfReport: number
  adtStatu: string | number,
  adtInTime?: string | null
  adtOutTime?: string | null
  adtInPlace?: string | null
  adtOutPlace?: string | null
}

const props = withDefaults(defineProps<TablePopoverProps>(), {
  adtInTime: '-',
  adtOutTime: '-',
  adtInPlace: '-',
  adtOutPlace: '-'
})


const title = computed(() => `${props.username}-${props.yearOfReport}/${props.monthOfReport}/${props.dayOfReport}-考情记录`)

const status = computed(() => ATTENDANCE_STATUS[props.adtStatu as AttendanceStatusKey])

</script>

<template>
  <Popover>
    <TypographyText :style="{ color: status.color }">{{ status.text }}</TypographyText>
    <template #content>
      <Card :title="title" :head-style="{ padding: 'var(--spacing-large)' }" style="min-width: 500px;">
        <template #extra>
          <Tag :color="status.color">{{ status.text }}</Tag>
        </template>
        <Flex vertical gap="large">
          <TypographyText>上班时间：{{ adtInTime }}</TypographyText>
          <TypographyText>下班时间：{{ adtOutTime }}</TypographyText>
          <TypographyText>上班地点：{{ adtInPlace }}</TypographyText>
          <TypographyText>下班地点：{{ adtOutPlace }}</TypographyText>
        </Flex>
      </Card>

    </template>
  </Popover>
</template>

<style lang="less" scoped></style>