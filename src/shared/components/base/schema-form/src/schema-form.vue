<script setup lang="ts">
import { useAntdToken } from '@/shared/composables/use-antd-token'
import { 
  Button, 
  Cascader, 
  Checkbox, 
  DatePicker, 
  Form, 
  FormItem, 
  Input, 
  InputNumber, 
  Radio, 
  Select, 
  Switch, 
  TimePicker, 
  Upload,
  type FormInstance
} from 'ant-design-vue'
import { computed, h, ref, watch } from 'vue'
import type { SchemaFormItem, SchemaFormProps } from './types'

const props = defineProps<SchemaFormProps>()
const emit = defineEmits(['update:modelValue', 'submit', 'reset'])

const { token } = useAntdToken()
const formData = ref<Record<string, any>>({...props.modelValue})
const formRef = ref<FormInstance>()

// 初始化表单数据
const initFormData = () => {
  const data: Record<string, any> = {}
  props.schema.forEach((item) => {
    if (item.defaultValue !== undefined && formData.value[item.field] === undefined) {
      data[item.field] = item.defaultValue
    }
  })
  formData.value = { ...formData.value, ...data }
}

// 监听表单数据变化
watch(
  () => formData.value,
  (val) => {
    emit('update:modelValue', val)
  },
  { deep: true }
)

// 监听props.modelValue变化
watch(
  () => props.modelValue,
  (val) => {
    formData.value = { ...val }
  },
  { deep: true }
)

// 提交表单
const submitForm = () => {
  formRef.value?.validate().then((values) => {
    emit('submit', values)
  }).catch(err => {
    console.error('表单验证失败', err)
  })
}

// 重置表单
const resetForm = () => {
  formRef.value?.resetFields()
  initFormData()
  emit('reset')
}

// 渲染表单项
const renderFormItem = (item: SchemaFormItem) => {
  if (item.hidden) return null

  const commonProps = {
    disabled: props.disabled || item.disabled,
    placeholder: item.placeholder,
    ...item.props
  }

  switch (item.type) {
    case 'input':
      return h(Input, {
        value: formData.value[item.field],
        'onUpdate:value': (val: any) => formData.value[item.field] = val,
        ...commonProps
      })
    case 'input-password':
      return h(Input.Password, {
        value: formData.value[item.field],
        'onUpdate:value': (val: any) => formData.value[item.field] = val,
        ...commonProps
      })
    case 'input-number':
      return h(InputNumber, {
        value: formData.value[item.field],
        'onUpdate:value': (val: any) => formData.value[item.field] = val,
        style: 'width: 100%',
        ...commonProps
      })
    case 'textarea':
      return h(Input.TextArea, {
        value: formData.value[item.field],
        'onUpdate:value': (val: any) => formData.value[item.field] = val,
        ...commonProps
      })
    case 'select':
      return h(Select, {
        value: formData.value[item.field],
        'onUpdate:value': (val: any) => formData.value[item.field] = val,
        options: item.options,
        ...commonProps
      })
    case 'radio':
      return h(Radio.Group, {
        value: formData.value[item.field],
        'onUpdate:value': (val: any) => formData.value[item.field] = val,
        options: item.options,
        ...commonProps
      })
    case 'checkbox':
      return h(Checkbox.Group, {
        value: formData.value[item.field],
        'onUpdate:value': (val: any) => formData.value[item.field] = val,
        options: item.options,
        ...commonProps
      })
    case 'switch':
      return h(Switch, {
        checked: formData.value[item.field],
        'onUpdate:checked': (val: any) => formData.value[item.field] = val,
        ...commonProps
      })
    case 'date-picker':
      return h(DatePicker, {
        value: formData.value[item.field],
        'onUpdate:value': (val: any) => formData.value[item.field] = val,
        style: 'width: 100%',
        ...commonProps
      })
    case 'time-picker':
      return h(TimePicker, {
        value: formData.value[item.field],
        'onUpdate:value': (val: any) => formData.value[item.field] = val,
        style: 'width: 100%',
        ...commonProps
      })
    case 'upload':
      return h(Upload, {
        'fileList': formData.value[item.field],
        'onUpdate:fileList': (val: any) => formData.value[item.field] = val,
        ...commonProps
      })
    case 'cascader':
      return h(Cascader, {
        value: formData.value[item.field],
        'onUpdate:value': (val: any) => formData.value[item.field] = val,
        options: item.options,
        ...commonProps
      })
    case 'custom':
      return item.component ? h(item.component, {
        value: formData.value[item.field],
        'onUpdate:value': (val: any) => formData.value[item.field] = val,
        ...commonProps
      }) : null
    default:
      return null
  }
}

// 计算表单布局
const formLayout = computed(() => props.formProps?.layout || 'horizontal')

// 初始化数据
initFormData()
</script>

<template>
  <div class="schema-form-container">
    <Form
      ref="formRef"
      :model="formData"
      v-bind="props.formProps"
    >
      <div
        :class="{
          'schema-form-grid': formLayout !== 'inline' && props.columns && props.columns > 1,
        }"
        :style="{
          gridTemplateColumns: props.columns ? `repeat(${props.columns}, 1fr)` : 'none',
        }"
      >
        <FormItem
          v-for="item in schema"
          :key="item.field"
          :name="item.field"
          :label="item.label"
          v-bind="item.formItemProps"
          v-show="!item.hidden"
        >
          {{ renderFormItem(item) }}
        </FormItem>
      </div>
      <slot name="actions">
        <div class="schema-form-actions">
          <Button type="primary" @click="submitForm">提交</Button>
          <Button @click="resetForm">重置</Button>
        </div>
      </slot>
    </Form>
  </div>
</template>

<style scoped lang="less">
.schema-form {
  &-container {
    padding: v-bind('token.padding');
    background-color: v-bind('token.colorBgContainer');
    border-radius: v-bind('token.borderRadiusLG');
  }
  
  &-grid {
    display: grid;
    grid-gap: v-bind('token.marginMD');
  }
  
  &-actions {
    display: flex;
    gap: v-bind('token.marginSM');
    justify-content: center;
    margin-top: v-bind('token.marginLG');
  }
}
</style> 