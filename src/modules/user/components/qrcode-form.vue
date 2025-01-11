<script lang="ts" setup>
import { useUserStore } from '@/core/stores'
import { useRequest } from '@/shared/composables/use-request'
import { Button, QRCode, type QRCodeProps } from 'ant-design-vue'
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { QRCodeStatus, type QRCodeStatusType } from '../constants'
import UserService from '../services/user.service'
const { t } = useI18n()
const qrcodeKey = ref('')
const pollingTimer = ref<number>()
const userStore = useUserStore()

const qrcodeStatus = ref<QRCodeProps['status']>()

const qrcodeStatusMap: Record<QRCodeStatusType, QRCodeProps['status']> = {
  [QRCodeStatus.UN_SCAN]: 'active',
  [QRCodeStatus.SCANED]: 'scanned',
  [QRCodeStatus.SUCCESS]: 'scanned',
  [QRCodeStatus.EXPIRED]: 'expired',
  [QRCodeStatus.CANCEL]: 'expired',
}

// 获取二维码key
const { run: getQRCodeKey, loading: getQRCodeKeyLoading } = useRequest(UserService.getQRCodeKey, {
  manual: true,
  onSuccess: ({ data }) => {
    qrcodeKey.value = data
    // 获取到新的二维码key后开始轮询
    startPolling()
  },
})

// 获取二维码状态
const { run: getQRCodeStatus } = useRequest(UserService.getQRCodeStatus, {
  manual: true,
  onSuccess: ({ data }) => {
    qrcodeStatus.value = qrcodeStatusMap[data.status]
    // 如果扫码成功，停止轮询并登录
    if (Number(data.status) === QRCodeStatus.SUCCESS) {
      stopPolling()
      userStore.login(data)
    }
  },
})

// 开始轮询
const startPolling = () => {
  // 先清除可能存在的定时器
  stopPolling()
  // 每3秒查询一次状态
  pollingTimer.value = setInterval(() => {
    if (qrcodeKey.value) {
      getQRCodeStatus(qrcodeKey.value)
    }
  }, 3000)
}

// 停止轮询
const stopPolling = () => {
  if (pollingTimer.value) {
    clearInterval(pollingTimer.value)
    pollingTimer.value = undefined
  }
}

// 刷新二维码
const handleRefresh = () => {
  getQRCodeKey()
}

onMounted(async () => {
  qrcodeStatus.value = 'loading'
  await getQRCodeKey()
  qrcodeStatus.value = 'active'
})

// 组件卸载时清除定时器
onUnmounted(() => {
  stopPolling()
})
</script>

<template>
  <div class="qrcode-form">
    <div class="qrcode-wrapper">
      <QRCode :value="qrcodeKey" :status="qrcodeStatus" />
      <p class="qrcode-tip">{{ t('user.qrcodeForm.tip') }}</p>
    </div>
    <Button type="primary" :loading="getQRCodeKeyLoading" block size="large" @click="handleRefresh">
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
