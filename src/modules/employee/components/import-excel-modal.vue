<script lang="ts" setup>
import EmployeeService from '@/modules/employee/services/employee.service'
import { QModal } from '@/shared/components/base/modal'
import { useRequest } from '@/shared/composables/use-request/use-request'
import { InboxOutlined } from '@ant-design/icons-vue'
import {
  Button,
  Flex,
  message,
  TypographyLink,
  UploadDragger,
  type UploadProps,
} from 'ant-design-vue'
import FileSaver from 'file-saver'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const modalStatus = defineModel('open', { default: false })

// 获取导入模板
const { run: getExportTemplate } = useRequest(EmployeeService.getExportTemplate, {
  manual: true,
  onSuccess: ({ data }) => {
    FileSaver.saveAs(data as Blob, '员工导入模版.xlsx')
  },
})

// 自定义上传方法
const handleUploadFile: UploadProps['customRequest'] = (options) => {
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

// 上传配置
const uploadProps: UploadProps = {
  name: 'file',
  multiple: false,
  accept: '.xlsx,.xls',
  showUploadList: false,
  customRequest: handleUploadFile,
  beforeUpload: (file) => {
    const isExcel =
      file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
      file.type === 'application/vnd.ms-excel'
    if (!isExcel) {
      message.error(t('employee.importModal.fileType.error'))
      return false
    }
    return true
  },
}

// 处理上传
const { run: uploadEmployee, loading: uploadEmployeeLoading } = useRequest(
  EmployeeService.uploadEmployee,
  {
    manual: true,
    onSuccess: () => {
      message.success(t('employee.importModal.success'))
      modalStatus.value = false // 关闭弹窗
    },
    onError: (error) => {
      message.error(error.message || t('employee.importModal.error'))
    },
  },
)

// 取消上传
const handleCancel = () => {
  modalStatus.value = false
}
</script>
<template>
  <QModal v-model:open="modalStatus" :title="t('employee.importModal.title')" mask mask-closable>
    <div class="import-wrapper">
      <UploadDragger v-bind="uploadProps">
        <p class="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <TypographyLink class="ant-upload-text" @click.stop="getExportTemplate">
          {{ t('employee.importModal.downloadTemplate') }}
        </TypographyLink>
        <p class="ant-upload-hint import-click">
          {{ t('employee.importModal.dragText') }}
          <TypographyLink>{{ t('employee.importModal.clickToUpload') }} </TypographyLink>
        </p>
      </UploadDragger>
    </div>
    <template #footer>
      <Flex justify="flex-end" gap="small">
        <Button @click="handleCancel">{{ t('employee.importModal.buttons.cancel') }}</Button>
        <Button type="primary" :loading="uploadEmployeeLoading">{{
          t('employee.importModal.buttons.confirm')
        }}</Button>
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
