<script setup lang="ts">
import AttendanceSettingService from '@/modules/attendance/services/attendance-setting.service'
import type {
  ExtraDutyRuleList,
  OverTimeRule,
  OverTimeSetting,
  UpdateOverTimeSettingParams,
} from '@/modules/attendance/types'
import { QSkeleton } from '@/shared/components/base/skeleton'
import { useRequest } from '@/shared/composables/use-request/use-request'
import {
  Checkbox,
  DatePicker,
  Flex,
  Form,
  FormItem,
  InputNumber,
  message,
  Select,
  Switch,
  TimePicker,
  Tooltip,
  TypographyText,
  type FormProps,
  type SelectProps,
} from 'ant-design-vue'
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineOptions({
  name: 'TabOvertime',
})

const props = defineProps<{
  departmentOptions: SelectProps['options']
}>()

const selectedDepartmentId = ref(0)

/**
 * 将 OverTimeSetting 转换为 UpdateOverTimeSettingParams
 */
const convertToUpdateParams = (data: OverTimeSetting): UpdateOverTimeSettingParams => {
  if (!data) {
    return {
      departmentId: selectedDepartmentId.value,
      isClock: 0,
      isCompensationint: 0,
      latestEffectDate: '',
      unit: '1',
      rules: [],
    }
  }

  const { dayOffConfigs, extraDutyConfig, extraDutyRuleList } = data

  return {
    departmentId: extraDutyConfig.departmentId,
    isClock: extraDutyConfig.isClock,
    isCompensationint: extraDutyConfig.isCompensationint,
    latestEffectDate: dayOffConfigs.latestEffectDate,
    unit: dayOffConfigs.unit,
    rules: extraDutyRuleList.map((rule: ExtraDutyRuleList) => ({
      departmentId: rule.departmentId,
      isEnable: rule.isEnable,
      isTimeOff: rule.isTimeOff,
      rule: rule.rule,
      ruleEndTime: rule.ruleEndTime,
      ruleStartTime: rule.ruleStartTime,
    })),
  }
}

const formData = ref<UpdateOverTimeSettingParams>({
  departmentId: 0,
  isClock: 0,
  isCompensationint: 0,
  latestEffectDate: '',
  unit: '1',
  rules: [
    {
      departmentId: 0,
      isEnable: 0,
      isTimeOff: 0,
      rule: 'Workday',
      ruleStartTime: '',
      ruleEndTime: '',
    },
  ],
})

// 计算属性：加班规则列表
const overtimeRules = computed(() => {
  const ruleMap = [
    t('attendance.settings.overtime.workday'),
    t('attendance.settings.overtime.restDay'),
    t('attendance.settings.overtime.holiday'),
  ]
  return formData.value?.rules.map((rule: OverTimeRule, index) => ({
    ...rule,
    rule: ruleMap[index],
  }))
})

// 更新规则的方法
const updateRule = (index: number, field: keyof OverTimeRule, value: any) => {
  if (formData.value?.rules[index]) {
    formData.value.rules[index] = {
      ...formData.value.rules[index],
      [field]: value,
    }
  }
}

// 计算属性：将数字转换为布尔值
const isClockChecked = computed({
  get: () => Boolean(formData.value?.isClock),
  set: (val: boolean) => {
    if (formData.value) formData.value.isClock = val ? 1 : 0
  },
})

const isCompensationChecked = computed({
  get: () => Boolean(formData.value?.isCompensationint),
  set: (val: boolean) => {
    if (formData.value) formData.value.isCompensationint = val ? 1 : 0
  },
})

// 获取加班设置
const { run: getOverTimeSetting, loading: getOverTimeSettingLoading } = useRequest(
  AttendanceSettingService.getOverTimeSettingByDepartmentId,
  {
    manual: true,
    onSuccess: ({ data }) => {
      formData.value = convertToUpdateParams(data)
    },
  },
)

const { run: updateOverTimeSetting } = useRequest(AttendanceSettingService.updateOverTimeSetting, {
  manual: true,
  onSuccess: () => {
    message.success(t('attendance.settings.overtime.messages.updateSuccess'))
  },
  onError: () => {
    message.error(t('attendance.settings.overtime.messages.updateError'))
  },
})

const handleSubmit = async () => {
  console.log(formData.value)
  await updateOverTimeSetting(formData.value)
}

