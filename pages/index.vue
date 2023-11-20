<script setup lang="ts">
import BannerSection from '@/components/home/BannerSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import PurchaseSection from '@/components/home/PurchaseSection.vue'
import RentalSection from '@/components/home/RentalSection.vue'
import SpareSection from '@/components/home/SpareSection.vue'
import TransportSection from '@/components/home/TransportSection.vue'


</script>
<template>
  <div class="relative w-full">
    <BannerSection />
    <AboutSection />
    <PurchaseSection />
    <RentalSection />
    <SpareSection />
    <TransportSection />
  </div>
</template>

<style lang="scss" scoped>
.banner-top{
  @apply relative w-full pt-[330px] lg:pt-[400px];
  @apply bg-primary;
  background: {
    image: url('~/assets/img/home-bg.jpg');
    repeat: no-repeat;
    size: cover;
    position: top center;
  };
  .bg-gradient-primary {
    @apply absolute w-full left-0 bottom-0 bg-primary;
    height: calc(100% - 104px);
    background: linear-gradient(0deg, rgba(12,42,61,1) 27.28%, rgba(255,255,255,0) 100%);
  }
  h1{
    @apply w-full mb-[42px];
    @apply text-[84px] leading-[77px] font-telegraf-black font-bold text-white uppercase text-center;
  }
  .service {
    @apply grid grid-cols-3 gap-4 w-[1224] lg:w-[1004px] mx-auto;
    &__item {
      @apply p-6 w-full bg-primary-light rounded-lg h-full;
    }
    &__head {
      @apply flex flex-col gap-4;
    }
    &__icon {
      @apply h-8 w-full flex items-center text-secondary;
    }
    &__title {
      @apply font-telegraf-black font-bold text-2xl leading-[28px] text-white;
    }
    &__body {
      @apply flex gap-6 justify-between items-end text-white h-full;
      .message {
        @apply flex-1 flex text-base leading-5;
      }
      .action {
        @apply shrink-0 w-8 h-8;
      }
      .btn-goto{
        @apply w-8 h-8 text-white;
      }
    }
  }
}
</style>
