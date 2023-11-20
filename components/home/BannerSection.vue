<script setup lang="ts">
import {
  ArrowRightIcon,
  GearIcon,
  PurchaseRentalIcon,
  TruckIcon
} from '@/components/ui/icons'


</script>
<template>
  <section class="banner-section">
    <div class="bg-gradient-primary"></div>
    <div class="container mx-auto z-10 relative">
      <h1>Soluciones potentes detrás de tus proyectos</h1>
      <div class="service">
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
      &.title-custom {
        @apply text-base leading-8 text-center;
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
        @apply flex gap-6 flex-row;
        li {
          @apply inline-flex items-center;
          @apply font-telegraf-black font-bold text-base leading-[18px] text-white uppercase;
          &.divider {
            @apply w-px h-auto bg-white/30 block -skew-x-[14deg];
          }
        }
      }
    }
  }
}
</style>
