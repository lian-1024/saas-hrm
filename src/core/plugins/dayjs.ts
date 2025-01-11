import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import isBetween from 'dayjs/plugin/isBetween'
// 注册插件
dayjs.locale('zh-cn')
dayjs.extend(isBetween)
dayjs.extend(customParseFormat)

export default dayjs
