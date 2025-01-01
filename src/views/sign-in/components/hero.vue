<script lang="ts" setup>
defineOptions({
  name: 'SignInHero'
})

</script>

<template>
  <div class="hero">
    <img class="hero-img" src="@/assets/common/login_back.png" alt="hero" />
  </div>
</template>

<style lang="less" scoped>
.hero {
  position: relative;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  overflow: hidden;

  &-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
