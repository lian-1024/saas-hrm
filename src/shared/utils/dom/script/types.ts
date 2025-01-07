// 确保接口遵循单一职责原则（Single Responsibility Principle）
export interface LoadScriptOptions {
  // 成功加载脚本时的回调函数
  onSuccess?: (event: Event) => void,
  // 脚本加载失败时的回调函数
  onError?: () => void,
  // 指定脚本的类型，默认为 'text/javascript'
  type?: HTMLScriptElement['type']
}

// 定义LoadScriptEvent接口，确保开放封闭原则（Open/Closed Principle）得到遵守
export type LoadScriptEvent = (url: string, options?: LoadScriptOptions) => void;
