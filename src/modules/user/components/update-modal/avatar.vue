<script setup lang="ts">
import { useUserStore } from '@/core/stores'
import { QSpin } from '@/shared/components/base/spin'
import { useRequest } from '@/shared/composables/use-request'
import { preloadImage } from '@/shared/utils/file/preload-image'
import { readFileAsBase64 } from '@/shared/utils/file/read-file-as-base64'
import { RotateLeftOutlined, RotateRightOutlined, UploadOutlined } from '@ant-design/icons-vue'
import { useFileDialog } from '@vueuse/core'
import { Button, Flex, Image, message } from 'ant-design-vue'
import { h, onMounted, reactive, ref } from 'vue'
import { VueCropper } from 'vue-cropper'
import 'vue-cropper/dist/index.css'
import { useI18n } from 'vue-i18n'
import { AvatarCropperOperation } from '../../constants'
import UserService from '../../services/user.service'

const { t } = useI18n()
const emit = defineEmits(['success'])

const userStore = useUserStore()

const cropperRef = ref<InstanceType<typeof VueCropper>>()

const cropperOptions = reactive({
  img: '',
  autoCrop: true, // 是否默认生成截图框
  canMove: true, // 是否可以移动截图框
  canMoveBox: true, // 是否可以移动截图框
  fixed: true, // 是否固定截图框
  fixedNumber: [1, 1], // 截图框的固定比例
  centerBox: true, // 是否将截图框居中
  infoTrue: true, // 是否显示截图框信息
  fillColor: '#fff', // 导出时背景颜色
})

const previewOptions = reactive({
  url: '',
  width: 200,
  height: 200,
})

const handleRealTime = async () => {
  // 获取裁剪后的图片数据
  previewOptions.url = await getCropDataBase64()
}

const getCropDataBase64 = (): Promise<string> => {
  return new Promise((resolve) =>
    cropperRef.value?.getCropData((data: string) => {
      resolve(data)
    }),
  )
}

const clickCropOperationMap = {
  [AvatarCropperOperation.ROTATE_LEFT]: () => cropperRef.value.rotateLeft(),
  [AvatarCropperOperation.ROTATE_RIGHT]: () => cropperRef.value.rotateRight(),
}

const { run: updateAvatar, loading } = useRequest(UserService.updateAvatar, {
  manual: true,
  onSuccess: () => {
    message.success(t('user.updateModal.avatar.messages.success'))
    emit('success')
  },
  onError: (error) => {
    message.error(error.message || t('user.updateModal.avatar.messages.error'))
  },
})

const handleSubmit = () => {
  if (!previewOptions.url) return message.warn(t('user.updateModal.avatar.messages.warning'))
  updateAvatar({
    staffPhoto: previewOptions.url,
  })
}

const { open: openFileDialog, onChange: handleFileChange } = useFileDialog({
  accept: 'image/*',
  multiple: false,
  directory: false,
})

handleFileChange(async (files) => {
  console.log('files:', files)
  if (!files) return
  const base64 = await readFileAsBase64(files[0])
  cropperOptions.img = base64
})

defineExpose({
  loading,
  handleSubmit,
})

const loadingImage = ref(false)
const loadImage = async () => {
  try {
    loadingImage.value = true
    cropperOptions.img = await preloadImage(userStore.userInfo?.staffPhoto || '')
  } finally {
    loadingImage.value = false
  }
}

onMounted(async () => {
  await loadImage()
})
</script>

<template>
  <QSpin :spinning="loadingImage" wrapper-class-name="flex-1 h-full">
    <Flex class="avatar-upload-wrapper" gap="large">
      <div class="avatar-upload-cropper">
        <VueCropper ref="cropperRef" v-bind="cropperOptions" @realTime="handleRealTime" />
        <Flex gap="middle">
          <Button
            shape="circle"
            type="primary"
            :icon="h(UploadOutlined)"
            @click="() => openFileDialog()"
          />
          <Button
            shape="circle"
            type="primary"
            :icon="h(RotateRightOutlined)"
            @click="clickCropOperationMap[AvatarCropperOperation.ROTATE_RIGHT]"
          />
          <Button
            shape="circle"
            type="primary"
            :icon="h(RotateLeftOutlined)"
            @click="clickCropOperationMap[AvatarCropperOperation.ROTATE_LEFT]"
          />
        </Flex>
      </div>
      <div class="avatar-upload-preview">
        <div class="avatar-upload-preview-img">
          <Image
            v-if="previewOptions.url"
            :src="previewOptions.url"
            :width="previewOptions.width"
            :height="previewOptions.height"
          />
        </div>
      </div>
    </Flex>
  </QSpin>
</template>

<style scoped lang="less">
.avatar {
  &-upload {
    &-wrapper {
      height: 360px;
    }

    &-cropper {
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-large);

      :deep(.ant-spin-container) {
        height: 100%;
      }
    }

    &-preview {
      padding-inline-end: var(--spacing-large);

      &-img {
        height: 200px;
        width: 200px;
        border: 1px solid #e8e8e8;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        overflow: hidden;
      }
    }
  }
}

:deep(.cropper-view-box) {
  outline: 1px solid #1890ff;
}

:deep(.cropper-point) {
  background-color: #1890ff;
}

:deep(.ant-image) {
  transition: transform 0.3s ease;
  transform-origin: center center;
}
</style>
