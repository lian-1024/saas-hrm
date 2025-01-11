<script setup lang="ts">
import { BookTwoTone, FlagTwoTone, PhoneTwoTone, PlusCircleTwoTone } from '@ant-design/icons-vue'
import { useAntdToken } from '@composables/use-antd-token'
import { Flex, TypographyText } from 'ant-design-vue'
import { h } from 'vue'
import QPanel from '../panel.vue'
defineOptions({
  name: 'DashboardHelpLink',
})

const { token } = useAntdToken()
const LinkList = [
  {
    label: 'gettingStarted',
    icon: h(FlagTwoTone),
  },
  {
    label: 'onlineHelpManual',
    icon: h(BookTwoTone),
  },
  {
    label: 'contactSupport',
    icon: h(PhoneTwoTone),
  },
  {
    label: 'addLink',
    icon: h(PlusCircleTwoTone),
  },
]
</script>

<template>
  <QPanel :title="$t('dashboard.helpLink.title')">
    <Flex vertical gap="middle">
      <div class="help-link-item cursor-pointer" v-for="item in LinkList" :key="item.label">
        <component :is="item.icon" />
        <TypographyText type="secondary">
          {{ $t(`dashboard.helpLink.${item.label}`) }}
        </TypographyText>
      </div>
    </Flex>
  </QPanel>
</template>

<style scoped lang="less">
.help-link-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-block: v-bind('`${token.padding}px`');
  padding-inline: v-bind('`${token.padding}px`');
  background-color: v-bind('token.colorBgElevated');

  border-radius: v-bind('`${token.borderRadiusLG}px`');
  border: 1px solid v-bind('token.colorBorderSecondary');
  transition: border-color 0.3s;

  &:hover {
    border-color: v-bind('token.colorBorder');
  }
}
</style>
