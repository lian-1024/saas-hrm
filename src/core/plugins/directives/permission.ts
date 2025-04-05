import type { Directive } from "vue";
import { useUserStore } from '@core/stores'
const vPermission: Directive = {
    mounted(el: HTMLElement, binding) {
        // 获取用户权限点
        const userStore = useUserStore()
        const points = userStore.userInfo?.roles.points || []
        
        
        // 如果用户权限点不包含当前权限点，则删除当前元素
            if (!points.includes(binding.value)) {
            el.remove()
        }
    }
}

export default vPermission;