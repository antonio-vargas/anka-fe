<script setup lang="ts">
import { ref } from 'vue'
import { TruckIcon, SpareIcon, ArrowRightBigIcon } from '@/components/ui/icons'
import PurchaseItem from '@/components/purchase/PurchaseItem.vue'
import UiSelect from '@/components/ui/form/UiSelect.vue'

import { LIST_CATEGORY } from '@/constants/category'
const selectedCategory = ref()
</script>
<template>
  <div class="purchase-page">
    <div class="container mx-auto relative">
      <div class="purchase__wrapper">
        <div class="purchase__filter">
          <div class="filter">
            <h3 class="filter__title">Filtrar</h3>
            <UiSelect
              v-model:model-value="selectedCategory"
              class="mb-4 z-[10]"
              label="Compatibilidad"
              placeholder="Selecciona una opción"
              :options="LIST_CATEGORY"
            />
            <UiSelect
              v-model:model-value="selectedCategory"
              class="mb-4 z-[8]"
              label="Marca"
              placeholder="Selecciona una opción"
              :options="LIST_CATEGORY"
            />
            <UiSelect
              v-model:model-value="selectedCategory"
              class="mb-4 z-[5]"
              label="Ubicación"
              placeholder="Selecciona una opción"
              :options="LIST_CATEGORY"
            />
            <div class="w-full">
              <button type="button" class="btn-filter">FILTRAR</button>
            </div>
          </div>
        </div>
        <div class="purchase__result pt-10">
          <div class="grid grid-cols-3 gap-6">
            <PurchaseItem v-for="index in 8" :key="`PURCHASE_${index}`" />
          </div>
        </div>
      </div>
    </div>
    <div class="purchase__service">
      <div class="container mx-auto relative">
        <h3>Otros de nuestros servicios</h3>
        <div class="service">
          <div class="service-item">
            <div class="bg-skew"><img src="~/assets/img/other-services-bg.png" /></div>
            <SpareIcon class="service-icon" />
            <p class="service-title">REPUESTOS</p>
            <p class="service-description">Venta de repuestos genuinos y alternativos para mantenimientos preventivos y correctivos de maquinarias y vehículos.</p>
            <NuxtLink to="/"><ArrowRightBigIcon class="rotate-180" /></NuxtLink>
          </div>
          <div class="service-item">
            <div class="bg-skew"><img src="~/assets/img/other-services-bg.png" /></div>
            <TruckIcon class="service-icon" />
            <p class="service-title">TRANSPORTE</p>
            <p class="service-description">Vía terrestre y fluvial desde donde se encuentre a cualquier destino dentro del país.</p>
            <NuxtLink class="splide__arrow splide__arrow--prev"><ArrowRightBigIcon class="rotate-180" /></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.purchase-page {
  @apply w-full relative;
  @apply bg-[#DFE6EA] border-b border-[#80A3BA];
  .purchase {
    &__wrapper {
      @apply flex w-full pb-10;
    }

    &__filter {
      @screen lg {
        @apply w-[370px] shrink-0 pt-8;
      }
      .filter {
        width: 300px;
        &__title {
          @apply mb-4;
          @apply font-telegraf-black font-bold text-primary text-2xl;
        }
      }
      .btn-filter{
        @apply h-10 flex w-full rounded-3xl items-center justify-center;
        @apply bg-primary text-white;
      }
    }

    &__result {
      @apply flex flex-1;
    }
    &__service {
      @apply relative pt-[56px] pb-[86px] bg-white;
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