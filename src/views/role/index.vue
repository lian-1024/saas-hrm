<script setup lang="ts">
import { Button, Flex, Table, Tag, type TableProps } from 'ant-design-vue';
import { useId } from 'vue';

// 角色管理
defineOptions({
  name: "RolePage"
})


interface RoleTableData {
  index: number | string,
  name: string,
  enable: boolean,
  description: string,
}

const roleColumns: TableProps['columns'] = [
  {
    title: 'Index',
    dataIndex: 'index',
    key: 'index',
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


const roleDataSource: RoleTableData[] = [
  {
    index: useId(),
    name: "System Administrator",
    enable: true,
    description: "System Administrator"
  },
  {
    index: useId(),
    name: "Manger",
    enable: false,
    description: "Manger Description"
  },
  {
    index: useId(),
    name: "Commissioner",
    enable: true,
    description: "Commissioner Description"
  }
]


const handleGivePermission = () => {
  console.log("give permission");

}

const handleEditRole = () => {
  console.log("edit role");
}


const handleDeleteRole = () => {
  console.log("delete role");
}
</script>

<template>
  <Flex class="role-wrapper" vertical align="start" gap="middle">
    <Button type="primary">添加角色</Button>
    <Table :columns="roleColumns" :dataSource="roleDataSource" bordered>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'enable'">
          <Tag color="blue">
            {{ record.enable ? "Yes" : "No" }}
          </Tag>
        </template>
        <template v-if="column.key === 'actions'">
          <Flex gap="small" wrap="wrap">
            <Button type="link" @click="handleGivePermission">分配权限</Button>
            <Button type="link" @click="handleEditRole">编辑</Button>
            <Button type="link" @click="handleDeleteRole">删除</Button>
          </Flex>
        </template>
      </template>
    </Table>
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