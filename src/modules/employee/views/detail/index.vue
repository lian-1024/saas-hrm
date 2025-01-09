<script setup lang="ts">
import router from '@/core/router';
import DepartmentService from '@/modules/department/services/department.service';
import { FormOfEmployment } from '@/modules/employee/constants';
import EmployeeService from '@/modules/employee/services/employee.service';
import type { UpdateWithAddEmployeeParams } from '@/modules/employee/types';
import { QSpin } from '@/shared/components/base/spin';
import { useAntdToken } from '@/shared/composables/use-antd-token';
import { useRequest } from '@/shared/composables/use-request/use-request';
import { DepartmentTree } from '@/shared/utils/convert/department';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons-vue';
import type { CascaderProps, FormInstance } from 'ant-design-vue';
import { Button, Cascader, Col, DatePicker, Flex, Form, FormItem, Input, message, Row, Select, Upload, type FormProps, type UploadProps } from 'ant-design-vue';
import { computed, onMounted, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

const { t } = useI18n()

const { token } = useAntdToken()
defineOptions({
  name: "EmployeeDetailPage"
})


const defaultEmployee: UpdateWithAddEmployeeParams = {
  id: 1,
  workNumber: "",
  mobile: "",
  departmentId: 1,
  correctionTime: '',
  formOfEmployment: FormOfEmployment.Formal,
  staffPhoto: '',
  timeOfEntry: '',
  username: ""
}

const formState = reactive<UpdateWithAddEmployeeParams>(defaultEmployee)
const selectedDepartmentId = ref<string[]>([])
const route = useRoute()
const cascaderOptions = ref<CascaderProps['options']>([])
const formLabelCol: FormProps['labelCol'] = { span: 8 }
const formWrapperCol: FormProps['wrapperCol'] = { span: 16 }
const formRules: FormProps['rules'] = {
  username: [
    { required: true, message: t('employee.detail.form.rules.username.required'), trigger: 'blur' },
    { min: 2, max: 4, message: t('employee.detail.form.rules.username.length'), trigger: 'blur' }
  ],
  mobile: [
    { required: true, message: t('employee.detail.form.rules.mobile.required'), trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: t('employee.detail.form.rules.mobile.format'), trigger: 'blur' }
  ],
  timeOfEntry: [
    { required: true, message: t('employee.detail.form.rules.timeOfEntry.required'), trigger: 'change' },
    { type: 'date', message: t('employee.detail.form.rules.timeOfEntry.format'), trigger: 'change' }
  ],
  correctionTime: [
    { required: true, message: t('employee.detail.form.rules.correctionTime.required'), trigger: 'change' },
    { type: 'date', message: t('employee.detail.form.rules.correctionTime.format'), trigger: 'change' }
  ],
  departmentId: [
    { required: true, message: t('employee.detail.form.rules.department.required'), trigger: 'change' }
  ],
  formOfEmployment: [
    { required: true, message: t('employee.detail.form.rules.formOfEmployment.required'), trigger: 'change' }
  ]
};
const formRef = ref<FormInstance | null>(null)

function getBase64(img: Blob, callback: (base64Url: string) => void) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
}

const fileList = ref([]);
const uploadLoading = ref<boolean>(false);
const imageUrl = ref<string>('');

const handleChange: UploadProps['onChange'] = (info) => {
  if (info.file.status === 'uploading') {
    uploadLoading.value = true;
    return;
  }
  if (info.file.status === 'done') {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj!, (base64Url: string) => {
      imageUrl.value = base64Url;
      uploadLoading.value = false;
    });
  }
  if (info.file.status === 'error') {
    uploadLoading.value = false;
    message.error('upload error');
  }
};

const beforeUpload: UploadProps['beforeUpload'] = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error(t('employee.detail.upload.error.type'));
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error(t('employee.detail.upload.error.size'));
  }
  return isJpgOrPng && isLt2M;
};


const { run: getEmployeeDetailById, loading: getEmployeeDetailByIdLoading } = useRequest(EmployeeService.getEmployeeDetailById, {
  manual: true,
  onSuccess: ({ data }) => {
    console.log(data)
    Object.assign(formState, data)
    selectedDepartmentId.value = [data.departmentId.toString()]
  }
})
const { data: departmentList, loading: getCompanyDepartmentListLoading } = useRequest(DepartmentService.getCompanyDepartmentList, {
  onSuccess: ({ data }) => {
    console.log(data)
    cascaderOptions.value = DepartmentTree.toCascader(data)
  }
})

const loading = computed(() => getEmployeeDetailByIdLoading.value || getCompanyDepartmentListLoading.value)

