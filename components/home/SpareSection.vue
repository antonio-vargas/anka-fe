<script setup lang="ts">
import { ref } from 'vue'
import { type Options, Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
// import { Carousel, Navigation, Slide } from 'vue3-carousel'
import ArrowRightIcon from '@/components/ui/icons/ArrowRightIcon.vue'
import EagleIcon from '@/components/ui/icons/EagleIcon.vue'
import SparePartItem from '@/components/spare-part/SparePartItem.vue'
import { ArrowRightBigIcon } from '~/components/ui/icons';

const { spareParts, getSpareParts } = useSparePart();

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
  getSpareParts('?page=1&pageSize=3')
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
        <h3>REPUESTOS</h3>
        <p class="message-page">Venta de repuestos genuinos y alternativos para mantenimientos preventivos y correctivos de maquinarias y vehículos en general, asi como tambien implementos para su proyecto.</p> 
      </div>
      <div class="purchase-section__body">
        <div class="slide-section">
          <Splide :options="options" :has-track="false" >
            <div class="custom-wrapper">
              <SplideTrack>
                <SplideSlide v-for="(item, index) in spareParts" :key="`SPARE_PART_CARD_${index}`">
                  <SparePartItem
                    :index="index"
                    :spare-part="item"/>
                </SplideSlide>
                <SplideSlide :key="`SPARE_PART_CARD_ALL`">
                  <div class="spare-part-all">
                    <div>
                      <img src="~/assets/img/spare-part-all.png" />
                    </div>
                    <div class="w-full text-right pr-5">
                      <NuxtLink to="/spare-part" class="inline-flex gap-1 ">MOSTRAR TODO <ArrowRightIcon /></NuxtLink>
                    </div>
                  </div>
                </SplideSlide>
              </SplideTrack>
              <div class="splide__arrows">
                <button class="splide__arrow splide__arrow--prev"><ArrowRightBigIcon class="rotate-180" /></button>
                <button class="splide__arrow splide__arrow--next"><ArrowRightBigIcon /></button>
              </div>
            </div>
          </Splide>
        </div>

        <!-- <Carousel v-bind="settings" :breakpoints="breakpoints">
          <Slide v-for="slide in 10" :key="slide">
            <SpareItem />
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel> -->
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
  .spare-part-all{
    @apply border border-primary rounded-lg overflow-hidden text-primary;
    @apply pt-10 pb-4;
    @apply flex flex-col gap-5 justify-center;
    a {
      @apply font-telegraf-black font-bold text-base inline-flex items-center justify-end;
    }
  }
}
</style>
