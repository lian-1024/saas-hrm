/// <reference types="../../env/env.d.ts" />
import { ServerOptions } from "vite";

export const createServerConfig = (viteEnv: ImportMetaEnv): ServerOptions => ({
  proxy: {
    "/api": {
      target: "https://heimahr.itheima.net", // 真实接口地址, 后端给的基地址
      changeOrigin: true, // 允许跨域
    },
  },
  cors: true, // 配置cors
  fs: {
    deny: ['.env', '.env.*']  // 禁止Vite开发服务器访问.env文件
  }
})