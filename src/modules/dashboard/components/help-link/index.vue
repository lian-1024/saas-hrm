<script setup lang="ts">
import { useAntdToken } from '@/shared/composables/use-antd-token';
import { BookTwoTone, FlagTwoTone, PhoneTwoTone, PlusCircleTwoTone } from '@ant-design/icons-vue';
import { Flex, TypographyText } from 'ant-design-vue';
import { h } from 'vue';
import QPanel from '../panel.vue';
defineOptions({
  name: "DashboardHelpLink"
})

const { token } = useAntdToken()
const LinkList = [
  {
    label: "入门指南",
    icon: h(FlagTwoTone)
  },
  {
    label: "在线帮助手册",
    icon: h(BookTwoTone)
  },
  {
    label: "联系技术支持",
    icon: h(PhoneTwoTone)
  },
  {
    label: "添加链接",
    icon: h(PlusCircleTwoTone)
  }
]

</script>

<template>
  <QPanel title="帮助链接">
    <Flex vertical gap="middle">
      <div class="help-link-item" v-for="item in LinkList" :key="item.label">
        <component :is="item.icon" />
        <TypographyText type="secondary">
          {{ item.label }}
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
  padding-block: v-bind("`${token.padding}px`");
  padding-inline: v-bind("`${token.padding}px`");
  background-color: v-bind("token.colorBgContainer");
}
</style>
