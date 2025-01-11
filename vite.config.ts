/// <reference types="./env/env.d.ts" />

import { fileURLToPath } from 'url'
import { defineConfig, loadEnv } from 'vite'
import { createBaseConfig, createBuildConfig, createESbuildConfig, createOptimizeDeps, createServerConfig, createVitePlugins } from './build/config'


// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // 获取环境变量目录
  const envDir = fileURLToPath(new URL("./env", import.meta.url))
  // 获取项目根目录
  const rootPath = fileURLToPath(new URL(".", import.meta.url)) // process.cwd()
  // 加载环境变量 
  const env = loadEnv(mode, envDir, 'IHRM_')
  const viteEnv = env as unknown as ImportMetaEnv


  return {
    ...createBaseConfig(viteEnv)(rootPath, envDir), // 基础配置
    plugins: createVitePlugins(viteEnv), // 插件配置
    server: createServerConfig(viteEnv), // 开发服务器配置
    build: createBuildConfig(viteEnv), // 构建配置
    esbuild: createESbuildConfig(viteEnv), // esbuild配置
    optimizeDeps: createOptimizeDeps(viteEnv) // 优化依赖配置
  }
})
