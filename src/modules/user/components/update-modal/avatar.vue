<script setup lang="ts">
import { RotateLeftOutlined, RotateRightOutlined, UploadOutlined } from '@ant-design/icons-vue';
import { useFileDialog } from '@vueuse/core';
import { Button, Flex, Image } from 'ant-design-vue';
import { h, reactive, ref } from 'vue';
import { VueCropper } from 'vue-cropper';
import 'vue-cropper/dist/index.css';
import { AvatarCropperOperation, type AvatarCropperOperationType } from '../../constants';

const emit = defineEmits(['success'])

const { } = useFileDialog()

const loading = ref(false)
const cropperRef = ref<InstanceType<typeof VueCropper>>()

const cropperOptions = reactive({
  img: new URL("@/assets/common/img.jpeg", import.meta.url).href,
  autoCrop: true, // 是否默认生成截图框
  canMove: true, // 是否可以移动截图框
  canMoveBox: true, // 是否可以移动截图框
  fixed: true, // 是否固定截图框
  fixedNumber: [1, 1], // 截图框的固定比例
  centerBox: true, // 是否将截图框居中
  infoTrue: true, // 是否显示截图框信息
  fillColor: '#fff' // 导出时背景颜色
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
  return new Promise((resolve) => cropperRef.value?.getCropData((data: string) => {
    resolve(data)
  }))
}

const handleUploadAvatar = async () => {


}


const clickCropOperationMap = {
  [AvatarCropperOperation.ROTATE_LEFT]: () => cropperRef.value.rotateLeft(),
  [AvatarCropperOperation.ROTATE_RIGHT]: () => cropperRef.value.rotateRight(),
  [AvatarCropperOperation.GET_CROP_DATA]: () => handleUploadAvatar(),
}

const handleClickCropOperation = (type: AvatarCropperOperationType) => {
  if (!cropperRef.value) return
  clickCropOperationMap[type]()
}


const handleSubmit = () => {
  cropperRef.value?.getCropBlob((blob: Blob) => {
    console.log('blob:', blob)
  })
}




defineExpose({
  loading,
  handleSubmit
})
</script>

<template>
  <Flex class="avatar-upload-wrapper" gap="large">
    <div class="avatar-upload-cropper">
      <VueCropper ref="cropperRef" v-bind="cropperOptions" @realTime="handleRealTime" />
      <Flex gap="middle">
        <Button shape="circle" type="primary" :icon="h(UploadOutlined)"
          @click="clickCropOperationMap[AvatarCropperOperation.GET_CROP_DATA]" />
        <Button shape="circle" type="primary" :icon="h(RotateRightOutlined)"
          @click="clickCropOperationMap[AvatarCropperOperation.ROTATE_RIGHT]" />
        <Button shape="circle" type="primary" :icon="h(RotateLeftOutlined)"
          @click="clickCropOperationMap[AvatarCropperOperation.ROTATE_LEFT]" />
      </Flex>
    </div>
    <div class="avatar-upload-preview">
      <div class="avatar-upload-preview-img">
        <Image v-if="previewOptions.url" :src="previewOptions.url" :width="previewOptions.width"
          :height="previewOptions.height" />
      </div>
    </div>
  </Flex>
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