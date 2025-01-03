<script setup lang="ts">
import { useRequest } from '@/composables/use-request';
import { FormOfEmployment } from '@/constants/employee';
import DepartmentService from '@/services/department.service';
import EmployeeService from '@/services/employee.service';
import type { EmployeeDetailVO } from '@/types/api';
import { convertDepartmentToCascader } from '@/utils/convert';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons-vue';
import type { CascaderProps } from 'ant-design-vue';
import { Button, Cascader, Col, DatePicker, Flex, Form, FormItem, Input, message, Row, Select, Upload, type FormProps, type UploadProps } from 'ant-design-vue';
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
defineOptions({
  name: "EmployeeDetailPage"
})


const defaultEmployee: EmployeeDetailVO = {
  id: 1,
  workNumber: "",
  mobile: "",
  departmentName: "",
  departmentId: 1,
  correctionTime: '',
  roleIds: [1],
  formOfEmployment: FormOfEmployment.Formal,
  staffPhoto: '',
  timeOfEntry: '',
  username: ""
}

const formState = reactive<EmployeeDetailVO>(defaultEmployee)
const selectedDepartmentId = ref<string[]>([])
const route = useRoute()
const cascaderOptions = ref<CascaderProps['options']>([])
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


const { run: getEmployeeDetailById } = useRequest(EmployeeService.getEmployeeDetailById, {
  manual: true,
  onSuccess: ({ data }) => {
    console.log(data)
    Object.assign(formState, data)
    selectedDepartmentId.value = [data.departmentId.toString()]
  }
})
const { data: departmentList } = useRequest(DepartmentService.getCompanyDepartmentList, {
  onSuccess: ({ data }) => {
    console.log(data)
    cascaderOptions.value = convertDepartmentToCascader(data)
  }
})

const { run: updateEmployeeDetail } = useRequest(EmployeeService.updateEmployeeDetail, {
  manual: true,
  onSuccess: () => {
    message.success('更新成功')
  }
})


const formOfEmploymentOptions = [
  { label: '正式', value: FormOfEmployment.Formal },
  { label: '非正式', value: FormOfEmployment.InFormal },
]

const handleSave = () => {
  console.log(formState)
  console.log(selectedDepartmentId.value.slice(-1)[0])
  updateEmployeeDetail(route.params.id as string, {
    ...formState,
    departmentId: Number(selectedDepartmentId.value.slice(-1)[0]),
  })
}


onMounted(() => {
  getEmployeeDetailById(route.params.id as string)
})
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
        <Cascader :display-render="({ labels }) => labels.join('-')" placeholder="请选择部门" :options="cascaderOptions"
          v-model:value="selectedDepartmentId" />
      </FormItem>
      <FormItem label="聘用形式" name="formOfEmployment">
        <!-- <Input v-model:value="formState.formOfEmployment" /> -->
        <Select placeholder="请选择聘用形式" v-model:value="formState.formOfEmployment" :options="formOfEmploymentOptions" />
      </FormItem>
      <FormItem label="入职时间" name="timeOfEntry">
        <DatePicker value-format="YYYY-MM-DD" v-model:value="formState.timeOfEntry" />
      </FormItem>
      <FormItem label="转正时间" name="correctionTime">
        <DatePicker value-format="YYYY-MM-DD" v-model:value="formState.correctionTime" />
      </FormItem>
      <FormItem label="员工头像" name="staffPhoto">
        <Upload v-model:file-list="fileList" name="avatar" list-type="picture-card" class="avatar-uploader"
          :show-upload-list="false" action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :before-upload="beforeUpload" @change="handleChange">
          <img v-if="formState.staffPhoto" :src="formState.staffPhoto" alt="avatar" />
          <div v-else>
            <LoadingOutlined v-if="loading"></LoadingOutlined>
            <PlusOutlined v-else></PlusOutlined>
            <div class="ant-upload-text">Upload</div>
          </div>
        </Upload>
      </FormItem>
      <FormItem>
        <Row>
          <Col :span="12" />
          <Col>
          <Button type="primary" @click="handleSave">保存更新</Button>
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