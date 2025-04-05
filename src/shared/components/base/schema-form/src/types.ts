import type { FormItemProps, FormProps } from 'ant-design-vue'
import type { Rule } from 'ant-design-vue/es/form'
import type { Component } from 'vue'

/**
 * 表单项类型
 */
export type SchemaFormItemType =
  | 'input'
  | 'input-password'
  | 'input-number'
  | 'textarea'
  | 'select'
  | 'radio'
  | 'checkbox'
  | 'switch'
  | 'date-picker'
  | 'time-picker'
  | 'upload'
  | 'cascader'
  | 'custom'

/**
 * 表单项定义
 */
export interface SchemaFormItem {
  /** 字段名 */
  field: string
  /** 表单项类型 */
  type: SchemaFormItemType
  /** 表单项标签 */
  label?: string
  /** 表单项默认值 */
  defaultValue?: any
  /** 表单项规则 */
  rules?: Rule[]
  /** 占位文本 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 是否隐藏 */
  hidden?: boolean
  /** 表单项额外配置，透传到组件 */
  props?: Record<string, any>
  /** 下拉选项（仅用于 select、radio、checkbox） */
  options?: Array<{
    label: string
    value: string | number
    disabled?: boolean
  }>
  /** 自定义组件 */
  component?: Component
  /** 表单项额外配置，透传到 FormItem */
  formItemProps?: Partial<FormItemProps>
}

/**
 * Schema Form Props
 */
export interface SchemaFormProps {
  /** 表单定义 */
  schema: SchemaFormItem[]
  /** 表单数据 */
  modelValue: Record<string, any>
  /** 表单配置 */
  formProps?: Partial<FormProps>
  /** 栅格列数 */
  columns?: number
  /** 是否禁用整个表单 */
  disabled?: boolean
} 