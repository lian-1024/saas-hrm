<script setup lang="ts">
import { Flex } from 'ant-design-vue';
import QPanel from '../panel.vue';
import SocialSecurityChart from './components/chart.vue';
import SocialSecurityInfo from './components/info.vue';
defineOptions({
  name: "SocialSecurity"
})


</script>

<template>
  <QPanel title="社保申报数据">
    <Flex >
      <SocialSecurityInfo />
      <SocialSecurityChart />
    </Flex>
  </QPanel>
</template>

<style scoped lang="scss"></style>