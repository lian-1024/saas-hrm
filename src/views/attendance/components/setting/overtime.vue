<script setup lang="ts">
import { useRequest } from '@/composables/use-request';
import AttendanceSettingService from '@/services/attendance-setting.service';
import type { ExtraDutyRuleList, OverTimeRule, OverTimeSetting, UpdateOverTimeSettingParams } from '@/types/api/attendance';
import { Checkbox, DatePicker, Flex, Form, FormItem, InputNumber, message, Select, Switch, TimePicker, Tooltip, TypographyText, type FormProps, type SelectProps } from 'ant-design-vue';
import { computed, onMounted, ref } from 'vue';
defineOptions({
  name: "TabOvertime"
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
      rules: []
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
      ruleStartTime: rule.ruleStartTime
    }))
  }
}

const formData = ref<UpdateOverTimeSettingParams>({
  departmentId: 0,
  isClock: 0,
  isCompensationint: 0,
  latestEffectDate: '',
  unit: '1',
  rules: [{
    departmentId: 0,
    isEnable: 0,
    isTimeOff: 0,
    rule: 'Workday',
    ruleStartTime: '',
    ruleEndTime: ''
  }]
})

// 计算属性：加班规则列表
const overtimeRules = computed(() => formData.value?.rules ?? [])

// 更新规则的方法
const updateRule = (index: number, field: keyof OverTimeRule, value: any) => {
  if (formData.value?.rules[index]) {
    formData.value.rules[index] = {
      ...formData.value.rules[index],
      [field]: value
    }
  }
}

// 计算属性：将数字转换为布尔值
const isClockChecked = computed({
  get: () => Boolean(formData.value?.isClock),
  set: (val: boolean) => {
    if (formData.value) formData.value.isClock = val ? 1 : 0
  }
})

const isCompensationChecked = computed({
  get: () => Boolean(formData.value?.isCompensationint),
  set: (val: boolean) => {
    if (formData.value) formData.value.isCompensationint = val ? 1 : 0
  }
})

// 获取加班设置
const { run: getOverTimeSetting } = useRequest(AttendanceSettingService.getOverTimeSettingByDepartmentId, {
  manual: true,
  onSuccess: ({ data }) => {
    formData.value = convertToUpdateParams(data)
  }
})

const { run: updateOverTimeSetting } = useRequest(AttendanceSettingService.updateOverTimeSetting, {
  manual: true,
  onSuccess: () => {
    message.success('更新加班设置成功')
  },
  onError: () => {
    message.error('更新加班设置失败')
  }
})

const handleSubmit = async () => {
  console.log(formData.value);
  await updateOverTimeSetting(formData.value)
}

defineExpose({
  handleSubmit
})

onMounted(() => {
  if (!props.departmentOptions) return
  const departmentId = props.departmentOptions[0].value || 0
  selectedDepartmentId.value = +departmentId
  getOverTimeSetting(selectedDepartmentId.value)
})

const labelCol: FormProps['labelCol'] = {
  span: 4
}
</script>

<template>
  <div class="overtime-wrapper">
    <Form :label-col="labelCol" :model="formData">
      <FormItem label="部门" name="departmentId">
        <Select v-model:value="selectedDepartmentId" :options="departmentOptions" />
      </FormItem>
      <FormItem label="加班规则">
        <Flex vertical gap="middle">
          <Flex v-for="(rule, index) in overtimeRules" :key="index" justify="space-between" gap="large" align="center">
            <Flex span="12" gap="small">
              <Switch :checked="Boolean(rule.isEnable)"
                @change="(checked) => updateRule(index, 'isEnable', checked ? 1 : 0)" />
              <TypographyText class="nowrap">{{ rule.rule === 'Workday' ? '工作日' : '休息日' }}可申请加班</TypographyText>
            </Flex>
            <Flex gap="small" align="center">
              <Checkbox :checked="Boolean(rule.isTimeOff)"
                @change="(e) => updateRule(index, 'isTimeOff', e.target.checked ? 1 : 0)" />
              <TypographyText class="nowrap">调休假</TypographyText>
              <TimePicker valueFormat="mm:ss" class="overtime-input" :value="rule.ruleStartTime"
                @change="(time) => updateRule(index, 'ruleStartTime', time)" />
              <TimePicker valueFormat="mm:ss" class="overtime-input" :value="rule.ruleEndTime"
                @change="(time) => updateRule(index, 'ruleEndTime', time)" />
            </Flex>
          </Flex>
        </Flex>
      </FormItem>
      <FormItem label="打卡验证">
        <Flex gap="small" align="center">
          <Switch v-model:checked="isClockChecked" />
          <TypographyText class="nowrap">加班需要有打卡记录</TypographyText>
        </Flex>
      </FormItem>
      <FormItem label="开启补偿">
        <Switch v-model:checked="isCompensationChecked" />
      </FormItem>
      <FormItem label="调休假设置">
        <Flex gap="large" vertical justify="flex-start">
          <Flex gap="small" align="center">
            <TypographyText class="nowrap">最晚有效期:次年</TypographyText>
            <DatePicker valueFormat="MM-DD" class="overtime-input" v-model:value="formData.latestEffectDate" />
          </Flex>
          <Flex gap="small" align="center">
            <TypographyText class="nowrap">请假最小单位:</TypographyText>
            <Tooltip :trigger="['hover']" placement="topLeft" overlay-class-name="numeric-input">
              <template #title>
                <span class="numeric-input-title">{{ formData.unit }}</span>
              </template>
              <InputNumber class="overtime-input" v-model:value="formData.unit" />
            </Tooltip>
            <TypographyText class="nowrap flex-1">天</TypographyText>
          </Flex>
        </Flex>
      </FormItem>
    </Form>
  </div>
</template>

<style scoped lang="scss">
.overtime {
  &-wrapper {
    display: flex;
    justify-content: center;
  }

  &-input {
    min-width: 100px;
  }


}
</style>