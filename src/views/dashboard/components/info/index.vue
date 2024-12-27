<script setup lang="ts">
import { QAvatar } from '@/components/base/Avatar';
import { Divider, Flex, type FlexProps, Tag, TypographyText } from 'ant-design-vue';

defineOptions({
  name: "DashboardInfo"
})

const WrapperAttrs: FlexProps = {
  vertical: true,
  gap: "large",
}



const UserInfoWrapperAttrs: FlexProps = {
  gap: "middle"
}


</script>

<template>
  <Flex v-bind="WrapperAttrs" class="dashboard-info">
    <Flex v-bind="UserInfoWrapperAttrs">
      <QAvatar shape="square" :size="66" />
      <div>
        <Flex gap="middle" align="center">
          <TypographyText class="dashboard-info-name" :level="4" ellipsis>Lianqq</TypographyText>
          <Tag>体验版</Tag>
        </Flex>
        <Flex>
          <TypographyText class="dashboard-info-secondary" type="secondary">管理员</TypographyText>
          <Divider type="vertical" />
          <TypographyText class="dashboard-info-secondary" type="secondary">字节跳动-总裁办</TypographyText>
        </Flex>
      </div>
    </Flex>
    <Flex wrap="wrap">
      <div class="dashboard-todo-item" v-for="item in 3" :key="item">
        <TypographyText class="dashboard-todo-title" type="secondary">组织总人数</TypographyText>
        <!-- <TypographyTitle :level="1">999</TypographyTitle> -->
        <h1 class="dashboard-todo-total">1</h1>
      </div>
    </Flex>
  </Flex>
</template>

<style scoped lang="scss">
.dashboard {
  &-info {
    padding: 24px;
    background-color: #fff;

    &-name {
      font-size: 18px;
    }

    &-secondary {
      font-size: 14px;
      white-space: nowrap;
    }
  }

  &-todo {


    &-item {
      width: max-content;
      padding: 18px;
    }

    &-title {
      width: min-content;
      font-size: 14px;
    }

    &-total {
      width: min-content;
      font-size: 30px;
      padding-top: 10px;
    }

  }
}
</style>