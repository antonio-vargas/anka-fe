<script setup lang="ts">
import { ref } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import ArrowRightIcon from '@/components/ui/icons/ArrowRightIcon.vue'
import EagleIcon from '@/components/ui/icons/EagleIcon.vue'
import SpareItem from '@/components/spare/SpareItem.vue'

import 'vue3-carousel/dist/carousel.css'

const settings = ref({
  itemsToShow: 1,
  snapAlign: 'center',
})

const breakpoints = ref({
  // 700px and up
  700: {
    itemsToShow: 3.5,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
})

</script>
<template>
  <section class="purchase-section">
    <div class="container relative mx-auto">
      <div class="purchase-section__header">
        <h3>REPUESTOS</h3>
        <p class="message-page">Venta de repuestos genuinos y alternativos para mantenimientos preventivos y correctivos de maquinarias y vehículos en general, asi como tambien implementos para su proyecto.</p> 
      </div>
      <div class="purchase-section__body">

        <Carousel v-bind="settings" :breakpoints="breakpoints">
          <Slide v-for="slide in 10" :key="slide">
            <SpareItem />
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.purchase-section {
  @apply pt-[60px] pb-[134px] relative bg-[#E5EBEE];
  &__header {
    @apply relative text-center w-full mb-[50px];
    @apply text-primary;
    .label-page {
      @apply text-xl leading-8 font-telegraf-regular font-normal;
    }
    h3 {
      @apply text-[48px] leading-[58px] font-telegraf-black font-bold uppercase;
    }
    .message-page {
      @apply w-full max-w-[680px] mx-auto;
      @apply text-base leading-5 font-telegraf-regular font-normal;
    }
  }
  &__body {

  }
}
</style>
