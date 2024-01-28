<template>
  <div class="purchase-page">
    <div v-if="loadingSparePart" class="w-full text-center py-20 min-h-[600px]">
      <svg class="animate-spin h-20 w-20 text-primary mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>
    <div v-if="!loadingSparePart && sparePart" class="purchase__info">
      <div class="container px-0 lg:px-3">
        <div class="flex w-full flex-col lg:flex-row">
          <div class="purchase__carousel">
            <Splide :options="optionsProduct" :has-track="false" >
              <div class="custom-wrapper">
                <SplideTrack>
                  <SplideSlide>
                    <div class="carousel-product" :style="{backgroundImage: `url(${productDetail})`}">
                      <img src="~/assets/img/product-detail-test.jpg" alt="Anka">
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div class="carousel-product" :style="{backgroundImage: `url(${productDetail})`}">
                      <img src="~/assets/img/product-detail-test.jpg" alt="Anka">
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div class="carousel-product" :style="{backgroundImage: `url(${productDetail})`}">
                      <img src="~/assets/img/product-detail-test.jpg" alt="Anka">
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
          <div class="purchase__detail">
            <div class="w-full flex justify-end items-center gap-1 text-white mb-5">
              <MarkerTruckIcon class="text-white w-[29px] h-auto" />
              <span>{{ sparePart.location?.name || '' }}</span>
            </div>
            <div class="w-full flex gap-3 flex-col">
              <div class="text-white w-full flex gap-4">
                <p class="uppercase font-telegraf-regular text-xl lg:text-2xl">{{ sparePart.brand?.name || '' }}</p>
              </div>
              <div>
                <h1 class="text-white font-telegraf-black font-bold text-[22px] lg:text-5xl">{{ sparePart.name }}</h1>
                <p class="text-white font-telegraf-black font-bold text-[22px] lg:text-5xl">{{ sparePart.part_number }}</p>
              </div>
              <div class="h-px block w-auto bg-white/50"></div>
              <div class="w-full flex gap-2 flex-col">
                <p class="text-white font-telegraf-regular text-base leading-8">COMPATIBILIDAD:</p>
                <div class="w-full flex gap-2 ">
                  <div
                    v-for="item in formattedCompatibility"
                    :key="`CHIP_COMPATIBILITY_${item.id}`"
                    class="leading-8 text-sm font-telegraf-regular font-normal px-3 border border-white rounded-[28px] text-white items-center flex justify-center"
                  >
                    <span>{{ item.name }}</span>
                  </div>
                </div>
              </div>
              <div class="text-base font-telegraf-regular text-white">{{ sparePart.description }}</div>
            </div>
            <!-- <div class="border-t border-white/30 py-1 border-b text-white font-telegraf-regular my-4">
              <div class="w-full flex">
                <div class="flex-1 flex gap-3 min-h-[70px] items-center justify-center">
                  <CalendarIcon />
                  <span class="text-base ">{{ sparePart.mfg_year }}</span>
                </div>
                <div class="flex-1 flex gap-3 min-h-[70px] items-center justify-center border-l border-white/30">
                  <WeightIcon />
                  <span class="text-base ">{{ sparePart.weight }} TN</span>
                </div>
                <div class="flex-1 flex gap-3 min-h-[70px] items-center justify-center border-l border-white/30">
                  <MeterIcon />
                  <span class="text-base ">{{ sparePart.hourmeter }} hrs</span>
                </div>
              </div>
            </div> -->
            <div class="w-full mt-5">
              <button class="btn-quote" type="button">
                <RequestQuoteIcon />
                <span>COMPRAR</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="purchase__other-services">
        <div class="service__head">
          <div class="service__title">SERVICIOS COMPLEMENTARIOS</div>
        </div>
        <div class="my-4 bg-primary-light h-px w-full relative"></div>
        <div class="service__body">
          <ul class="other-services">
            <li>Implementaciones <br class="hidden lg:inline-flex"/>según proyecto</li>
            <li class="divider"></li>
            <li>Servicio técnico en obra</li>
            <li class="divider"></li>
            <li>Aditamientos complementarios</li>
            <li class="divider"></li>
            <li>Capacitaciones</li>
          </ul>
        </div>
      </div>
    </div>
    <button v-if="!loadingSparePart && sparePart" class="fixed bottom-10 right-10 w-14 h-14 z-[1200]" @click="handleWhatsapp">
      <WhatsappIcon />
    </button>
    <!-- <div class="purchase__alternatives">
      <div class="container relative mx-auto">
        <div class="flex flex-col gap-3 text-primary-light font-telegraf-black w-full text-center mb-8">
          <p class="text-sm lg:text-xl">MAQUINARIAS Y  VEHÍCULOS</p>
          <h3 class="text-2xl lg:text-5xl uppercase">TE PUEDEN INTERESAR</h3>
        </div>
        <div class="slide-section">
          <Splide :options="options" :has-track="false" >
            <div class="custom-wrapper">
              <SplideTrack>
                <SplideSlide v-for="slide in 10" :key="slide">
                  <SparePartItem :index="slide"/>
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
    </div> -->
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import productDetail from "@/assets/img/product-detail-test.jpg"
import { type Options, Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
import { MarkerTruckIcon, CalendarIcon, WeightIcon, MeterIcon, RequestQuoteIcon, DownloadIcon, ArrowRightBigIcon, WhatsappIcon } from '~/components/ui/icons';
import SparePartItem from '@/components/spare-part/SparePartItem.vue'
const route = useRoute()

const { sparePart, loadingSparePart, getSparePartById } = useSparePart();
// import '@splidejs/vue-splide/css'

const windowWidth = ref<number>(0);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

const handleDownloadFile = (payload: string) => {
  // console.log('handleDownloadFile', payload, sparePart.value[payload])
  // window.open(sparePart.value[payload], '_blank')
}

const optionsProduct = {
  rewind: true,
  perPage: 1,
  arrow: true,
    pagination: false,
}

onMounted(async () => {
  console.log('id', route.params?.id || '')
  await getSparePartById(`${route.params?.id || ''}`)
  handleResize()
  window.addEventListener('resize', handleResize);
});

const options = computed(() => {
  // const perPage = 4
  // if (windowWidth.value > 1280) {
  //   perPage = 
  // }
  const perPage = windowWidth.value > 1280 ? 4 : windowWidth.value > 1024 ? 3 : windowWidth.value > 640 ? 2 : 1 
  return {
    rewind: true,
    perPage,
    arrow: true,
    pagination: false,
    gap: '1rem',
  }
})

const formattedCompatibility = computed(() => {
  return sparePart.value?.compatibility.map(e => e.subcategory) || []
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

const handleWhatsapp = () => {
  const layoutText = `Buenas Anka, pueden brindarme más información del producto\nNombre: ${sparePart.value?.name}\nCategoría y subcategoría: ${sparePart.value} - ${sparePart.value}`
  const text = encodeURIComponent(layoutText)
  // console.log(`https://wa.me/+51993305902?text=${text}`)
  window.open(`https://wa.me/+51982771045?text=${text}`, '_blank')
}

</script>
<style lang="scss" scoped>
.purchase-page {
  @apply w-full relative;
  @apply bg-white border-b border-[#80A3BA];
  .purchase {
    &__info {
      @apply w-full lg:h-[670px] flex bg-primary-light;
    }
    &__carousel {
      @apply w-full lg:w-1/2 h-[340px] md:h-[460px] lg:h-[670px];
      
      .carousel-product{
        background: {
          position: center;
          repeat: no-repeat;
          size: cover;
        }
        @apply h-[340px] md:h-[460px] lg:h-[670px];
        img {
          @apply hidden;
        }
        @screen lg {
          // @apply bg-none #{!important};
          img {
            @apply hidden;
          }
        }
      }
      
      &:deep(.splide) {
        .splide {
          &__arrows {
            @apply w-full absolute -bottom-11 lg:bottom-3 flex justify-center items-center z-20 gap-5;
          }
          &__arrow {
            @apply flex w-[42px] h-[42px] rounded-full items-center justify-center;
            border: 1px solid rgba(7, 58, 90, 0.20) !important;
            @screen lg {
              border: 1px solid rgba(255, 255, 255, 0.20) !important;
            }
            svg {
              @apply w-[32px] h-[32px] text-white lg:text-primary fill-white lg:fill-primary;
            }
            // &--prev {
            //   @apply -ml-10
            // }
            // &--next {
            //   @apply -mr-10
            // }
          }
        }
      }
    }
    &__detail {
      @apply w-full lg:w-1/2 pb-10 lg:pb-0 pt-5 lg:pt-20 pl-3 pr-3 lg:pr-0 lg:pl-8 xl:pl-12;
      .btn-quote{
        @apply flex items-center justify-center h-[42px] w-full gap-1;
        @apply bg-secondary text-white rounded-3xl text-sm font-telegraf-regular font-semibold uppercase;
        letter-spacing: 0.14px;
      }
    }
    &__files {
      @apply w-full pt-5 lg:pt-20 pb-5 lg:pb-7;
      .file {
        &__item {
          @apply border-b border-[#80A4BA] py-7 flex justify-between items-center text-primary-light;
          button {
            @apply flex gap-2;
            @apply rounded-3xl px-2 py-1;
            letter-spacing: 1px;
            span {
              @apply font-telegraf-black text-sm lg:text-base uppercase;
            }
            &:hover {
              @apply bg-primary-light text-white;
            }
          }
        }
      }
    }
    &__other-services {
      @apply p-6 w-full bg-white border border-primary-light rounded-lg h-full my-11;
      .service {
        &__head {
          @apply flex flex-col gap-4;
        }
        &__title {
          @apply font-telegraf-black font-bold text-2xl leading-[28px] text-primary-light;
          @apply text-base leading-8 text-center;
        }
        &__body {
          @apply flex gap-6 justify-center items-end text-primary-light h-auto w-full;
          .other-services {
            @apply flex gap-6 flex-col md:flex-row;
            li {
              @apply inline-flex items-center justify-center md:justify-start;
              @apply font-telegraf-black font-bold text-base leading-[18px] text-primary-light uppercase;
              &.divider {
                @apply w-auto md:w-px h-px md:h-auto bg-[#80A3BA] block md:-skew-x-[14deg];
              }
            }
          }
        }
      }
    }
    &__alternatives {
      @apply py-9 w-full flex-col bg-[#E5EBEE];
      &__header {
        @apply relative text-center w-full pb-10;
        @apply text-primary;
        .label-page {
          @apply text-xl leading-8 font-telegraf-regular font-normal;
        }
        h3 {
          @apply text-[48px] leading-[58px] font-telegraf-black font-bold;
        }
        .message-page {
          @apply text-base leading-5 font-telegraf-regular font-normal;
        }
      }
      .slide-section {
        @apply w-[300px] sm:w-[600px] lg:w-[1000px] xl:w-full mx-auto;
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
  }
}
</style>