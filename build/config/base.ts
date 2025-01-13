/// <reference types="../../env/env.d.ts" />
import { resolve } from "path";
import type { UserConfig } from "vite";

export const createBaseConfig = (viteEnv: ImportMetaEnv) => (rootPath: string, envDir: string): UserConfig => {

  return {
    envDir: envDir,  // 环境变量目录
    envPrefix: 'IHRM_',  // 环境变量前缀
    base: viteEnv.IHRM_BASE_URL || '/admin-ihrm/',
    resolve: {
      alias: {
        '@': resolve(rootPath, './src'),
        '@assets': resolve(rootPath, './src/assets'),
        '@components': resolve(rootPath, './src/shared/components'),
        "@composables": resolve(rootPath, "./src/shared/composables"),
        "@core": resolve(rootPath, "./src/core"),
        "@shared": resolve(rootPath, "./src/shared"),
        "@modules": resolve(rootPath, "./src/modules"),
        "@utils": resolve(rootPath, "./src/shared/utils"),
        "@stores": resolve(rootPath, "./src/core/stores"),
        "@constants": resolve(rootPath, "./src/shared/constants"),
      }
    }
  }
}