import dayjs from '@/core/plugins/dayjs'
export const formatDate = (date: string | Date) => {
  return dayjs(date).format('YYYY-MM-DD')
}