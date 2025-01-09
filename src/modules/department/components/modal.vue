<script lang="ts" setup>
import DepartmentService from '@/modules/department/services/department.service';
import type { DepartmentDetailVO } from '@/modules/department/types';
import { QModal } from '@/shared/components/base/modal';
import { QSpin } from '@/shared/components/base/spin';
import { useRequest } from '@/shared/composables/use-request/use-request';
import type { FormInstance, FormProps, SelectProps } from 'ant-design-vue';
import { Button, Flex, Form, Input, Select, message } from 'ant-design-vue';
import { computed, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
interface DepartmentFormData {
  name: string;
  code: string;
  managerId: string;
  introduce: string;
}

defineOptions({
  name: "DepartmentModal"
})

const props = defineProps<{
  type: "addChild" | "edit";
  departmentId?: string;
}>();

const departmentManagerList = ref<SelectProps['options']>([]);
// 双向绑定
const openStatus = defineModel<boolean>("open", { default: false });

// 表单实例
const formRef = ref<FormInstance>();
// 表单数据
const formData = ref<DepartmentDetailVO>({
  name: '',
  code: '',
  managerId: 1,
  introduce: '',
  createTime: '',
  id: 0,
  managerName: '',
  pid: 0
});


const emits = defineEmits(['success'])

// 计算标题
const computedTitle = computed(() => {
  return props.type === "addChild" ? t('department.operations.addChild') : t('department.operations.edit');
});

// 表单验证规则
const formRules: FormProps['rules'] = {
  name: [
    { required: true, message: t('department.operations.formRules.name.required'), trigger: 'blur', },
    { min: 2, max: 10, message: t('department.operations.formRules.name.min'), trigger: 'blur', }
  ],
  code: [
    { required: true, message: t('department.operations.formRules.code.required'), trigger: 'blur', },
    { min: 2, max: 10, message: t('department.operations.formRules.code.min'), trigger: 'blur', }
  ],
  managerId: [
    { required: true, message: t('department.operations.formRules.managerId.required'), trigger: 'change', }
  ],
  introduce: [
    { required: true, message: t('department.operations.formRules.introduce.required'), trigger: 'blur', },
    { max: 100, message: t('department.operations.formRules.introduce.max'), trigger: 'blur', }
  ]
};


const { run: addDepartment, loading: addLoading } = useRequest(DepartmentService.addDepartment, {
  manual: true,
  onSuccess: (data) => {
    console.log(data);
    message.success(t("department.operations.operationMessage.addSuccess"))
    emits('success')
  },
  onError: (error) => {
    message.error(t("department.operations.operationMessage.addError"))
  },
  onFinally: () => closeModal()
})

const { loading: getDepartmentManagerListLoading } = useRequest(DepartmentService.getDepartmentManagerList, {
  onSuccess: ({ data }) => {
    departmentManagerList.value = data.map(item => ({
      label: item.username,
      value: item.id
    }))
  }
})

const { run: getDepartmentDetail, loading: getDepartmentDetailLoading } = useRequest(DepartmentService.getDepartmentDetail, {
  manual: true,
  onSuccess: ({ data }) => {
    formData.value = data
  }
})

const { run: updateDepartment, loading: updateDepartmentLoading } = useRequest(DepartmentService.updateDepartment, {
  manual: true,
  onSuccess: (data) => {
    message.success(t("department.operations.operationMessage.editSuccess"))
    emits('success')
  },
  onError: (error) => {
    message.error(error.message || t("department.operations.operationMessage.editError"))
  },
  onFinally: () => closeModal()
})





watch(() => props.departmentId, (newVal) => {
  if (newVal) {
    getDepartmentDetail(newVal)
  }
})

// 提交表单
const handleSubmit = () => {
  formRef.value?.validate().then(async () => {
    // 表单验证通过
    if (!props.departmentId) return message.error(t("department.operations.operationMessage.selectDepartment"))

    switch (props.type) {
      case 'addChild':
        const { id, createTime, managerName, ...rest } = formData.value

        // 调用API保存数据
        addDepartment({
          ...rest,
          pid: props.departmentId
        })
        break;
      case 'edit':
        updateDepartment(formData.value)
        break;
    }
  })
};

// 关闭模态框
const closeModal = () => {
  openStatus.value = false;
  formRef.value?.resetFields();
};

// 定义暴露的方法
defineExpose({
  // 设置表单数据（用于编辑时）
  setFormData: (data: Partial<DepartmentFormData>) => {
    Object.assign(formData.value, data);
  }
});

const formLabelCol: FormProps['labelCol'] = { span: 6 }
const formWrapperCol: FormProps['wrapperCol'] = { span: 18 }


const loading = computed(() => getDepartmentDetailLoading.value || getDepartmentManagerListLoading.value || updateDepartmentLoading.value || addLoading.value)
</script>

<template>
  <QModal :width="600" :open="openStatus" @cancel="closeModal" :title="computedTitle" closable mask
    :maskClosable="false">
    <QSpin :spinning="loading">
      <div class="department-modal">
        <Form ref="formRef" layout="vertical" :model="formData" :rules="formRules">
          <Form.Item :label="t('department.operations.formFields.name')" name="name">
            <Input v-model:value="formData.name" :placeholder="t('department.operations.formPlaceholder.name')"
              :maxLength="10" show-count />
          </Form.Item>

          <Form.Item :label="t('department.operations.formFields.code')" name="code">
            <Input v-model:value="formData.code" :placeholder="t('department.operations.formPlaceholder.code')"
              :maxLength="10" show-count />
          </Form.Item>

          <Form.Item :label="t('department.operations.formFields.managerId')" name="managerId">
            <Select :placeholder="t('department.operations.formPlaceholder.managerId')"
              v-model:value="formData.managerId" :options="departmentManagerList" />
          </Form.Item>

          <Form.Item :label="t('department.operations.formFields.introduce')" name="introduce">
            <Input.TextArea v-model:value="formData.introduce"
              :placeholder="t('department.operations.formPlaceholder.introduce')" :maxLength="100"
              :auto-size="{ minRows: 3, maxRows: 5 }" show-count />
          </Form.Item>
        </Form>
      </div>
    </QSpin>

    <template #footer>
      <Flex justify="center">
        <Button type="primary" @click="handleSubmit" :loading="addLoading">确定</Button>
        <Button @click="closeModal">取消</Button>
      </Flex>
    </template>
  </QModal>
</template>

<style lang="less" scoped>
// 如果需要自定义样式
.department-modal {
  padding: var(--spacing-large);
}
</style>