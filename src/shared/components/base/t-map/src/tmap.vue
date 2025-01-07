<template>
  <tlbs-map ref="map" api-key="FO5BZ-X4X6Q-6OJ5J-2QWP3-WS33H-2LFGV" :center="center" :zoom="zoom" :control="control"
    @click="onClick">
    <tlbs-multi-marker :geometries="geometries" :styles="styles" :options="options" />
  </tlbs-map>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TMap',
  setup() {
    const map = ref(null);
    const center = ref({ lat: 39.91799, lng: 116.397027 });
    const zoom = ref(10);
    const onClick = (e: Event) => {
      console.log(e);
    };
    return {
      center,
      zoom,
      onClick,
      control: {
        scale: {},
        zoom: {
          position: 'topRight',
        },
      },
      map,
      geometries: [
        { styleId: 'marker', position: { lat: 39.91799, lng: 116.397027 } },
      ],
      styles: {
        marker: {
          width: 20,
          height: 30,
          anchor: { x: 10, y: 30 },
        },
      },
      options: {
        minZoom: 5,
        maxZoom: 15,
      },
    };
  },
});
</script>