<script setup lang="ts">

</script>
<template>
  <div class="banner-top">
    <div class="container">

    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner-top{
  @apply relative w-full bg-primary;
  background: {
    image: url('~/assets/img/home-bg.jpg');
    repeat: no-repeat;
    size: cover;
    position: top center;
  };
  height: 630px;
}
</style>
