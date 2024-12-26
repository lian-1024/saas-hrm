import type { ItemType } from "ant-design-vue";
import type { MenuItemType } from "ant-design-vue/es/menu/src/interface";
import type { VNode, VueElement } from "vue";

/**根据参数生成 menu item */
export const generateMenuItem = (
  key: string,
  label: VueElement | string,
  icon?: VNode | ((item: MenuItemType) => VNode),
  children?: ItemType[],
  type?: 'group'
) => ({
  key,
  icon,
  children,
  label,
  type,
})