/// <reference types="../../env/env.d.ts" />

import { DepOptimizationConfig } from "vite"

export const createOptimizeDeps = (viteEnv: ImportMetaEnv): DepOptimizationConfig => {
  return {
    // 强制预构建的依赖
    include: [
      'vue',
      'vue-router',
      'pinia',
      'axios',
      'lodash-es',
      '@vueuse/core',
      'ant-design-vue',
      '@ant-design/icons-vue'
    ],
    // 排除预构建的依赖
    exclude: ['tlbs-map-vue'],
  }
}