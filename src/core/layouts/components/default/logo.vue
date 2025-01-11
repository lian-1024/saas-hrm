<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineOptions({
  name: 'QLogo',
})
</script>

<template>
  <div class="logo-container">
    <RouterLink to="/">
      <img class="logo" src="@/assets/common/logo.png" alt="logo" />
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.logo-container {
  display: flex;
  justify-content: center;
  padding-block: var(--spacing-small);
  padding-top: var(--spacing-middle);

  .logo {
    width: 100%;
    max-height: 50px;
    height: auto;
  }
}
</style>
