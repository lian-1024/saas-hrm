import { useThrottleFn } from "@vueuse/core"
import { message } from "ant-design-vue"

export const throttledErrorMessage = (ms: number = 500) => useThrottleFn((error: string) => {
  message.error(error)
}, ms)




