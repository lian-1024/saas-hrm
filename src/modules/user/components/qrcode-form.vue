<script lang="ts" setup>
import { QrcodeOutlined } from '@ant-design/icons-vue'
import { Button } from 'ant-design-vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const loading = ref(false)
</script>

<template>
  <div class="qrcode-form">
    <div class="qrcode-wrapper">
      <QrcodeOutlined style="font-size: 180px; color: #eee;" />
      <p class="qrcode-tip">{{ t('user.qrcodeForm.tip') }}</p>
    </div>
    <Button type="primary" :loading="loading" block size="large">
      {{ t('user.qrcodeForm.button.refresh') }}
    </Button>
  </div>
</template>

<style scoped lang="less">
.qrcode {
  &-form {
    padding: 20px 0;
  }

  &-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
  }

  &-tip {
    margin-top: 16px;
    color: #666;
    font-size: 14px;
  }
}
</style>
