// 通用响应接口，定义了响应的基本结构
export interface Response<T = any> {
  code: number  // 响应状态码，通常用于表示请求的成功或失败
  data: T  // 响应数据，类型为泛型T，可以是任意类型
  message: string  // 响应消息，通常用于描述请求的结果
  success: boolean  // 请求是否成功
}
