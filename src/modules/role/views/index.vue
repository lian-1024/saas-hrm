<script setup lang="ts">
import AddRoleModal from '@/modules/role/components/add-role-modal.vue';
import GivePermissionModal from '@/modules/role/components/give-permission-modal.vue';
import RoleService from '@/modules/role/services/role.service';
import type { RoleItemVO } from '@/modules/role/types';
import { QSpin } from '@/shared/components/base/spin';
import { useAntdToken } from '@/shared/composables/use-antd-token';
import { useRequest } from '@/shared/composables/use-request/use-request';
import type { PagingQueryParams, PagingResponse } from '@/shared/types';
import { Button, Flex, Input, message, Popconfirm, Switch, Table, Tag, Textarea, TypographyLink, TypographyText, type PaginationProps, type TablePaginationConfig, type TableProps } from 'ant-design-vue';
import { cloneDeep } from 'lodash-es';
import { computed, onMounted, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
const { token } = useAntdToken()
// 角色管理
defineOptions({
  name: "RolePage"
})

// 可编辑的列
const canEditable = ['name', 'state', 'description']

const roleColumns: TableProps['columns'] = [
  {
    title: t("role.table.columns.key"),
    dataIndex: 'id',
    key: 'key',
  },
  {
    title: t("role.table.columns.role"),
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: t("role.table.columns.status"),
    dataIndex: "state",
    key: "state",
  },
  {
    title: t("role.table.columns.description"),
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: t("role.table.columns.actions"),
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
  }
})

const { run: updateRole, loading: updateRoleLoading } = useRequest(RoleService.updateRole, {
  manual: true,
  onSuccess: () => {
    message.success(t("role.table.actions.editRoleSuccess"))
  },
  onError: (error) => {
    message.error(error.message || t("role.table.actions.editRoleError"))
  }
})

const { run: deleteRoleById, loading: deleteRoleLoading } = useRequest(RoleService.deleteRoleById, {
  manual: true,
  onSuccess: () => {
    message.success(t("role.table.actions.deleteRoleSuccess"))
    // roleTableDataSource.value.rows = roleTableDataSource.value.rows.filter(row => row.id !== selectedRoleId.value)
    getRoleList()
  },
  onError: (error) => {
    message.error(error.message || t("role.table.actions.deleteRoleError"))
  }
})


const handleGivePermission = (key: string | number) => {
  selectedRoleId.value = key
  permissionModalStatus.value = true
}

// handle edit role 
const handleEditRole = (key: string | number) => {
  // 将当前行数据克隆到editableData（可编辑数据当中）
  editableData[key] = cloneDeep(roleTableDataSource.value.rows.filter(item => item.id === key)[0])
}

// save edit role
const handleSaveEditRole = async (key: string | number) => {
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
    <Button type="primary" @click="addRoleModalStatus = true">{{ $t("role.table.actions.addRole") }}</Button>
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
                  {{ Boolean(record.state) ? $t("common.enable.enable") : $t("common.enable.disable") }}
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
                <TypographyLink @click="handleGivePermission(record.id)">{{ $t("role.table.actions.givePermission") }}
                </TypographyLink>
                <TypographyLink @click="handleEditRole(record.id)">{{ $t("role.table.actions.edit") }}</TypographyLink>
                <Popconfirm :title="t('role.table.operationMessage.deleteConfirmTitle')"
                  @confirm="handleDeleteRole(record.id)">
                  <TypographyLink>{{ $t("role.table.actions.delete") }}</TypographyLink>

                </Popconfirm>
              </template>
              <template v-else>
                <TypographyLink @click="handleSaveEditRole(record.id)">{{ $t("role.table.actions.save") }}
                </TypographyLink>
                <Popconfirm :title="$t('role.table.operationMessage.cancelConfirmTitle')"
                  @confirm="handleCancelEditRole(record.id)">
                  <TypographyLink>{{ $t("role.table.actions.cancel") }}</TypographyLink>
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

    border-radius: v-bind("`${token.borderRadiusLG}px`");
    border: 1px solid v-bind("token.colorBorderSecondary");
  }
}
</style>