<script lang="ts" setup>
import { Result404 } from '@/shared/components/base/result';
import { useAntdToken } from '@/shared/composables/use-antd-token';
import { computed } from 'vue';
const { token } = useAntdToken()

const styles = computed(() => ({
  backgroundColor: token.value.colorBgContainer,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))
</script>

<template>
  <div :style="styles">
    <Result404 />
  </div>
</template>
