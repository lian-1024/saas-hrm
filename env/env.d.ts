/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** 项目名称 */
  readonly IHRM_APP_TITLE: string
  /** 接口基地址 */
  readonly IHRM_APP_API_BASE_URL: string
  /** 是否开启 sourcemap(开发环境建议开启便于调试) */
  readonly IHRM_SOURCEMAP: string
  /** 是否开启 css 代码分割(开发环境可以关闭以提高构建速度) */
  readonly IHRM_CSS_CODE_SPLIT: string
  /** 压缩配置(开发环境关闭压缩以提高构建速度) */
  readonly IHRM_MINIFY: string
  /** 是否开启 console(开发环境建议开启便于调试) */
  readonly IHRM_CONSOLE: string
  /** 是否开启 tree-shaking */
  readonly IHRM_TREE_SHAKING: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}