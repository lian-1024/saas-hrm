<script setup lang="ts">
import { Button, Flex, Input, Pagination, Table, Tag, TypographyLink, type TableProps } from 'ant-design-vue';
import type { DataIndex } from 'ant-design-vue/es/vc-table/interface';
import { cloneDeep } from 'lodash-es';
import { reactive, ref, useId } from 'vue';
import GivePermissionModal from './components/give-permission-modal.vue';
import type { RoleTableItem } from './types';
// 角色管理
defineOptions({
  name: "RolePage"
})


const dataIndexText: DataIndex[] = ['key', 'name', 'enable', 'description']

const roleColumns: TableProps['columns'] = [
  {
    title: 'Key',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Role Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Enable',
    dataIndex: "enable",
    key: "enable",
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Actions',
    key: 'actions',
  }
]


const roleDataSource = ref<RoleTableItem[]>([
  {
    key: useId(),
    name: "System Administrator",
    enable: true,
    description: "System Administrator"
  },
  {
    key: useId(),
    name: "Manger",
    enable: false,
    description: "Manger Description"
  },
  {
    key: useId(),
    name: "Commissioner",
    enable: true,
    description: "Commissioner Description"
  }
])


const permissionModalVisible = ref(false)
const editRoleModalVisible = ref(false)


// edit data
const editableData = reactive<Record<string, RoleTableItem>>({})

const currentPage = ref<number>(1)


const handleGivePermission = () => {
  console.log("give permission");
  permissionModalVisible.value = true

}

// handle edit role 
const handleEditRole = (key: string | number) => {
  console.log("edit role");
  editRoleModalVisible.value = true

  editableData[key] = cloneDeep(roleDataSource.value.filter(item => key === item.key)[0])
  console.log("editableDate", editableData[key]);

}

// save edit role
const handleSaveEditRole = (key: string | number) => {
  const filterData = roleDataSource.value.filter(item => key === item.key)[0]


  const newEditData = {
    ...editableData[key],
    enable: editableData[key].enable === 'true' ? true : false
  }

  console.log("filter data:", filterData);
  console.log("new edit data:", newEditData);
  Object.assign(roleDataSource.value.filter(item => key === item.key)[0], newEditData)

  console.log("role data source:", roleDataSource.value);

  delete editableData[key]
}


// cancel edit role
const handleCancelEditRole = (key: string | number) => {
  delete editableData[key]
}

// delete role
const handleDeleteRole = (key: string | number) => {
  console.log("delete role:", key);
}


</script>

<template>
  <Flex class="role-wrapper" vertical align="start" gap="middle">
    <Button type="primary">添加角色</Button>
    <Table :columns="roleColumns" :dataSource="roleDataSource" bordered>
      <template #bodyCell="{ column, record, text }">
        <template v-if="dataIndexText.includes(column.dataIndex!)">
          <Input v-if="editableData[record.key]" v-model:value="editableData[record.key][column.dataIndex]" />
          <template v-else>
            <template v-if="column.key === 'enable'">
              <Tag color="blue">
                {{ record.enable ? "Yes" : "No" }}
              </Tag>
            </template>
            <template v-else> {{ text }} </template>
          </template>
        </template>

        <template v-if="column.key === 'actions'">
          <Flex gap="small" wrap="wrap">
            <template v-if="editableData[record.key]">
              <TypographyLink @click="handleSaveEditRole(record.key)">Save</TypographyLink>
              <TypographyLink @click="handleCancelEditRole(record.key)">Cancel</TypographyLink>
            </template>
            <template v-else>
              <TypographyLink @click="handleGivePermission">Give Permission</TypographyLink>
              <TypographyLink @click="() => handleEditRole(record.key)">Edit</TypographyLink>
              <TypographyLink @click="handleDeleteRole(record.key)">Delete</TypographyLink>
            </template>
          </Flex>
        </template>
      </template>
    </Table>
    <Pagination v-model:current="currentPage" :total="500" />
    <GivePermissionModal v-model:visible="permissionModalVisible" @confirm="() => permissionModalVisible = false"
      @cancel="() => permissionModalVisible = false" />
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