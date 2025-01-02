<script lang="ts" setup>
import { QModal } from '@/components/base/Modal';
import type { FormInstance, FormProps, TreeSelectProps } from 'ant-design-vue';
import { Button, Flex, Form, Input, TreeSelect } from 'ant-design-vue';
import { computed, ref } from 'vue';
interface DepartmentFormData {
  name: string;
  code: string;
  manager: string;
  introduce: string;
}

defineOptions({
  name: "DepartmentModal"
})

const props = defineProps<{
  treeData: TreeSelectProps['treeData'];
}>();

// 双向绑定
const openStatus = defineModel<boolean>("open", { default: false });
const type = defineModel<"add" | "edit">("type", { default: "add" });

// 表单实例
const formRef = ref<FormInstance>();
// 表单数据
const formData = ref<DepartmentFormData>({
  name: '',
  code: '',
  manager: '',
  introduce: ''
});

// 计算标题
const computedTitle = computed(() => {
  return type.value === "add" ? "添加子部门" : "编辑部门";
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
  manager: [
    { required: true, message: '请选择部门负责人', trigger: 'change', }
  ],
  introduce: [
    { required: true, message: '请输入部门介绍', trigger: 'blur', },
    { max: 100, message: '部门介绍最多100个字符', trigger: 'blur', }
  ]
};

// 提交表单
const handleSubmit = () => {
  formRef.value?.validate().then(() => {
    // 表单验证通过
    console.log('表单数据：', formData.value);
    // TODO: 调用API保存数据
    closeModal();
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

</script>

<template>
  <QModal :width="600" :open="openStatus" :title="computedTitle" :maskClosable="false" :footer="null">
    <div class="department-modal">
      <Form ref="formRef" :model="formData" :rules="formRules" :label-col="formLabelCol" :wrapper-col="formWrapperCol">
        <Form.Item label="部门名称" name="name">
          <Input v-model:value="formData.name" placeholder="请输入部门名称" :maxLength="10" show-count />
        </Form.Item>

        <Form.Item label="部门编码" name="code">
          <Input v-model:value="formData.code" placeholder="请输入部门编码" :maxLength="10" show-count />
        </Form.Item>

        <Form.Item label="部门负责人" name="manager">
          <TreeSelect v-model:value="formData.manager" :tree-data="props.treeData" placeholder="请选择部门负责人"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }" show-search tree-default-expand-all :field-names="{
              children: 'children',
              label: 'title',
              value: 'key',
            }" />
        </Form.Item>

        <Form.Item label="部门介绍" name="introduce">
          <Input.TextArea v-model:value="formData.introduce" placeholder="请输入部门介绍" :maxLength="100"
            :auto-size="{ minRows: 3, maxRows: 5 }" show-count />
        </Form.Item>
      </Form>
    </div>

    <template #footer>
      <Flex justify="center">
        <Button type="primary" @click="handleSubmit">确定</Button>
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