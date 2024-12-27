import { theme } from "ant-design-vue"

export const useThemeToken = () => {
  const { useToken } = theme
  const { token } = useToken()

  return {
    token
  }
}