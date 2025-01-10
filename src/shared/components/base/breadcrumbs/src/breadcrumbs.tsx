import { EnvironmentOutlined } from '@ant-design/icons-vue';
import { Breadcrumb, Flex } from "ant-design-vue";
import { computed, defineComponent, type CSSProperties } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { useAntdToken } from '../../../../composables/use-antd-token/index';

/**
 * 面包屑导航项的接口定义
 */
interface BreadcrumbItem {
  /** 路由路径 */
  path: string;
  /** 显示的标题 */
  title: string;
}

/**
 * 面包屑导航组件
 * 根据当前路由自动生成面包屑导航
 */
const QBreadcrumbs = defineComponent({
  name: "QBreadcrumbs",
  setup() {
    // 获取当前路由信息
    const route = useRoute()
    // 获取国际化函数
    const { t } = useI18n()
    // 获取主题token
    const { token } = useAntdToken()

    /**
     * 计算面包屑导航项
     * 根据当前路由匹配信息生成面包屑数据
     */
    const breadcrumbs = computed<BreadcrumbItem[]>(() => {
      const items = new Map<string, BreadcrumbItem>()

      // 遍历匹配的路由
      route.matched.forEach(route => {
        if (!route.meta?.title) return

        // 如果有父级，添加父级路由
        if (route.meta?.parentKey) {
          // 获取父级路径
          const parentPath = `/${route.meta.parentKey}`
          // 如果父级路径不存在，则添加
          if (!items.has(parentPath)) {
            // 获取父级标题
            const parentTitle = t(`nav.${route.meta.parentKey}`)
            // 添加父级路由
            items.set(parentPath, {
              path: parentPath,
              title: parentTitle
            })
          }
        }

        // 添加当前路由
        items.set(route.path, {
          path: route.path,
          title: t(route.meta.title)
        })
      })

      // 返回面包屑项
      return Array.from(items.values())
    })

    /**
     * 计算组件样式
     * 使用主题token确保样式统一
     */
    const styles = computed<CSSProperties>(() => ({
      backgroundColor: token.value.colorBgContainer,
      paddingBlock: `${token.value.paddingXXS}px`,
      paddingInline: `${token.value.padding}px`,
      borderRadius: `${token.value.borderRadiusLG}px`,
      marginBottom: `${token.value.marginXXS}px`,
      maxWidth: "max-content"
    }))

    /**
     * 渲染面包屑组件
     */
    return () => (
      <Flex gap="small" align="center" style={styles.value}>
        <EnvironmentOutlined />
        <Breadcrumb>
          {breadcrumbs.value.map(item => (
            <Breadcrumb.Item key={item.path}>
              <router-link to={item.path} class="q-breadcrumbs-link">
                {item.title}
              </router-link>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </Flex>
    )
  }
})

export default QBreadcrumbs