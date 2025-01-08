import type { MenuProps } from 'ant-design-vue';
export const handleClickMenuItemActions: MenuProps['onClick'] = (info) => {
  console.log('handleClickActions:', info);
}