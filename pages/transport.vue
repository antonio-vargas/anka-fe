<script lang="ts" setup>
import { MedalIcon, InfoIcon, RequestQuoteIcon, TruckIcon, SpareIcon  } from '@/components/ui/icons'
import OtherServiceBg from '@/components/ui/OtherServiceBg.vue'
</script>
<template>
  <div class="transport-page">
    <div class="transport__banner">
      <div class="bg-gradient"></div>
      <div class="container mx-auto relative">
        <h2>transporte</h2>
      </div>
      <div class="bg-map">
        <img src="~/assets/img/tranport-map.png" alt="Anka" />
        <span>Dentro del territorio peruano</span>
      </div>
    </div>
    <div class="transport__main">
      <div class="container mx-auto relative">
        <div class="main__message">Transporte de maquinaria en general y carga especial vía terrestre y fluvial desde donde se encuentre a cualquier destino dentro del país.</div>
        <div class="main__info">
          <div class="bg-info">
            <img src="~/assets/img/transport-tanque.png" alt="Anka" />
          </div>
          <div class="main__detail">
            <div class="bg-skew">
              <svg xmlns="http://www.w3.org/2000/svg" width="618" height="401" viewBox="0 0 618 401" fill="none">
                <path d="M0 8.00001C0 3.58173 3.58172 0 8 0H609.409C614.565 0 618.374 4.80509 617.198 9.8248L527.002 394.825C526.155 398.442 522.928 401 519.213 401H8.00001C3.58174 401 0 397.418 0 393V8.00001Z" fill="#F5F5F5"/>
              </svg>
            </div>
            <div class="transport">
              <div class="transport__item">
                <div class="transport__icon"><MedalIcon/> </div>
                <div class="transport__description">Ofrecemos un servicio de transporte que garantiza la entrega puntual de su maquinaria a su proyecto, incluyendo el uso de vehículos adecuados para satisfacer sus necesidades.</div>
              </div>
              <div class="bg-[#80A3BA] w-full h-px"></div>
              <div class="transport__item">
                <div class="transport__icon"><InfoIcon/> </div>
                <div class="transport__description">Es importante destacar que se cobrará stand by o falso flete cuando sea necesario.</div>
              </div>
              <div class="transport__item item-action">
                <button class="btn-quote" type="button">
                  <RequestQuoteIcon />
                  <span>Cotizar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="transport__service">
      <div class="container mx-auto relative">
        <h3>Otros de nuestros servicios</h3>
        <div class="service">
          <div class="service-item">
            <div class="bg-skew"><img src="~/assets/img/other-services-bg.png" /></div>
            <TruckIcon class="service-icon" />
            <p class="service-title">COMPRA O ALQUILA</p>
            <p class="service-description">Maquinaria y vehículos pesados, semipesados y livianos a nivel nacional.</p>
          </div>
          <div class="service-item">
            <div class="bg-skew"><img src="~/assets/img/other-services-bg.png" /></div>
            <SpareIcon class="service-icon" />
            <p class="service-title">REPUESTOS</p>
            <p class="service-description">Venta de repuestos genuinos y alternativos para mantenimientos preventivos y correctivos de maquinarias y vehículos.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.transport-page {
  .transport {
    &__banner {
      @apply relative w-full pt-[330px] pb-12 h-[560px];
      @apply bg-primary;
      background: {
        image: url('~/assets/img/transport-page-bg.jpg');
        repeat: no-repeat;
        size: cover;
        position: top center;
      };
      .bg-gradient {
        @apply w-full absolute bottom-0 h-[435px];
        background: linear-gradient(0deg, #073A5A 12.27%, rgba(12, 42, 61, 0.00) 67.52%);
      }
      h2 {
        @apply uppercase text-[84px] leading-[64px] font-telegraf-black font-bold text-white text-center z-[2];
      }
      .bg-map {
        width: 214px;
        height: auto;
        @apply absolute -bottom-[45px] left-1/2 -ml-[107px] z-[3];
        @apply text-white text-lg leading-5 font-telegraf-black font-bold;
        span {
          @apply w-[114px] absolute top-[114px] right-[10px];
        }
      }
    }
    &__main {
      @apply relative pt-[80px] pb-[76px];
      @apply bg-primary;
      .main {
        @apply relative bg-primary;
        &__message {
          @apply font-normal font-telegraf-thin text-white text-xl leading-6 w-full mx-auto text-center;
          @apply mb-[76px];
          max-width: 650px;
        }
        &__info {
          @apply w-full relative flex items-center;
        }
        &__detail {
          @apply w-[700px] relative z-[60] -ml-[60px];
        }
      }
      .transport {
        @apply  gap-4 flex flex-col relative z-10;
        @apply pt-[80px] pl-[48px] pr-[170px];
        // @apply -ml-[40px];
        &__item {
          @apply flex w-full gap-3 items-start justify-between;
          &.item-action {
            @apply mt-5;
          }
        }
        &__icon {
          @apply shrink-0 w-[38px] text-secondary;
        }
        &__description {
          @apply text-primary text-xl leading-6 font-telegraf-regular;
        }
      }
      
      .btn-quote{
        @apply flex items-center justify-center h-[42px] w-full max-w-[360px];
        @apply bg-secondary text-white rounded-3xl text-sm font-telegraf-black font-bold uppercase gap-1;
        letter-spacing: 0.14px;
      }
      .bg-skew{
        @apply absolute text-primary w-full h-full top-0 left-0 rounded-lg;
      }
    }
    &__service {
      @apply relative pt-[56px] pb-[86px];
      h3 {
        @apply flex justify-center;
        @apply text-[48px] leading-[58px] mb-[46px];
        @apply font-telegraf-black font-bold text-primary text-center uppercase;
      }
      .service {
        @apply w-full relative flex gap-6;
        .bg-skew {
          @apply absolute left-0 top-0 w-full h-auto;
          img {
            @apply w-full min-h-[220px];
          }
        }
        &-item {
          @apply flex-1 grow flex flex-col py-7 pl-8 pr-[60px]  min-h-[200px] relative;
          // background: {
          //   image: url('~/assets/img/other-services-bg.png');
          //   repeat: no-repeat;
          //   size: contain;
          //   position: top center;
          // }
        }
        &-icon {
          @apply h-8 w-8 mb-4 shrink-0 flex relative z-10;
          @apply text-secondary;
        }
        &-title {
          @apply w-full relative mb-2;
          @apply text-primary font-telegraf-black font-bold text-2xl relative z-10;
        }
        &-description {
          @apply text-base leading-4;
          @apply text-primary font-telegraf-regular font-normal relative z-10;
        }
      }
    }
  }
}
</style>