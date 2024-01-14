<script lang="ts" setup>

</script>
<template>
  <section class="objective-section">
    <div class="container">
      <p>NUESTRO OBJETIVO</p>
      <h2>Establecer una colaboración efectiva con proveedores y clientes en todo el país</h2>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.objective-section {
  @apply w-full pt-[120px] min-h-[600px] lg:min-h-[840px] text-white text-center;
  @apply bg-primary;
  background: {
    image: url('~/assets/img/our-target-bg.jpg');
    repeat: no-repeat;
    size: cover;
    position: top center;
  };
  p{
    @apply font-telegraf-regular font-normal text-sm lg:text-xl leading-8;
    @apply mb-10;
  }
  h2 {
    @apply font-telegraf-black font-bold text-[28px] lg:text-[48px] leading-[28px] lg:leading-[50px] uppercase;
  }
}
</style>