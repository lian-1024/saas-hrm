import { useThrottleFn } from "@vueuse/core"
import { message } from "ant-design-vue"

export const throttledErrorMessage = useThrottleFn((error: string) => {
  message.error(error)
}, 1000)
