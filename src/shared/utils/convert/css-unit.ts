/**
 * CSS 单位转换函数
 * @param value 需要转换的值
 * @returns 转换后的值
 * @example
 * toCSSUnit(100) // '100px'
 * toCSSUnit('100px') // '100px'
 * toCSSUnit('100%') // '100%'
 * toCSSUnit('100rem') // '100rem'
 * toCSSUnit('100') // '100px'
 * toCSSUnit(0) // '0'
 */
export const convertCSSUnit = (value: string | number): string => {
  // 如果值为 0，直接返回 '0'
  if (value === 0 || value === '0') return '0'

  // 如果是数字，添加 px 单位
  if (typeof value === 'number') return `${value}px`

  // 如果是字符串，检查是否已经包含单位
  if (typeof value === 'string') {
    // 匹配常见的 CSS 单位
    const hasUnit = /^-?\d*\.?\d+(px|rem|em|%|vh|vw|vmin|vmax)$/.test(value)
    if (hasUnit) return value

    // 如果是纯数字字符串，添加 px 单位
    const isNumeric = /^-?\d*\.?\d+$/.test(value)
    if (isNumeric) return `${value}px`
  }

  // 其他情况直接返回原值
  return String(value)
}
