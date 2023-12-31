<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { type Options, Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
import {
  ArrowRightIcon,
  GearIcon,
  PurchaseRentalIcon,
  TruckIcon
} from '@/components/ui/icons'

const windowWidth = ref<number>(0);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};



const options = computed(() => {
  // const perPage = 4
  // if (windowWidth.value > 1280) {
  //   perPage = 
  // }
  const perPage = windowWidth.value > 900 ? 3 : windowWidth.value > 640 ? 2 : 1 
  return {
    rewind: true,
    perPage,
    arrow: false,
    pagination: false,
    gap: '0.5rem',
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
  <section class="banner-section">
    <div class="bg-gradient-primary"></div>
    <div class="container mx-auto z-10 relative">
      <h1>Soluciones potentes detrás de tus proyectos</h1>
      <template v-if="windowWidth > 0">
        <div v-if="windowWidth > 1024" class="service">
          <div class="col-span-1">
            <div class="service__item">
              <div class="service__head">
                <div class="service__icon">
                  <PurchaseRentalIcon /> 
                </div>
                <div class="service__title">COMPRA O ALQUILA</div>
              </div>
              <div class="my-6 bg-white/30 h-px w-full relative"></div>
              <div class="service__body">
                <div class="message">
                  Maquinaria y vehículos pesados, semipesados y livianos a nivel nacional.
                </div>
                <div class="action">
                  <NuxtLink to="/" class="btn-goto"><ArrowRightIcon/></NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-1">
            <div class="service__item">
              <div class="service__head">
                <div class="service__icon">
                  <TruckIcon /> 
                </div>
                <div class="service__title">TRANSPORTE</div>
              </div>
              <div class="my-6 bg-white/30 h-px w-full relative"></div>
              <div class="service__body">
                <div class="message">
                  Vía terrestre y fluvial desde donde se encuentre a cualquier destino dentro del país.
                </div>
                <div class="action">
                  <NuxtLink to="/" class="btn-goto"><ArrowRightIcon/></NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-1">
            <div class="service__item">
              <div class="service__head">
                <div class="service__icon">
                  <GearIcon /> 
                </div>
                <div class="service__title">REPUESTOS</div>
              </div>
              <div class="my-6 bg-white/30 h-px w-full relative"></div>
              <div class="service__body">
                <div class="message">
                  Venta de repuestos genuinos y alternativos para mantenimientos preventivos y correctivos de maquinarias y vehículos.
                </div>
                <div class="action">
                  <NuxtLink to="/" class="btn-goto"><ArrowRightIcon/></NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-3">
            <div class="service__item">
              <div class="service__head">
                <div class="service__title title-custom">OTROS SERVICIOS COMPLEMENTARIOS</div>
              </div>
              <div class="my-4 bg-white/30 h-px w-full relative"></div>
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
        </div>
        <Splide v-else :options="options" :has-track="true" >
              <SplideSlide>
                <div class="service__item">
                  <div class="service__head">
                    <div class="service__icon">
                      <PurchaseRentalIcon /> 
                    </div>
                    <div class="service__title">COMPRA O ALQUILA</div>
                  </div>
                  <div class="my-4 lg:my-6 bg-white/30 h-px w-full relative"></div>
                  <div class="service__body">
                    <div class="message">
                      Maquinaria y vehículos pesados, semipesados y livianos a nivel nacional.
                    </div>
                    <div class="action">
                      <NuxtLink to="/" class="btn-goto"><ArrowRightIcon/></NuxtLink>
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="service__item">
                  <div class="service__head">
                    <div class="service__icon">
                      <TruckIcon /> 
                    </div>
                    <div class="service__title">TRANSPORTE</div>
                  </div>
                  <div class="my-4 lg:my-6 bg-white/30 h-px w-full relative"></div>
                  <div class="service__body">
                    <div class="message">
                      Vía terrestre y fluvial desde donde se encuentre a cualquier destino dentro del país.
                    </div>
                    <div class="action">
                      <NuxtLink to="/" class="btn-goto"><ArrowRightIcon/></NuxtLink>
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="service__item">
                  <div class="service__head">
                    <div class="service__icon">
                      <GearIcon /> 
                    </div>
                    <div class="service__title">REPUESTOS</div>
                  </div>
                  <div class="my-4 lg:my-6 bg-white/30 h-px w-full relative"></div>
                  <div class="service__body">
                    <div class="message">
                      Venta de repuestos genuinos y alternativos para mantenimientos preventivos y correctivos de maquinarias y vehículos.
                    </div>
                    <div class="action">
                      <NuxtLink to="/" class="btn-goto"><ArrowRightIcon/></NuxtLink>
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="service__item">
                  <div class="service__head">
                    <div class="service__title title-custom">OTROS SERVICIOS COMPLEMENTARIOS</div>
                  </div>
                  <div class="my-4 bg-white/30 h-px w-full relative"></div>
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
              </SplideSlide>
            <!-- <div class="splide__arrows">
              <button class="splide__arrow splide__arrow--prev"><ArrowRightBigIcon class="rotate-180" /></button>
              <button class="splide__arrow splide__arrow--next"><ArrowRightBigIcon /></button>
            </div> -->
        </Splide>
      </template>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner-section{
  @apply relative w-full pt-[330px] lg:pt-[400px] pb-12;
  @apply bg-primary;
  background: {
    image: url('~/assets/img/home-bg.jpg');
    repeat: no-repeat;
    size: cover;
    position: top center;
  };
  .bg-gradient-primary {
    @apply absolute w-full left-0 bottom-0 bg-primary;
    height: calc(100% - 81px);
    background: linear-gradient(0deg, rgba(12,42,61,1) 27.28%, rgba(255,255,255,0) 100%);
  }
  h1{
    @apply w-full mb-[42px];
    @apply text-4xl leading-none lg:text-[84px] lg:leading-[77px] font-telegraf-black font-bold text-white uppercase text-center;
  }
  .service {
    @apply grid grid-cols-3 gap-4 w-[1224] lg:w-[1004px] mx-auto;
    &__item {
      @apply p-3 lg:p-6 w-full bg-primary-light rounded-lg h-full min-h-[193px] mx-3 md:mx-0;
    }
    &__head {
      @apply flex flex-col gap-4;
    }
    &__icon {
      @apply h-8 w-full flex items-center text-secondary;
    }
    &__title {
      @apply font-telegraf-black font-bold text-2xl leading-[28px] text-white;
      &.title-custom {
        @apply text-base leading-4 lg:leading-8 text-center;
      }
    }
    &__body {
      @apply flex gap-6 justify-between items-end text-white h-auto;
      .message {
        @apply flex-1 flex text-base leading-5;
      }
      .action {
        @apply shrink-0 w-8 h-8;
      }
      .btn-goto{
        @apply w-8 h-8 text-white;
      }
      .other-services {
        @apply flex gap-2 lg:gap-6 flex-col lg:flex-row w-full;
        li {
          @apply inline-flex items-center justify-center lg:justify-start;
          @apply w-full lg:w-auto;
          @apply font-telegraf-regular lg:font-telegraf-black font-normal lg:font-bold text-sm lg:text-base lg:leading-[18px] text-white uppercase;
          &.divider {
            @apply h-px w-full lg:w-px lg:h-auto bg-white/30 block lg:-skew-x-[14deg];
          }
        }
      }
    }
  }
  &:deep(.splide) {
    .splide {
      &__arrows {
        @apply hidden;
      }
    }
  }
}
</style>
