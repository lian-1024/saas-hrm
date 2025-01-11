export const FormOfEmployment = {
  Formal: 1,
  InFormal: 2,
} as const

export const FormOfEmploymentMap = {
  [FormOfEmployment.Formal]: '正式',
  [FormOfEmployment.InFormal]: '非正式',
}

export type FormOfEmploymentType = (typeof FormOfEmployment)[keyof typeof FormOfEmployment]
