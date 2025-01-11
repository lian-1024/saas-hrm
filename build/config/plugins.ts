/// <reference types="../../env/env.d.ts" />

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { visualizer } from "rollup-plugin-visualizer";
import { PluginOption } from "vite";
import compression from 'vite-plugin-compression';
import imagemin from 'vite-plugin-imagemin';
import vueDevTools from "vite-plugin-vue-devtools";

export const createVitePlugins = (viteEnv: ImportMetaEnv): PluginOption[] => {

  const plugins: PluginOption[] = [
    vue(),
    vueJsx(),
    vueDevTools(),

    // 注意: 使用gzip压缩,需要告诉浏览器支持的类型,设置响应头Content-Encoding: gzip,在nginx中配置
    compression({
      algorithm: 'gzip', // 压缩算法
      threshold: 10240, // 压缩阈值
      verbose: true, // 是否在控制台中输出压缩结果
      ext: '.gz', // 压缩后文件后缀
      deleteOriginFile: true // 源文件压缩后是否删除
    }),
    imagemin({
      gifsicle: { // gif图片压缩
        optimizationLevel: 3, // 选择1到3之间的优化级别
        interlaced: false, // 隔行扫描gif进行渐进式渲染
        // colors: 2 // 将每个输出GIF中不同颜色的数量减少到num或更少。数字必须介于2和256之间。
      },
      optipng: { // png
        optimizationLevel: 7, // 选择0到7之间的优化级别
      },
      mozjpeg: {// jpeg
        quality: 20, // 压缩质量，范围从0(最差)到100(最佳)。
      },
      pngquant: {// png
        quality: [0.8, 0.9], // Min和max是介于0(最差)到1(最佳)之间的数字，类似于JPEG。达到或超过最高质量所需的最少量的颜色。如果转换导致质量低于最低质量，图像将不会被保存。
        speed: 4, // 压缩速度，1(强力)到11(最快)
      },
      svgo: { // svg压缩
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },

    }),
  ]

  // 是否开启产物分析报告
  if (viteEnv.IHRM_BUILD_ANALYZE) {
    plugins.push(
      visualizer({
        open: true, // 是否打开可视化文件
        gzipSize: true,// 计算gzip压缩后的文件大小
        brotliSize: true,// 计算brotli压缩后的文件大小
        filename: './stats.html',// 输出文件名
      }),
    )
  }


  return plugins
} 