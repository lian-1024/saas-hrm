<script setup lang="ts">
import { useRequest } from '@/composables/use-request';
import { EnableStatus } from '@/constants/common';
import AttendanceSettingService from '@/services/attendance-setting.service';
import type { DeductionSetting } from '@/types/api';
import { type SelectProps, Col, Flex, Form, FormItem, Input, Row, Select, Switch, TypographyText } from 'ant-design-vue';
import { onMounted, ref } from 'vue';
defineOptions({
  name: "TabDeduction"
})

enum DeductionName {
  BE_LATE = "51000",
  LEAVE_EARLY = "52000",
  ABSENTEEISM = "53000"
}

const DeductionNameMap = {
  [DeductionName.BE_LATE]: "迟到",
  [DeductionName.LEAVE_EARLY]: "早退",
  [DeductionName.ABSENTEEISM]: "旷工"
}

const props = defineProps<{
  departmentOptions: SelectProps['options']
}>()

const handleSubmit = () => {
  console.log("submit TabDeduction");
}

const selectedDepartmentId = ref()
const deductionSetting = ref<DeductionSetting[]>([])


const { run: getDeductionSettingByDepartmentId } = useRequest(AttendanceSettingService.getDeductionSettingByDepartmentId, {
  manual: true,
  onSuccess: ({ data }) => {
    deductionSetting.value = data
  }
})

defineExpose({
  handleSubmit
})

onMounted(() => {
  if (!props.departmentOptions) return
  const departmentId = props.departmentOptions[0].value || 0
  selectedDepartmentId.value = +departmentId
  getDeductionSettingByDepartmentId(selectedDepartmentId.value)
})

// 修改考勤规则的启用状态
const changeDeductionEnable = (checked: EnableStatus, dedTypeCode: string) => deductionSetting.value.forEach(item => item.dedTypeCode === dedTypeCode && (item.isEnable = checked))


const handleSwitchChange = (checked: boolean, record: DeductionSetting) => {
  const afterStatus = checked ? EnableStatus.ENABLED : EnableStatus.DISABLED
  changeDeductionEnable(afterStatus, record.dedTypeCode)
}

const deductionText = (deductionName: string) => DeductionNameMap[deductionName as DeductionName]

</script>

<template>
  <Form>
    <FormItem label="部门" name="departmentId">
      <Select :options="departmentOptions" v-model:value="selectedDepartmentId" />
    </FormItem>
    <FormItem>
      <Flex vertical>
        <Flex vertical gap="large" v-for="item in deductionSetting" :key="item.id">
          <template v-if="!Boolean(+item.isAbsenteeism)">
            <Row>
              <Col span="4">
              <Flex align="center" gap="small">
                <TypographyText class="deduction-text">{{ deductionText(item.dedTypeCode) }}扣款</TypographyText>
                <Switch :checked="Boolean(item.isEnable)"
                  @change="(checked) => handleSwitchChange(Boolean(checked), item)" />
              </Flex>
              </Col>
            </Row>
            <Row>
              <Col span="8" offset="4">
              <Flex align="center" gap="small">
                <TypographyText class="deduction-text">{{ deductionText(item.dedTypeCode) }}≤</TypographyText>
                <Input class="deduction-input" v-model:value="item.periodLowerLimit" type="number" />
                <TypographyText class="deduction-text">分钟</TypographyText>
              </Flex>
              </Col>
            </Row>
            <Row>
              <Col span="14" offset="6">
              <Flex align="center" gap="small">
                <TypographyText class="deduction-text">{{ deductionText(item.dedTypeCode) }}≤</TypographyText>
                <Input class="deduction-input" v-model:value="item.timesLowerLimit" type="number" />
                <TypographyText class="deduction-text">次,每次扣款</TypographyText>
                <Input class="deduction-input" v-model:value="item.dedAmonutLowerLimit" type="number" />
                <TypographyText class="deduction-text">元</TypographyText>
              </Flex>
              </Col>
            </Row>
            <Row>
              <Col span="14" offset="6">
              <Flex align="center" gap="small">
                <TypographyText class="deduction-text">{{ deductionText(item.dedTypeCode) }}></TypographyText>
                <Input disabled class="deduction-input" v-model:value="item.timesUpperLimit" type="number" />
                <TypographyText class="deduction-text">次,每次扣款</TypographyText>
                <Input class="deduction-input" v-model:value="item.dedAmonutUpperLimit" type="number" />
                <TypographyText class="deduction-text">元</TypographyText>
              </Flex>
              </Col>
            </Row>
            <Row>
              <Col span="8" offset="4">
              <Flex align="center" gap="small">
                <TypographyText class="deduction-text">{{ deductionText(item.dedTypeCode) }}></TypographyText>
                <Input disabled class="deduction-input" v-model:value="item.periodUpperLimit" type="number" />
                <TypographyText class="deduction-text">分钟</TypographyText>
              </Flex>
              </Col>
            </Row>
            <Row>
              <Col span="14" offset="6">
              <Flex align="center" gap="small">
                <TypographyText class="deduction-text">{{ deductionText(item.dedTypeCode) }}≤</TypographyText>
                <Input disabled class="deduction-input" v-model:value="item.absenceTimesUpperLimt" type="number" />
                <TypographyText class="deduction-text">次,每次旷工</TypographyText>
                <Input class="deduction-input" v-model:value="item.absenceDays" type="number" />
                <TypographyText class="deduction-text">天</TypographyText>
              </Flex>
              </Col>
            </Row>
          </template>
          <template v-else>
            <Row>
              <Col span="4">
              <Flex align="center" gap="small">
                <TypographyText class="deduction-text">{{ deductionText(item.dedTypeCode) }}扣款</TypographyText>
                <Switch :checked="Boolean(item.isEnable)"
                  @change="(checked) => handleSwitchChange(Boolean(checked), item)" />
              </Flex>
              </Col>
            </Row>
            <Row>
              <Col span="10" offset="4">
              <Flex align="center" gap="small">
                <TypographyText class="deduction-text">{{ deductionText(item.dedTypeCode) }}按</TypographyText>
                <Input class="deduction-input" v-model:value="item.fineSalaryMultiples" type="number" />
                <TypographyText class="deduction-text">工资处罚</TypographyText>
              </Flex>
              </Col>
            </Row>
          </template>
        </Flex>
      </Flex>
    </FormItem>
  </Form>
</template>

<style scoped lang="scss">
.deduction {
  &-text {
    min-width: max-content;
  }

  &-input {}
}
</style>