defineExpose({
  handleSubmit,
})

onMounted(() => {
  if (!props.departmentOptions) return
  const departmentId = props.departmentOptions[0].value || 0
  selectedDepartmentId.value = +departmentId
  getOverTimeSetting(selectedDepartmentId.value)
})

const labelCol: FormProps['labelCol'] = {
  span: 4,
}
const wrapperCol: FormProps['wrapperCol'] = {
  span: 16,
}
</script>

<template>
  <Form :label-col="labelCol" :wrapper-col="wrapperCol" :model="formData" class="w-full">
    <FormItem :label="t('attendance.settings.overtime.department')" name="departmentId">
      <Select v-model:value="selectedDepartmentId" :options="departmentOptions" />
    </FormItem>
    <QSkeleton
      active
      :title="false"
      :loading="getOverTimeSettingLoading"
      :paragraph="{
        rows: 8,
      }"
    >
      <FormItem :label="t('attendance.settings.overtime.overtimeRules')">
        <Flex vertical gap="middle">
          <Flex
            v-for="(rule, index) in overtimeRules"
            wrap="wrap"
            :key="index"
            justify="space-between"
            gap="large"
            align="center"
          >
            <Flex span="12" gap="small">
              <Switch
                :checked="Boolean(rule.isEnable)"
                @change="(checked) => updateRule(index, 'isEnable', checked ? 1 : 0)"
              />
              <TypographyText class="nowrap">{{ rule.rule }}</TypographyText>
            </Flex>
            <Flex gap="small" align="center">
              <Checkbox
                :checked="Boolean(rule.isTimeOff)"
                @change="(e) => updateRule(index, 'isTimeOff', e.target.checked ? 1 : 0)"
              />
              <TypographyText :disabled="Boolean(!rule.isTimeOff)" class="nowrap">{{
                t('attendance.settings.overtime.timeOff')
              }}</TypographyText>
              <TimePicker
                valueFormat="mm:ss"
                :disabled="Boolean(!rule.isTimeOff)"
                class="overtime-input"
                :value="rule.ruleStartTime"
                @change="(time) => updateRule(index, 'ruleStartTime', time)"
              />
              <TimePicker
                valueFormat="mm:ss"
                :disabled="Boolean(!rule.isTimeOff)"
                class="overtime-input"
                :value="rule.ruleEndTime"
                @change="(time) => updateRule(index, 'ruleEndTime', time)"
              />
            </Flex>
          </Flex>
        </Flex>
      </FormItem>
      <FormItem :label="t('attendance.settings.overtime.clockValidation')">
        <Flex gap="small" align="center">
          <Switch v-model:checked="isClockChecked" />
          <TypographyText class="nowrap">{{
            t('attendance.settings.overtime.clockRequired')
          }}</TypographyText>
        </Flex>
      </FormItem>
      <FormItem :label="t('attendance.settings.overtime.enableCompensation')">
        <Switch v-model:checked="isCompensationChecked" />
      </FormItem>
      <FormItem :label="t('attendance.settings.overtime.timeOffSettings')">
        <Flex gap="large" vertical justify="flex-start">
          <Flex gap="small" align="center">
            <TypographyText class="nowrap">{{
              t('attendance.settings.overtime.latestEffectiveDate')
            }}</TypographyText>
            <DatePicker
              valueFormat="MM-DD"
              class="overtime-input"
              v-model:value="formData.latestEffectDate"
            />
          </Flex>
          <Flex gap="small" align="center">
            <TypographyText class="nowrap"
              >{{ t('attendance.settings.overtime.minimumUnit') }}:</TypographyText
            >
            <Tooltip :trigger="['hover']" placement="topLeft" overlay-class-name="numeric-input">
              <template #title>
                <span class="numeric-input-title">{{ formData.unit }}</span>
              </template>
              <InputNumber class="overtime-input" v-model:value="formData.unit" />
            </Tooltip>
            <TypographyText class="nowrap flex-1">{{
              t('attendance.settings.overtime.day')
            }}</TypographyText>
          </Flex>
        </Flex>
      </FormItem>
    </QSkeleton>
  </Form>
</template>

<style scoped lang="scss">
.overtime {
  &-wrapper {
    display: flex;
    width: 100%;
  }

  &-input {
    min-width: 100px;
  }
}
</style>
