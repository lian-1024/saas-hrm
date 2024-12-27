<script setup lang="ts">
import { generateMenuItem } from '@/utils/generate-menu-item';
import { BookOutlined, ContactsOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { Menu, type MenuProps } from 'ant-design-vue';
import { h } from 'vue';
import QPanel from '../panel.vue';
defineOptions({
  name: "DashboardHelpLink"
})


const LinkItem: MenuProps['items'] = [
  generateMenuItem("/get-start", "Get Start", h(BookOutlined)),
  generateMenuItem("/online-help-manual", "Online help manual", h(BookOutlined)),
  generateMenuItem("/contact technical support", "Contact Technical Support", h(ContactsOutlined)),
  generateMenuItem("/add-link", "Add Link", h(PlusOutlined)),
]

const handleClickMenu: MenuProps['onClick'] = (info) => {
  console.log("help link:", info.key);

}

</script>

<template>
  <QPanel title="帮助链接">
    <Menu :items="LinkItem" @click="handleClickMenu" />
  </QPanel>
</template>
