<script setup lang="ts">
import { useRequest } from '@/composables/use-request';
import RoleService from '@/services/role.service';
import type { RoleItemVO } from '@/types/api';
import type { PagingQueryParams, PagingResponse } from '@/types/api/common';
import { Button, Flex, Input, message, Popconfirm, Switch, Table, Tag, Textarea, TypographyLink, TypographyText, type PaginationProps, type TablePaginationConfig, type TableProps } from 'ant-design-vue';
import { cloneDeep } from 'lodash-es';
import { computed, reactive, ref } from 'vue';
import GivePermissionModal from './components/give-permission-modal.vue';
// 角色管理
defineOptions({
  name: "RolePage"
})

// 可编辑的列
const canEditable = ['name', 'state', 'description']

const roleColumns: TableProps['columns'] = [
  {
    title: '序号',
    dataIndex: 'id',
    key: 'key',
  },
  {
    title: '角色',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '启用',
    dataIndex: "state",
    key: "state",
  },
  {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: '操作',
    key: 'actions',
  }
]


const permissionModalStatus = ref(false)
const selectedRoleId = ref()
const roleTableDataSource = ref<PagingResponse<RoleItemVO>>({
  total: 0,
  rows: []
})

const pagingQueryParams = reactive<PagingQueryParams>({
  page: 1,
  pagesize: 10
})


// edit data
const editableData = reactive<Record<string, RoleItemVO>>({})

const { run: getRoleList } = useRequest(() => RoleService.getRoleList(pagingQueryParams), {
  onSuccess: ({ data }) => {
    roleTableDataSource.value = data
    console.log("roleTableDataSource:", roleTableDataSource.value);
  }
})

const { run: updateRole } = useRequest(RoleService.updateRole, {
  manual: true,
  onSuccess: () => {
    message.success("更新角色成功")
  },
  onError: (error) => {
    if (error.message) {
      message.error(error.message)
    } else {
      message.error("更新角色失败")
    }
  }
})


const handleGivePermission = (key: string | number) => {
  selectedRoleId.value = key
  permissionModalStatus.value = true
}

// handle edit role 
const handleEditRole = (key: string | number) => {
  console.log("edit role", key);
  // 将当前行数据克隆到editableData（可编辑数据当中）
  editableData[key] = cloneDeep(roleTableDataSource.value.rows.filter(item => item.id === key)[0])
}

// save edit role
const handleSaveEditRole = async (key: string | number) => {
  console.log("save edit role", key);

  const newData = editableData[key]
  // 复制对象
  Object.assign(roleTableDataSource.value.rows.filter(item => item.id === key)[0], newData)
  // 请求
  updateRole(newData).finally(() => {
    // 保存之后，从可编辑数据中删除
    delete editableData[key]
  })
}



// cancel edit role
const handleCancelEditRole = (key: string | number) => {
  // 取消编辑
  delete editableData[key]
}

// delete role
const handleDeleteRole = (key: string | number) => {
  console.log("delete role:", key);
}



const handleChangeTablePagination: PaginationProps['onChange'] = (page, pageSize) => {
  pagingQueryParams.page = page
  pagingQueryParams.pagesize = pageSize
}

const tablePaginationPosition: TablePaginationConfig['position'] = ['bottomCenter']
const tablePaginationPageSizeOptions = ['5', '10', '20', '30', '40', '50']





// 处理 Switch 状态切换
const handleSwitchChange = (checked: boolean, record: RoleItemVO) => {
  // checked 是切换之后的值
  // 将 boolean 转换为 0/1
  editableData[record.id].state = checked ? 1 : 0;
};


const roleIsEnable = computed(() => (id: number | string) => editableData[id]?.state === 1)
</script>

<template>
  <Flex class="role-wrapper" vertical align="start" gap="middle">
    <Button type="primary">添加角色</Button>
    <Table class="w-full" :pagination="{
      position: tablePaginationPosition,
      pageSizeOptions: tablePaginationPageSizeOptions,
      onChange: handleChangeTablePagination,
      total: roleTableDataSource.total
    }" :columns="roleColumns" :dataSource="roleTableDataSource.rows" bordered>
      <template #headerCell="{ title }">
        <TypographyText type="secondary">{{ title }}</TypographyText>
      </template>
      <template #bodyCell="{ column, record, text }">

        <!-- 当前列是否时可操作的 -->
        <template v-if="canEditable.includes(String(column.dataIndex))">
          <!-- 如果当前列是可编辑的，则显示输入框 -->
          <template v-if="editableData[record.id]">
            <Input v-if="column.key === 'name'" v-model:value="editableData[record.id][column.key]" />
            <Textarea v-else-if="column.key === 'description'" v-model:value="editableData[record.id][column.key]" />
            <Switch v-else-if="column.key === 'state'" :checked="roleIsEnable(record.id)"
              @change="(checked) => handleSwitchChange(checked as boolean, record as RoleItemVO)" />

          </template>
          <!-- 如果当前列是不可编辑的，则显示文本 -->
          <template v-else>
            <!-- 如果当前列是状态，则显示标签 -->
            <template v-if="column.key === 'state'">
              <Tag :color="record.state === 1 ? 'blue' : 'default'">
                {{ record.state === 1 ? "已启用" : "未启用" }}
              </Tag>
            </template>
            <!-- 如果当前列是其他，则显示文本 -->
            <template v-else>
              {{ text }}
            </template>
          </template>
        </template>


        <template v-if="column.key === 'actions'">
          <Flex gap="small" wrap="wrap">
            <template v-if="!editableData[record.id]">
              <TypographyLink @click="handleGivePermission(record.id)">分配权限</TypographyLink>
              <TypographyLink @click="handleEditRole(record.id)">编辑</TypographyLink>
              <TypographyLink @click="handleDeleteRole(record.id)">删除</TypographyLink>
            </template>
            <template v-else>
              <TypographyLink @click="handleSaveEditRole(record.id)">保存</TypographyLink>
              <Popconfirm title="确定要取消吗？" @confirm="handleCancelEditRole(record.id)">
                <TypographyLink>取消</TypographyLink>
              </Popconfirm>
            </template>
          </Flex>
        </template>
      </template>
    </Table>
    <GivePermissionModal :role-id="selectedRoleId" v-model:open="permissionModalStatus" />
  </Flex>
</template>

<style scoped lang="less">
.role {
  &-wrapper {

    padding: var(--spacing-middle);
    background-color: var(--color-background);
  }
}
</style>