const { run: updateEmployeeDetail, loading: updateEmployeeDetailLoading } = useRequest(EmployeeService.updateEmployeeDetail, {
  manual: true,
  onSuccess: () => {
    message.success(t('employee.messages.updateSuccess'))
  },
  onError: (error) => {
    message.error(error.message || t('employee.messages.updateError'))
  }
})

const { run: addEmployee, loading: addEmployeeLoading } = useRequest(EmployeeService.addEmployee, {
  manual: true,
  onSuccess: () => {
    message.success(t('employee.messages.addSuccess'))
    router.push('/employee')
  },
  onError: (error) => {
    message.error(error.message || t('employee.messages.addError'))
  }
})

const confirmLoading = computed(() => updateEmployeeDetailLoading.value || addEmployeeLoading.value)



const formOfEmploymentOptions = [
  { label: t('employee.table.formalOfEmployment.formal'), value: FormOfEmployment.Formal },
  { label: t('employee.table.formalOfEmployment.informal'), value: FormOfEmployment.InFormal },
]

// 保存操作
const handleSave = () => {
  const selectedId = Number(selectedDepartmentId.value.slice(-1)[0])
  formState.departmentId = selectedId
  formRef.value?.validate().then((res) => {
    if (route.params.id) {
      updateEmployeeDetail(route.params.id as string, {
        ...formState,
        departmentId: selectedId,
      })
    } else {
      const { id, ...rest } = formState
      addEmployee({
        ...rest,
        departmentId: selectedId,
      })
    }
  })
}


onMounted(async () => {
  if (route.params.id) {
    await getEmployeeDetailById(route.params.id as string)
  }
})
</script>

<template>
  <QSpin :spinning="loading">
    <Flex class="detail-wrapper h-full" justify="star">
      <Form ref="formRef" :rules="formRules" class="detail-form" :model="formState" :label-col="formLabelCol"
        :wrapper-col="formWrapperCol">
        <FormItem :label="t('employee.detail.form.fields.username')" name="username">
          <Input v-model:value="formState.username" :placeholder="t('employee.detail.form.placeholder.username')" />
        </FormItem>
        <FormItem :label="t('employee.detail.form.fields.workNumber')" name="workNumber">
          <Input v-model:value="formState.workNumber" disabled />
        </FormItem>
        <FormItem :label="t('employee.detail.form.fields.mobile')" name="mobile">
          <Input v-model:value="formState.mobile" :disabled="!!route.params.id" />
        </FormItem>
        <FormItem :label="t('employee.detail.form.fields.department')" name="departmentId">
          <Cascader :display-render="({ labels }) => labels.join('-')"
            :placeholder="t('employee.detail.form.placeholder.department')" :options="cascaderOptions"
            v-model:value="selectedDepartmentId" />
        </FormItem>
        <FormItem :label="t('employee.detail.form.fields.formOfEmployment')" name="formOfEmployment">
          <Select :placeholder="t('employee.detail.form.placeholder.formOfEmployment')"
            v-model:value="formState.formOfEmployment" :options="formOfEmploymentOptions" />
        </FormItem>
        <FormItem :label="t('employee.detail.form.fields.timeOfEntry')" name="timeOfEntry">
          <DatePicker value-format="YYYY-MM-DD" v-model:value="formState.timeOfEntry" />
        </FormItem>
        <FormItem :label="t('employee.detail.form.fields.correctionTime')" name="correctionTime">
          <DatePicker value-format="YYYY-MM-DD" v-model:value="formState.correctionTime" />
        </FormItem>
        <FormItem :label="t('employee.detail.form.fields.staffPhoto')" name="staffPhoto">
          <Upload v-model:file-list="fileList" name="avatar" list-type="picture-card" class="avatar-uploader"
            :show-upload-list="false" action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            :before-upload="beforeUpload" @change="handleChange">
            <img v-if="formState.staffPhoto" :src="formState.staffPhoto" alt="avatar" />
            <div v-else>
              <LoadingOutlined v-if="uploadLoading"></LoadingOutlined>
              <PlusOutlined v-else></PlusOutlined>
              <div class="ant-upload-text">{{ t('employee.detail.upload.text') }}</div>
            </div>
          </Upload>
        </FormItem>
        <FormItem>
          <Row>
            <Col :span="12" />
            <Col>
            <Button type="primary" @click="handleSave" :loading="confirmLoading">
              {{ route.params.id ? t('employee.detail.form.buttons.update') : t('employee.detail.form.buttons.save') }}
            </Button>
            </Col>
          </Row>
        </FormItem>
      </Form>
    </Flex>
  </QSpin>
</template>

<style scoped lang="less">
.detail {
  &-wrapper {
    padding: v-bind("`${token.paddingLG}px`");
    background-color: v-bind("token.colorBgContainer");
  }

  &-form {
    min-width: 500px;
  }
}
</style>