<script setup lang="ts">
import { usePagination } from '@/composables/use-pagination';
import { useRequest } from '@/composables/use-request';
import { Table } from 'ant-design-vue';
import { ref, watchEffect } from 'vue';

interface ListItem {
  id: number;
  name: string;
}

// 模拟API请求
const getList = (params: { current: number; pageSize: number }) => {
  return new Promise<{ data: ListItem[]; total: number }>((resolve) => {
    setTimeout(() => {
      resolve({
        data: Array.from({ length: params.pageSize }, (_, i) => ({
          id: i + 1 + (params.current - 1) * params.pageSize,
          name: `Item ${i + 1}`
        })),
        total: 100
      });
    }, 1000);
  });
};

// 使用分页Hook
const {
  current,
  pageSize,
  pagination,
  refresh
} = usePagination({
  defaultCurrent: 1,
  defaultPageSize: 10,
  onChange: (page, size) => {
    // 页码改变时重新请求
    run({ current: page, pageSize: size });
  }
});

// 请求数据
const { loading, run } = useRequest(getList, {
  manual: true,
  onSuccess: ({ total }) => {
    // 更新总数
    pagination.total = total;
  }
});

// 首次加载
watchEffect(() => {
  run({ current, pageSize });
});

const columns = [
  {
    title: 'ID',
    dataIndex: 'id'
  },
  {
    title: 'Name',
    dataIndex: 'name'
  }
];

const dataSource = ref<ListItem[]>([]);
</script>

<template>
  <Table :loading="loading" :columns="columns" :dataSource="dataSource" :pagination="pagination" />
</template>