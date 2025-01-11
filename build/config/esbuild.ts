import { ESBuildOptions } from "vite";

export const createESbuildConfig = (viteEnv: ImportMetaEnv): ESBuildOptions => ({
  // 是否开启 sourcemap
  sourcemap: false,
  // 删除特定语句
  drop: viteEnv.VITE_DROP_CONSOLE === 'true' ? [
    // 去掉 console 和 debugger
    'console',
    'debugger'
  ] : [],
  // 删除特定函数调用
  pure: viteEnv.VITE_TREE_SHAKING === 'true' ? [
    'console.*',
    // 开发工具函数
    'assert.*',
    'debug.*',
    // 测试相关
    'test.*',
    'describe.*'
  ] : [],

})