<script setup lang="ts">
import { Flex, TypographyText } from 'ant-design-vue';

defineOptions({
  name: 'SocialSecurityInfo'
})


</script>

<template>
  <Flex class="social-security" vertical>
    <Flex vertical>
      <TypographyText type="secondary">
        申报人数
      </TypographyText>
      <h1 class="social-security-total">999</h1>
    </Flex>

    <Flex class="social-security-info" wrap="wrap">
      <Flex vertical v-for="item in 3" :key="item" class="social-security-info-item">
        <TypographyText type="secondary">统计人数</TypographyText>
        <TypographyText :level="4" class="social-security-info-item-total">999</TypographyText>
      </Flex>
    </Flex>
  </Flex>
</template>

<style scoped lang="scss">
.social-security {
  &-total {
    margin: 0;
    font-size: 30px;
    padding-bottom: 16px;
  }

  &-info {
    background-color: #e6e6e6;

    &-item {
      padding: 16px;

      &-total {
        font-size: 30px;
      }
    }
  }
}
</style>