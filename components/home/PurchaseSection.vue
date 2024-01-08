<script setup lang="ts">
import { ref } from 'vue'
import { type Options, Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
// import { Carousel, Navigation, Slide } from 'vue3-carousel'
import PurchaseItem from '@/components/purchase/PurchaseItem.vue'
import { ArrowRightBigIcon } from '~/components/ui/icons';

const windowWidth = ref<number>(0);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

const options = computed(() => {
  // const perPage = 4
  // if (windowWidth.value > 1280) {
  //   perPage = 
  // }
  const perPage = windowWidth.value > 1280 ? 4 : windowWidth.value > 768 ? 3 : windowWidth.value > 640 ? 2 : 1 
  return {
    rewind: true,
    perPage,
    arrow: true,
    pagination: false,
    gap: '1rem',
  }
})

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

</script>
<template>
  <section class="purchase-section">
    <div class="container relative mx-auto">
      <div class="purchase-section__header">
        <p class="label-page">MAQUINARIAS Y VEHÍCULOS</p>
        <h3>DISPONIBLES PARA COMPRAR</h3>
        <p class="message-page">Contamos con una amplia gama de maquinarias y vehículos para distintas industrias</p> 
      </div>
      <div class="purchase-section__body">
        <div class="slide-section">
          <Splide :options="options" :has-track="false" >
            <div class="custom-wrapper">
              <SplideTrack>
                <SplideSlide v-for="slide in 10" :key="slide">
                  <PurchaseItem :index="slide"/>
                </SplideSlide>
              </SplideTrack>
              <div class="splide__arrows">
                <button class="splide__arrow splide__arrow--prev"><ArrowRightBigIcon class="rotate-180" /></button>
                <button class="splide__arrow splide__arrow--next"><ArrowRightBigIcon /></button>
              </div>
            </div>
          </Splide>
        </div>
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
      @apply text-sm lg:text-xl leading-8 font-telegraf-regular font-normal;
    }
    h3 {
      @apply text-[28px] lg:text-[48px] leading-[28px] lg:leading-[58px] font-telegraf-black font-bold;
    }
    .message-page {
      @apply text-base leading-4 lg:leading-5 font-telegraf-regular font-normal;
    }
  }
  &__body {

  }
  .slide-section {
    @apply w-[300px] sm:w-full mx-auto;
    &:deep(.splide) {
      .splide {
        &__arrows {
          @apply w-full absolute top-[170px] flex justify-between items-center z-20;
        }
        &__arrow {
          @apply flex w-[42px] h-[42px] rounded-full items-center justify-center;
          border: 1px solid rgb(7 58 90 / 0.3) !important;
          svg {
            @apply w-[32px] h-[32px] text-primary-light fill-primary;
          }
          &--prev {
            @apply -ml-11
          }
          &--next {
            @apply -mr-11
          }
        }
      }
    }
    &:deep(.purchase__inner) {
      @apply mx-auto w-full lg:w-[300px];
    }
    &:deep(.purchase__img) {
      img {
        @apply mx-auto w-full;
      }
    }
    // &:deep(.splide__arrows) {
    //   @apply w-full absolute top-1/2 flex justify-between items-center;
    // }
    &:deep(.splide__pagination) {
      display: none;
    }
    &:deep(.splide__arrow) {

    }
  }
}
</style>
