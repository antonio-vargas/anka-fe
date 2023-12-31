<script setup lang="ts">
import { ArrowRightIcon, EagleIcon } from '@/components/ui/icons'
</script>
<template>
  <section class="about-section">
    <div class="bg-gradient-primary"></div>
    <div class="container mx-auto z-10 relative">
      <div class="about-section__header">
        <p>SOBRE NOSOTROS</p>
        <h3>IMPULSAMOS EL DESARROLLO<br/>DE NUESTROS CLIENTES</h3>
      </div>
      <div class="about-section__body">
        <div class="bg-skew-primary">
          <svg class="hidden lg:block w-full" xmlns="http://www.w3.org/2000/svg" width="1178" height="346" viewBox="0 0 1178 346" fill="none">
            <path d="M0 8.00001C0 3.58173 3.58172 0 8 0H1169.91C1175.07 0 1178.88 4.80415 1177.7 9.82353L1100.45 339.824C1099.6 343.441 1096.37 346 1092.66 346H7.99999C3.58171 346 0 342.418 0 338V8.00001Z" fill="#0C2A3D"/>
          </svg>
          <svg class="block lg:hidden" xmlns="http://www.w3.org/2000/svg" width="320" height="443" viewBox="0 0 320 443" fill="none">
            <path d="M0 8C0 3.58172 3.58172 0 8 0H311.334C316.004 0 319.681 3.98356 319.308 8.63876L285.145 435.139C284.812 439.296 281.341 442.5 277.171 442.5H8C3.58172 442.5 0 438.918 0 434.5V8Z" fill="#0C2A3D"/>
          </svg>
        </div>
        <div class="about-section__inner">
          <div class="text">
            <div class="message">Somos un equipo de profesionales apasionados con experiencia en negocios relacionados a las Maquinarias y vehículos.</div>
          </div>
          <div class="graph">
            <div class="circle-text">Ahorra tiempo</div> 
            <div class="circle-text font-telegraf-black">Rentabiliza <EagleIcon class="text-secondary"/></div> 
            <div class="circle-text">Ahorrar dinero</div> 
          </div>
        </div>
        <div class="about-section__actions">
          <NuxtLink class="btn-view-more">SABER MÁS <ArrowRightIcon/></NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.about-section{
  @apply relative w-full pt-9 pb-[102px];
  @apply bg-primary text-white;
  background: {
    image: url('~/assets/img/about-bg.jpg');
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
    @apply text-center w-full mb-12;
    p{
      @apply font-telegraf-regular font-normal text-xl leading-8 mb-6;
    }
    h3 {
      @apply font-telegraf-black lg:font-telegraf-regular font-bold text-[28px] leading-none lg:text-5xl lg:leading-[58px]
    }
  }
  &__body {
    @apply relative mx-auto w-[320px] lg:w-full max-w-[1180px] px-8 lg:px-[62px] pt-[29px] lg:pt-[55px] pb-11 justify-between gap-3 flex flex-col;
    @apply rounded-lg;
    .bg-skew-primary{
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
      @apply font-telegraf-black font-bold uppercase text-xl lg:text-[26px] xl:text-[32px] leading-none lg:leading-[42px];
    }
    .graph {
      @apply text-white flex gap-4 lg:gap-5 xl:gap-9 flex-col w-[194px] lg:w-[340px] py-7 lg:mr-[30px] relative z-10;
      .circle-text {
        @apply text-sm lg:text-xl leading-5 relative w-full gap-1 inline-flex items-center justify-center;
        &:first-child, &:last-child {
          &:after{
            content: "";
            @apply absolute;
            @apply border border-secondary rounded-[100%] h-[75px] lg:h-[90px] xl:h-[132px] w-full;
          }
        }
        &:first-child {
          &:after{
            @apply -top-[10px] lg:-top-[10px] xl:-top-[30px] left-0;
          }
        }
        &:last-child {
          &:after{
            @apply -bottom-[10px] lg:-bottom-[10px] xl:-bottom-[30px] left-0;
          }
        }
      }
    }
  }
  &__inner {
    @apply relative justify-between gap-6 flex flex-col lg:flex-row;
  }
  &__actions {
    @apply flex w-full justify-start relative z-10;
    .btn-view-more {
      @apply py-1 px-6 inline-flex items-center gap-1;
      @apply bg-white text-primary rounded-[36px] text-base font-telegraf-black font-bold;
      letter-spacing: 1px;
    }
  }
}
</style>