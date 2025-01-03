<script lang="ts" setup>
import { QModal } from '@/components/base/Modal';
import { useRequest } from '@/composables/use-request';
import EmployeeService from '@/services/employee.service';
import { InboxOutlined } from '@ant-design/icons-vue';
import { Button, Flex, message, TypographyLink, UploadDragger, type UploadProps } from 'ant-design-vue';
import FileSaver from 'file-saver';

const modalStatus = defineModel("open", { default: false })

// 获取导入模板
const { run: getExportTemplate } = useRequest(EmployeeService.getExportTemplate, {
  manual: true,
  onSuccess: ({ data }) => {
    FileSaver.saveAs(data as Blob, "员工导入模版.xlsx")
  }
})

// 上传配置
const uploadProps: UploadProps = {
  name: 'file',
  multiple: false,
  accept: '.xlsx,.xls',
  showUploadList: false,
  customRequest: handleUploadFile,
  beforeUpload: (file) => {
    const isExcel = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
      file.type === 'application/vnd.ms-excel';
    if (!isExcel) {
      message.error('只能上传 Excel 文件!');
      return false;
    }
    return true;
  }
}

// 处理上传
const { run: uploadEmployee, loading } = useRequest(EmployeeService.uploadEmployee, {
  manual: true,
  onSuccess: () => {
    message.success("导入成功")
    modalStatus.value = false // 关闭弹窗
  },
  onError: (error) => {
    message.error(error.message || "导入失败")
  }
})

// 自定义上传方法
function handleUploadFile(options: Parameters<Required<UploadProps>['customRequest']>[0]) {
  const { file, onSuccess, onError } = options

  // 构建 FormData
  const formData = new FormData()
  formData.append('file', file)

  // 调用上传服务
  uploadEmployee(formData)
    .then((res) => {
      onSuccess?.(res)
    })
    .catch((err) => {
      onError?.(err)
    })
}

// 取消上传
const handleCancel = () => {
  modalStatus.value = false
}
</script>

<template>
  <QModal v-model:open="modalStatus" title="员工导入" mask mask-closable>
    <div class="import-wrapper">
      <UploadDragger v-bind="uploadProps">
        <p class="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <TypographyLink class="ant-upload-text" @click.stop="getExportTemplate">
          下载导入模版
        </TypographyLink>
        <p class="ant-upload-hint import-click">
          将文件拖到此处或 <TypographyLink>点击上传</TypographyLink>
        </p>
      </UploadDragger>
    </div>
    <template #footer>
      <Flex justify="flex-end" gap="small">
        <Button @click="handleCancel">取消</Button>
        <Button type="primary" :loading="loading">确定</Button>
      </Flex>
    </template>
  </QModal>
</template>

<style lang="less" scoped>
.import {
  &-wrapper {
    padding: var(--spacing-large);
  }

  &-click {
    padding-top: var(--spacing-middle);
  }
}
</style>