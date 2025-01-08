<script setup lang="ts">
import type { UploadChangeParam, UploadProps } from 'ant-design-vue';
import { Flex, Upload, message } from 'ant-design-vue';
import { ref } from 'vue';

const emit = defineEmits<{
  success: []
}>()

const loading = ref(false)
const imageUrl = ref<string>()

const beforeUpload = (file: File) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('只能上传 JPG/PNG 格式的图片!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('图片大小不能超过 2MB!')
  }
  return isJpgOrPng && isLt2M
}

const handleChange = (info: UploadChangeParam) => {
  if (info.file.status === 'uploading') {
    loading.value = true
    return
  }
  if (info.file.status === 'done') {
    loading.value = false
    // 获取上传后的图片URL
    imageUrl.value = info.file.response.url
    message.success('头像上传成功')
    emit('success')
  }
}

const uploadProps: UploadProps = {
  name: 'avatar',
  listType: 'picture-card',
  showUploadList: false,
  action: '/api/user/upload-avatar', // 替换为实际的上传接口
  beforeUpload,
  onChange: handleChange,
  headers: {
    // 如果需要认证
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
}

const handleSubmit = () => {
  console.log("handleSubmit");
}

defineExpose({
  loading,
  handleSubmit
})
</script>

<template>
  <Flex justify="center" align="center">
    <Upload v-bind="uploadProps">
      <div v-if="loading">上传中...</div>
      <img v-else-if="imageUrl" :src="imageUrl" alt="avatar" style="width: 100%" />
      <div v-else>
        <div class="ant-upload-text">点击上传</div>
      </div>
    </Upload>
  </Flex>
</template>

<style scoped>
:deep(.ant-upload-select) {
  width: 200px !important;
  height: 200px !important;
  margin: 0 auto;
  display: block;
}

.ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>