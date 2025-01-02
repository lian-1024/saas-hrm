import type { PaginationProps } from 'ant-design-vue';
import { computed, ref, watch } from 'vue';

export interface PaginationOptions {
  defaultCurrent?: number;
  defaultPageSize?: number;
  total?: number;
  onChange?: (current: number, pageSize: number) => void;
}

export interface PaginationResult {
  // 当前页码
  current: number;
  // 每页条数
  pageSize: number;
  // 总数
  total: number;
  // 改变页码
  onChange: (current: number, pageSize: number) => void;
  // 改变每页条数
  changePageSize: (pageSize: number) => void;
  // 重置
  refresh: () => void;
  // antd pagination props
  pagination: PaginationProps;
}

/**
 * 分页 Hook
 * @param options 分页配置
 * @returns 分页相关数据和方法
 */
export function usePagination(options: PaginationOptions = {}): PaginationResult {
  const {
    defaultCurrent = 1,
    defaultPageSize = 10,
    total = 0,
    onChange
  } = options;

  const current = ref(defaultCurrent);
  const pageSize = ref(defaultPageSize);
  const totalRef = ref(total);

  // 监听 total 变化
  watch(() => options.total, (newTotal) => {
    if (newTotal !== undefined) {
      totalRef.value = newTotal;
    }
  });

  // 页码改变
  const handleChange = (page: number, size: number) => {
    current.value = page;
    pageSize.value = size;
    onChange?.(page, size);
  };

  // 每页条数改变
  const changePageSize = (size: number) => {
    pageSize.value = size;
    onChange?.(current.value, size);
  };

  // 重置
  const refresh = () => {
    current.value = defaultCurrent;
    pageSize.value = defaultPageSize;
    onChange?.(defaultCurrent, defaultPageSize);
  };

  // 生成 antd pagination props
  const pagination = computed<PaginationProps>(() => ({
    current: current.value,
    pageSize: pageSize.value,
    total: totalRef.value,
    showQuickJumper: true,
    showSizeChanger: true,
    showTotal: (total) => `共 ${total} 条`,
    onChange: handleChange,
    onShowSizeChange: (_, size) => changePageSize(size),
  }));

  return {
    current: current.value,
    pageSize: pageSize.value,
    total: totalRef.value,
    onChange: handleChange,
    changePageSize,
    refresh,
    pagination: pagination.value
  };
} 