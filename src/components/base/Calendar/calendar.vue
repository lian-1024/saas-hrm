<script setup lang="ts">
import { Calendar, type CalendarProps } from 'ant-design-vue';
import { Dayjs } from 'dayjs';
import { ref } from 'vue';
defineOptions({
  name: "DashboardCalendar"
})

const value = ref<Dayjs>()

const onPanelChange: CalendarProps<Dayjs>['onPanelChange'] = (data, mode) => {
  console.log(value, mode);
}


</script>

<template>
  <div>
    <Calendar :fullscreen="false" v-model:value="value" @panel-change="onPanelChange" />
  </div>
</template>

<style scoped lang="scss"></style>