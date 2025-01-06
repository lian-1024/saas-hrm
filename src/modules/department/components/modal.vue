<script lang="ts" setup>
import DepartmentService from '@/modules/department/services/department.service';
import { QModal } from '@/shared/components/base/Modal';
import { useRequest } from '@/shared/composables/use-request/use-request';
import type { DepartmentDetailVO } from '@/modules/department/types';
import type { FormInstance, FormProps, SelectProps } from 'ant-design-vue';
import { Button, Flex, Form, Input, Select, message } from 'ant-design-vue';
import { computed, ref, watch } from 'vue';

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
  type: "add" | "edit";
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
  managerId: '',
  introduce: '',
  createTime: '',
  id: 0,
  managerName: '',
  pid: 0
});


// 计算标题
const computedTitle = computed(() => {
  return props.type === "add" ? "添加子部门" : "编辑部门";
});

// 表单验证规则
const formRules: FormProps['rules'] = {
  name: [
    { required: true, message: '请输入部门名称', trigger: 'blur', },
    { min: 2, max: 10, message: '部门名称长度为2-10个字符', trigger: 'blur', }
  ],
  code: [
    { required: true, message: '请输入部门编码', trigger: 'blur', },
    { min: 2, max: 10, message: '部门编码长度为2-10个字符', trigger: 'blur', }
  ],
  managerId: [
    { required: true, message: '请选择部门负责人', trigger: 'change', }
  ],
  introduce: [
    { required: true, message: '请输入部门介绍', trigger: 'blur', },
    { max: 100, message: '部门介绍最多100个字符', trigger: 'blur', }
  ]
};


const { run: addDepartment, loading: addLoading } = useRequest(DepartmentService.addDepartment, {
  manual: true,
  onSuccess: (data) => {
    console.log(data);
    message.success("新增部门成功")
  },
  onError: (error) => {
    if (error.message) {
      message.error(error.message)
    } else {
      message.error("新增部门失败")
    }
  },
  onFinally: () => closeModal()
})

useRequest(DepartmentService.getDepartmentManagerList, {
  onSuccess: ({ data }) => {
    departmentManagerList.value = data.map(item => ({
      label: item.username,
      value: item.id
    }))
  }
})

const { run: getDepartmentDetail, } = useRequest(DepartmentService.getDepartmentDetail, {
  manual: true,
  onSuccess: ({ data }) => {
    formData.value = data
  }
})

const { run: updateDepartment, loading: updateDepartmentLoading } = useRequest(DepartmentService.updateDepartment, {
  manual: true,
  onSuccess: (data) => {
    message.success("编辑部门成功")
  },
  onError: (error) => {
    if (error.message) {
      message.error(error.message)
    } else {
      message.error("编辑部门失败")
    }
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
    if (!props.departmentId) return message.error("请先选择部门")

    switch (props.type) {
      case 'add':
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
  }).catch(err => {
    console.error('表单验证失败：', err);
  });
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

const loading = computed(() => addLoading.value)
</script>

<template>
  <QModal :width="600" :open="openStatus" @cancel="closeModal" :title="computedTitle" closable mask
    :maskClosable="false">
    <div class="department-modal">
      <Form ref="formRef" :model="formData" :rules="formRules" :label-col="formLabelCol" :wrapper-col="formWrapperCol">
        <Form.Item label="部门名称" name="name">
          <Input v-model:value="formData.name" placeholder="请输入部门名称" :maxLength="10" show-count />
        </Form.Item>

        <Form.Item label="部门编码" name="code">
          <Input v-model:value="formData.code" placeholder="请输入部门编码" :maxLength="10" show-count />
        </Form.Item>

        <Form.Item label="部门负责人" name="managerId">
          <Select placeholder="请选择部门负责人" v-model:value="formData.managerId" :options="departmentManagerList" />
        </Form.Item>

        <Form.Item label="部门介绍" name="introduce">
          <Input.TextArea v-model:value="formData.introduce" placeholder="请输入部门介绍" :maxLength="100"
            :auto-size="{ minRows: 3, maxRows: 5 }" show-count />
        </Form.Item>
      </Form>
    </div>

    <template #footer>
      <Flex justify="center">
        <Button type="primary" @click="handleSubmit" :loading="loading">确定</Button>
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