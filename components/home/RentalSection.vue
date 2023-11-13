<script setup lang="ts">
import { ref } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import ArrowRightIcon from '@/components/ui/icons/ArrowRightIcon.vue'
import EagleIcon from '@/components/ui/icons/EagleIcon.vue'
import RentalItem from '@/components/rental/RentalItem.vue'

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
  <section class="rental-section">
    <div class="container relative mx-auto flex-row flex">
      <div class="rental-section__header">
        <p>REDUCE COSTOS DE INVERSIÓN</p>
        <h3>ALQUILER</h3>
        <div class="subcategory">
          <p class="subcategory__label">Elige la modalidad:</p>
          <div class="subcategory__list flex gap-2 flex-col">
            <div><div class="subcategory__item">Máquina seca</div></div>
            <div><div class="subcategory__item">Máquina operada</div></div>
            <div><div class="subcategory__item">Máquina a todo costo</div></div>
          </div>
          <div class="subcategory__actions">
            <NuxtLink to="/" class="link-view-more"><span>VER TODO</span><ArrowRightIcon /></NuxtLink>
          </div>
        </div>
      </div>
      <div class="rental-section__body">
        <RentalItem v-for="slide in 6" :key="slide" />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.rental-section {
  @apply pt-[60px] pb-[60px] relative bg-primary-light flex flex-row justify-between items-center;
  &__header {
    @apply relative text-left w-full mb-[50px] flex shrink-0 flex-col;
    @apply text-white;
    @screen lg {
      @apply w-[280px];
    }
    .label-page {
      @apply text-xs leading-4 font-telegraf-regular font-normal mb-1;
    }
    h3 {
      @apply mb-10;
      @apply text-[48px] leading-[58px] font-telegraf-black font-bold uppercase;
    }
    .subcategory {
      &__label {
        @apply flex text-white text-base leading-8 mb-3;
      }
      &__list {
        @apply flex flex-col gap-2 mb-7;
      }
      &__item {
        @apply inline-flex px-3 h-8 items-center;
        @apply border border-white text-white text-base rounded-[30px];
      }
      &__actions {
        @apply flex;
        @apply text-white text-base;
        .link-view-more {
          @apply  h-[42px] w-full flex items-center justify-center;
          @apply bg-white text-primary rounded-[36px] text-base font-telegraf-black font-bold;
        }
      }
    }
  }
  &__body {
    @apply flex flex-1 gap-6 flex-wrap;
  }
}
</style>
