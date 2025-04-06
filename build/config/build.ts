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
  // minify: viteEnv.VITE_MINIFY === 'true', // 启用所有压缩
  // 确保生成正确的资源引用
  assetsInlineLimit: 4096, // 小于此大小的资源将被内联为base64
  emptyOutDir: true, // 构建前清空输出目录
  // rollup 配置
  rollupOptions: {
    output: {
      // 手动分块策略
      manualChunks: {
        // 将 vue 相关的库打包到 vendor 中
        "vue-vendor": ['vue', 'vue-router', 'pinia', 'vue-i18n', 'dayjs'],
        // 将 antd 相关的库打包到 antd-vendor 中
        "antd-vendor": ['ant-design-vue', '@ant-design/icons-vue'],
        "axios-vendor": ['axios'],
        "lodash-vendor": ['lodash-es'],
        "echarts-vendor": ['echarts'],
      },
      // 资源文件输出路径配置
      chunkFileNames: 'js/[name]-[hash].js',
      entryFileNames: 'js/[name]-[hash].js',
      assetFileNames: (assetInfo) => {
        const fileName = assetInfo.name || '';
        const extType = fileName.split('.').at(-1) || '';
        if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(fileName)) {
          return `images/[name]-[hash][extname]`;
        }
        if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/.test(fileName)) {
          return `media/[name]-[hash][extname]`;
        }
        if (/\.(woff2?|eot|ttf|otf)$/.test(fileName)) {
          return `fonts/[name]-[hash][extname]`;
        }
        if (/\.css$/.test(fileName)) {
          return `css/[name]-[hash][extname]`;
        }
        return `${extType}/[name]-[hash][extname]`;
      }
    }
  }
})
