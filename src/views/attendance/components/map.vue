<script lang="ts" setup>
import { convertDistance } from '@/utils/convert';
import { BaseMap, MultiCircle, MultiLabel } from 'tlbs-map-vue';
import { computed, ref } from 'vue';

defineOptions({
  name: "AttendanceScopedMap"
})
// 范围半径
const scopedRadius = defineModel("scopedRadius", { default: 500 })
const scopedCenter = defineModel("scopedCenter", { default: { lat: 39.91799, lng: 116.397027 } })
const scopedRadiusText = computed(() => convertDistance(scopedRadius.value))


const mapRef = ref<InstanceType<typeof BaseMap> | null>(null);
const mapZoom = ref(15);
const handleClickMap = (e: Event) => {
  console.log(e);
};

// 控件
const mapControl = {
  scale: {},
  zoom: {
    position: 'topRight',
  },
}

// circle 样式 
const circleStyles = {
  circle: {
    color: 'rgba(41,91,255,0.16)',
    showBorder: true,
    borderColor: 'rgba(41,91,255,1)',
    borderWidth: 2,
  },
}



const circleGeometriesComputed = computed(() => [
  { styleId: 'circle', radius: scopedRadius.value, center: scopedCenter.value },
])

const circleOptions = {
  zIndex: 1,
}

const labelStyles = {
  color: '#333', //颜色属性
  size: 20, //文字大小属性
  offset: { x: 0, y: 0 }, //文字偏移属性单位为像素
  angle: 0, //文字旋转属性
  alignment: 'center', //文字水平对齐属性
  verticalAlignment: 'middle', //文字垂直对齐属性
  backgroundColor: "#ffffff",
  padding: "15px"
}

const labelGeometriesComputed = computed(() => [{
  id: 'label', //点图形数据的标志信息
  styleId: 'label', //样式id
  position: scopedCenter.value, //标注点位置
  content: `${scopedRadiusText.value}可打卡`, //标注文本
  properties: { //标注点的属性数据
    'title': 'label'
  }
}])
</script>
<template>
  <BaseMap class="h-full w-full" ref="mapRef" api-key="OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77" :center="scopedCenter"
    :zoom="mapZoom" :control="mapControl" @click="handleClickMap">
    <MultiCircle :geometries="circleGeometriesComputed" :styles="circleStyles" :options="circleOptions" />
    <MultiLabel :styles="labelStyles" :geometries="labelGeometriesComputed" />
  </BaseMap>
</template>
