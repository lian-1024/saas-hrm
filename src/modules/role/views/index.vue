<script setup lang="ts">
import AddRoleModal from '@/modules/role/components/add-role-modal.vue';
import GivePermissionModal from '@/modules/role/components/give-permission-modal.vue';
import RoleService from '@/modules/role/services/role.service';
import type { RoleItemVO } from '@/modules/role/types';
import { QSpin } from '@/shared/components/base/spin';
import { useAntdToken } from '@/shared/composables/use-antd-token';
import { useRequest } from '@/shared/composables/use-request/use-request';
import type { EnableStatusType } from '@/shared/constants/status';
import { EnableStatusMap } from '@/shared/constants/status';
import type { PagingQueryParams, PagingResponse } from '@/shared/types';
import { Button, Flex, Input, message, Popconfirm, Switch, Table, Tag, Textarea, TypographyLink, TypographyText, type PaginationProps, type TablePaginationConfig, type TableProps } from 'ant-design-vue';
import { cloneDeep } from 'lodash-es';
import { computed, onMounted, reactive, ref } from 'vue';
const { token } = useAntdToken()
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

const defaultPagingQueryParams: PagingQueryParams = {
  page: 1,
  pagesize: 10
}

const pagingQueryParams = reactive<PagingQueryParams>(defaultPagingQueryParams)

const addRoleModalStatus = ref(false)


// edit data
const editableData = reactive<Record<string, RoleItemVO>>({})

const { run: getRoleList, loading: getRoleListLoading } = useRequest(() => RoleService.getRoleList(pagingQueryParams), {
  manual: true,
  onSuccess: ({ data }) => {
    roleTableDataSource.value = data
    console.log("roleTableDataSource:", roleTableDataSource.value);
  }
})

const { run: updateRole, loading: updateRoleLoading } = useRequest(RoleService.updateRole, {
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

const { run: deleteRoleById, loading: deleteRoleLoading } = useRequest(RoleService.deleteRoleById, {
  manual: true,
  onSuccess: () => {
    message.success("删除角色成功")
    // roleTableDataSource.value.rows = roleTableDataSource.value.rows.filter(row => row.id !== selectedRoleId.value)
    getRoleList()
  },
  onError: (error) => {
    if (error.message) {
      message.error(error.message)
    } else {
      message.error("删除角色失败")
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

  // 请求
  updateRole(newData).then(() =>
    // 复制对象
    Object.assign(roleTableDataSource.value.rows.filter(item => item.id === key)[0], newData)
  ).finally(() => {

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
const handleDeleteRole = async (key: string | number) => {
  selectedRoleId.value = key
  await deleteRoleById(key)

}




const handleChangeTablePagination: PaginationProps['onChange'] = async (page, pageSize) => {
  pagingQueryParams.page = page
  pagingQueryParams.pagesize = pageSize
  await getRoleList(pagingQueryParams)
}

const tablePaginationPosition: TablePaginationConfig['position'] = ['bottomCenter']
const tablePaginationPageSizeOptions = ['5', '10', '20', '30', '40', '50']


// 处理 Switch 状态切换
const handleSwitchChange = (checked: boolean, record: RoleItemVO) => {
  // checked 是切换之后的值
  // 将 boolean 转换为 0/1
  editableData[record.id].state = checked ? 1 : 0;
};


const handleConfirmAddRole = () => {
  // 计算总页数
  const totalPages = Math.ceil((roleTableDataSource.value.total + 1) / pagingQueryParams.pagesize);

  // 更新查询参数到最后一页
  pagingQueryParams.page = totalPages;

  // 获取最后一页的数据
  getRoleList(pagingQueryParams);
}

const roleIsEnable = computed(() => (id: number | string) => editableData[id]?.state === 1)

onMounted(async () => {
  await getRoleList()
})
</script>

<template>
  <Flex class="role-wrapper" vertical align="start" gap="middle">
    <Button type="primary" @click="addRoleModalStatus = true">添加角色</Button>
    <QSpin :spinning="getRoleListLoading || updateRoleLoading" wrapper-class-name="flex-1 w-full">
      <Table class="w-full" :pagination="{
        position: tablePaginationPosition,
        pageSizeOptions: tablePaginationPageSizeOptions,
        onChange: handleChangeTablePagination,
        total: roleTableDataSource.total,
        current: pagingQueryParams.page
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
                <Tag :color="Boolean(record.state) ? 'blue' : 'default'">
                  {{ Boolean(record.state) ? EnableStatusMap[record.state as EnableStatusType] : "未启用" }}
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
                <Popconfirm @confirm="handleDeleteRole(record.id)" title="您确定要删除吗?">
                  <TypographyLink>删除</TypographyLink>

                </Popconfirm>
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
    </QSpin>
    <AddRoleModal @success="handleConfirmAddRole" v-model:open="addRoleModalStatus" />
    <GivePermissionModal :role-id="selectedRoleId" v-model:open="permissionModalStatus" />
  </Flex>
</template>

<style scoped lang="less">
.role {
  &-wrapper {
    height: 100%;
    padding: v-bind("`${token.paddingLG}px`");
    background-color: v-bind("token.colorBgContainer");
  }
}
</style>