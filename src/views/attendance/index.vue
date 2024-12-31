<script setup lang="ts">
import type { EmployeeAttendanceVO } from '@/types/attendance'
import { convertDistance } from '@/utils/convert'
import { generateMenuItem } from '@/utils/generate-menu-item'
import { CloseOutlined } from '@ant-design/icons-vue'
import {
  Button,
  CheckboxGroup,
  Drawer,
  Flex,
  Menu,
  Slider,
  Table,
  TypographyText,
  type CheckboxGroupProps,
  type MenuProps,
  type SliderProps,
  type TableProps,
} from 'ant-design-vue'
import { reactive, ref, useId } from 'vue'
import ScopedMap from './components/map.vue'
import SettingModal from './components/setting/modal.vue'


interface EmployeeAttendanceVOWithKey extends EmployeeAttendanceVO {
  key: string | number
}

defineOptions({
  name: 'AttendancePage',
})

const department: CheckboxGroupProps['options'] = [
  {
    label: '字节跳动',
    value: 'ByteDance',
  },
]

const columns: TableProps<EmployeeAttendanceVOWithKey>['columns'] = [
  {
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    width: 100,
  },
  {
    title: '姓名',
    dataIndex: 'username',
    key: 'username',
    width: 150,
  },
  {
    title: '工号',
    dataIndex: 'workNumber',
    key: 'workNumber',
    width: 150,
  },
  {
    title: '部门',
    dataIndex: 'departmentName',
    key: 'departmentName',
    width: 150,
  },
  {
    title: '手机',
    dataIndex: 'mobile',
    key: 'mobile',
    width: 150,
  },
]
const employeeDataSource: EmployeeAttendanceVOWithKey[] = [
  {
    key: useId(),
    id: Math.random(),
    departmentId: 1,
    departmentName: '字节跳动',
    mobile: '1859999999',
    username: 'lianqq',
    workNumber: 'LIANQQ',
  },
]

const drawerStatus = ref(false)


const formatSliderTip: SliderProps['tipFormatter'] = (value = 0) =>
  `${convertDistance(value)}内可打卡`

/**范围半径 */
const scopedRadius = ref(200)
const selectedCompanyId = ref<string | number>("ByteDance")

const companyMenuItems = reactive([
  generateMenuItem("ByteDance", "字节跳动"),
  generateMenuItem("Tencent", "腾讯"),
  generateMenuItem("Alibaba", "阿里巴巴"),
])

const handleSelectedCompany: MenuProps['onClick'] = (info) => {
  console.log("selected:", info);
  selectedCompanyId.value = info.key
}


// 设置模态框状态
const settingModalStatus = ref(false)
</script>

<template>
  <Flex class="attendance-wrapper" vertical gap="middle">
    <Flex justify="space-between" align="center" class="attendance-top">
      <Flex vertical align="center" gap="small">
        <TypographyText class="attendance-top-title">未处理</TypographyText>
        <TypographyText class="attendance-top-total">0</TypographyText>
      </Flex>
      <Flex gap="middle">
        <Button @click="drawerStatus = true">打卡范围</Button>
        <Button type="primary" @click="settingModalStatus = true">设置</Button>
      </Flex>
    </Flex>
    <Flex class="attendance-middle" gap="small" align="center">
      <!-- 部门 -->
      <TypographyText strong>部门:</TypographyText>
      <CheckboxGroup :options="department" />
    </Flex>
    <div class="attendance-table">
      <!-- table -->
      <Table :columns="columns" :pagination="{ position: ['bottomCenter'] }" :data-source="employeeDataSource"
        bordered />
    </div>
    <!-- 打卡范围 setting drawer -->
    <Drawer height="100vh" @close="drawerStatus = false" title="打卡范围设置" v-model:open="drawerStatus" placement="top"
      :closable="false">
      <template #extra>
        <CloseOutlined />
      </template>
      <template #default>
        <Flex class="h-full" gap="middle">
          <div class="flex-1 h-full">
            <ScopedMap :scoped-radius="scopedRadius" />
            <!-- <MarkerDemo /> -->
          </div>
          <Flex class="attendance-scope-right" vertical gap="middle">
            <!-- 公司列表 -->
            <div class="attendance-scope-company-list flex-1">
              <Menu v-model:active-key="selectedCompanyId" :items="companyMenuItems" @click="handleSelectedCompany" />
            </div>
            <!-- 半径 slider -->
            <div>
              <TypographyText type="secondary">半径</TypographyText>
              <Slider :max="1000" v-model:value="scopedRadius" :tip-formatter="formatSliderTip" />
            </div>
          </Flex>
        </Flex>
      </template>

      <template #footer>
        <Flex justify="end" gap="middle">
          <Button>取消</Button>
          <Button type="primary">批量保存</Button>
        </Flex>
      </template>
    </Drawer>
    <SettingModal v-model:open="settingModalStatus" />
  </Flex>
</template>

<style scoped lang="less">
.attendance {
  &-top {
    width: 100%;
    padding: var(--spacing-large);
    background-color: var(--color-background);

    &-title {
      font-size: var(--font-size-middle);
    }

    &-total {
      font-size: var(--font-size-large);
    }
  }

  &-middle {
    padding: var(--spacing-large);
    background-color: var(--color-background);
  }

  &-table {
    padding: var(--spacing-large);
    background-color: var(--color-background);
  }

  &-scope {
    &-right {
      height: 100%;
      min-width: 300px;

      :deep(.table-striped) td {
        background-color: var(--color-background-secondary);
      }
    }
  }
}
</style>
