import { theme } from 'ant-design-vue';
export const useAntdToken = () => {
  const { useToken } = theme
  const { token } = useToken()

  return {
    token
  }
}


