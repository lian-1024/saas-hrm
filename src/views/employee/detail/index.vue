<script setup lang="ts">
import { FormOfEmployment } from '@/constants/employee';
import type { EmployeeInfoVO } from '@/types';
import { formatDate } from '@/utils/date';
import { Button, Col, Flex, Form, FormItem, Input, message, Row, type FormProps, type UploadProps } from 'ant-design-vue';
import { reactive, ref } from 'vue';

defineOptions({
  name: "EmployeeDetailPage"
})



const formState = reactive<EmployeeInfoVO>({
  id: 1,
  workNumber: "ZUISHUAI-1",
  mobile: "18500000000",
  departmentName: "字节跳动",
  correctionTime: formatDate(Date()),
  roleIds: [1],
  formOfEmployment: FormOfEmployment.Formal,
  staffPhoto: '/vite.svg',
  timeOfEntry: formatDate(Date()),
  username: "lianqq"
})


const formLabelCol: FormProps['labelCol'] = { span: 8 }
const formWrapperCol: FormProps['wrapperCol'] = { span: 16 }


function getBase64(img: Blob, callback: (base64Url: string) => void) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
}

const fileList = ref([]);
const loading = ref<boolean>(false);
const imageUrl = ref<string>('');

const handleChange: UploadProps['onChange'] = (info) => {
  if (info.file.status === 'uploading') {
    loading.value = true;
    return;
  }
  if (info.file.status === 'done') {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj!, (base64Url: string) => {
      imageUrl.value = base64Url;
      loading.value = false;
    });
  }
  if (info.file.status === 'error') {
    loading.value = false;
    message.error('upload error');
  }
};

const beforeUpload: UploadProps['beforeUpload'] = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};
</script>

<template>
  <Flex class="detail-wrapper h-full" justify="star">
    <Form class="detail-form" :model="formState" :label-col="formLabelCol" :wrapper-col="formWrapperCol">
      <FormItem label="姓名" name="username">
        <Input v-model:value="formState.username" placeholder="请输入员工姓名全称" />
      </FormItem>
      <FormItem label="工号" name="workNumber">
        <Input v-model:value="formState.workNumber" disabled />
      </FormItem>
      <FormItem label="手机" name="mobile">
        <Input v-model:value="formState.mobile" disabled />
      </FormItem>
      <FormItem label="部门" name="departmentName">
        <Input v-model:value="formState.departmentName" />
      </FormItem>
      <FormItem label="聘用形式" name="formOfEmployment">
        <Input v-model:value="formState.formOfEmployment" />
      </FormItem>
      <FormItem label="入职时间" name="timeOfEntry">
        <Input v-model:value="formState.timeOfEntry" />
      </FormItem>
      <FormItem label="转正时间" name="correctionTime">
        <Input v-model:value="formState.correctionTime" />
      </FormItem>
      <FormItem label="员工头像" name="staffPhoto">
        <a-upload v-model:file-list="fileList" name="avatar" list-type="picture-card" class="avatar-uploader"
          :show-upload-list="false" action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :before-upload="beforeUpload" @change="handleChange">
          <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
          <div v-else>
            <loading-outlined v-if="loading"></loading-outlined>
            <plus-outlined v-else></plus-outlined>
            <div class="ant-upload-text">Upload</div>
          </div>
        </a-upload>
      </FormItem>
      <FormItem>
        <Row>
          <Col :span="12" />
          <Col>
          <Button type="primary">保存更新</Button>
          </Col>

        </Row>
      </FormItem>
    </Form>
  </Flex>
</template>

<style scoped lang="less">
.detail {
  &-wrapper {
    padding: var(--spacing-large);
    background-color: var(--color-background);
  }

  &-form {
    min-width: 500px;
  }
}
</style>