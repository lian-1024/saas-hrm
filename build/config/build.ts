/// <reference types="../../env/env.d.ts" />
import { BuildOptions } from "vite";

export const createBuildConfig = (viteEnv: ImportMetaEnv): BuildOptions => ({
  outDir: "dist",
  // 是否开启 sourcemap
  sourcemap: viteEnv.VITE_SOURCEMAP === 'true',
  // 是否开启 css 代码分割
  cssCodeSplit: viteEnv.VITE_CSS_CODE_SPLIT === 'true',
  // 块大小警告限制,
  chunkSizeWarningLimit: 2000,
  // 压缩配置
  minify: viteEnv.VITE_MINIFY === 'true', // 启用所有压缩
  // rollup 配置
  rollupOptions: {
    output: {
      // 手动分块策略
      manualChunks: {
        // 将 vue 相关的库打包到 vendor 中
        "vue-vendor": ['vue', 'vue-router', 'pinia'],
        // 将 antd 相关的库打包到 antd-vendor 中
        "antd-vendor": ['ant-design-vue', '@ant-design/icons-vue'],
        "axios-vendor": ['axios'],
        "lodash-vendor": ['lodash-es'],
        "dayjs-vendor": ['dayjs'],
        "echarts-vendor": ['echarts'],
      },
      // 资源文件输出路径配置
      chunkFileNames: 'assets/js/[name]-[hash].js',
      entryFileNames: 'assets/js/[name]-[hash].js',
      assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
    }
  }
})
