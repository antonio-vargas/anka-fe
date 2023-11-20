<script setup lang="ts">
import { MedalIcon, InfoIcon, RequestQuoteIcon } from '@/components/ui/icons'
</script>
<template>
  <section class="transport-section">
    <!-- <div class="bg-gradient-primary"></div> -->
    <div class="container mx-auto z-10 relative">
      <div class="transport-section__header">
        <h3>TRANSPORTE</h3>
        <p>Maquinaria en general y carga especial vía terrestre y fluvial en todo el país.</p>
      </div>
      <div class="transport-section__body">
        <div class="bg-skew">
          <svg xmlns="http://www.w3.org/2000/svg" width="618" height="401" viewBox="0 0 618 401" fill="none">
            <path d="M0 8.00001C0 3.58173 3.58172 0 8 0H609.409C614.565 0 618.374 4.80509 617.198 9.8248L527.002 394.825C526.155 398.442 522.928 401 519.213 401H8.00001C3.58174 401 0 397.418 0 393V8.00001Z" fill="#F5F5F5"/>
          </svg>
        </div>
        <div class="transport-section__inner">
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
  </section>
</template>
<style lang="scss" scoped>
.transport-section{
  @apply relative w-full pt-[90px] pb-[80px];
  @apply bg-primary text-white;
  background: {
    image: url('~/assets/img/transport-bg.jpg');
    repeat: no-repeat;
    size: cover;
    position: top center;
  };
  .bg-gradient-primary {
    @apply absolute w-full left-0 top-0 h-[385px];
    @apply bg-primary;
    background: linear-gradient(180deg, rgba(12,42,61,1) 8.42%, rgba(255,255,255,0) 100%);
  }
  &__header {
    @apply text-left w-full mb-12;
    h3 {
      @apply font-telegraf-regular font-bold text-5xl leading-[58px]
    }
    p{
      @apply font-telegraf-thin font-normal text-base leading-8 mb-0 max-w-[310px];
    }
  }
  &__body {
    @apply relative max-w-[620px] min-h-[400px] justify-between items-center flex;
    @apply rounded-lg;
    .transport {
      @apply  gap-4 flex flex-col;
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
      @apply bg-secondary text-white rounded-3xl text-sm font-telegraf-black font-bold uppercase;
      letter-spacing: 0.14px;
    }
    .bg-skew{
      @apply absolute text-primary w-full h-full top-0 left-0 rounded-lg;
    }
    // &:after {
    //   content: "";
    //   transform: skewX(-25deg);
    // }
    .text {
      @apply flex flex-col gap-9 relative z-10;
    }
    .message {
      @apply lg:max-w-[660px] flex flex-row;
      @apply font-telegraf-black font-bold uppercase text-[32px] leading-[42px];
    }
    .graph {
      @apply text-white flex gap-9 flex-col w-[340px] py-7 lg:mr-[30px] relative z-10;
      .circle-text {
        @apply text-xl leading-5 relative w-full gap-1 inline-flex items-center justify-center;
        &:first-child, &:last-child {
          &:after{
            content: "";
            @apply absolute;
            @apply border border-secondary rounded-[100%] h-[132px] w-full;
          }
        }
        &:first-child {
          &:after{
            @apply -top-[30px] left-0;
          }
        }
        &:last-child {
          &:after{
            @apply -bottom-[30px] left-0;
          }
        }
      }
    }
  }
  &__inner {
    @apply relative justify-between gap-6 flex flex-row pl-[44px] pr-[106px] pt-[55px] pb-11 ;
  }
}
</style>