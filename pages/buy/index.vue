<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { TruckIcon, SpareIcon, ArrowRightBigIcon, FilterIcon } from '@/components/ui/icons'
import PurchaseItem from '@/components/purchase/PurchaseItem.vue'
import UiSelect from '@/components/ui/form/UiSelect.vue'
import type { MachinaryPropertyObject, MachineryCategory } from '@/types';

import { LIST_CATEGORY } from '@/constants/category'
const selectedCategory = ref()
const selectedSubcategory = ref()
const selectedLocation = ref()
const selectedBrand = ref()
const selectedYear = ref<string>()
const toggleFilter = ref<boolean>(false)
const subcategoryOptions = ref<MachinaryPropertyObject[]>([])
const { machineries, getMachineries } = useMachinery();
const { brands, locations, categories, getBrands, getLocations, getCategories } = useFilter();

onMounted(async () => {
  await getBrands()
  await getLocations()
  await getCategories()
  await getMachineries()
})

const handleSelectCategory = (value: any) => {
  console.log('handleSelectCategory', value)
  const index = categories.value.findIndex(e => e.id === value.id)
  if (index >= 0) {
    subcategoryOptions.value = categories.value[index].children
  }
}

const handleToggleFilter = () => {
  toggleFilter.value = !toggleFilter.value
}

</script>
<template>
  <div class="purchase-page">
    <div class="container mx-auto px-3 lg:px-0 relative">
      <div class="purchase__wrapper">
        <div class="purchase__filter">
          <div class="filter">
            <div class="filter__title">
              <p class="hidden md:block">Filtrar</p>
              <button class="btn-toggle-filter" type="button" @click="handleToggleFilter"><FilterIcon />Filtrar</button>
              <div class="block md:hidden uppercase text-xs font-telegraf-regular">
                {{ machineries.length }} RESULTADOS
              </div>
            </div>
            <div v-show="toggleFilter" class="filter__form">
              <div class="filter__fields">
                <div class="w-full pb-2 md:hidden border-b border-primary/60 mb-2 flex justify-between">
                  FILTRAR
                  <button class="text-primary w-6 h-6 flex items-center justify-center" @click="handleToggleFilter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M6.39953 18.6538L5.3457 17.6L10.9457 12L5.3457 6.40002L6.39953 5.34619L11.9995 10.9462L17.5995 5.34619L18.6534 6.40002L13.0534 12L18.6534 17.6L17.5995 18.6538L11.9995 13.0538L6.39953 18.6538Z" fill="#073A5A"/>
                    </svg>
                  </button>
                </div>
                <UiSelect
                  v-model:model-value="selectedCategory"
                  class="mb-4 z-[6]"
                  label="Categoría"
                  placeholder="Selecciona la categoría"
                  :options="categories"
                  @update:model-value="handleSelectCategory"
                />
                <UiSelect
                  v-model:model-value="selectedSubcategory"
                  class="mb-4 z-[5]"
                  label="Subcategoría"
                  placeholder="Selecciona la subcategoría"
                  :options="subcategoryOptions"
                />
                <UiSelect
                  v-model:model-value="selectedLocation"
                  class="mb-4 z-[4]"
                  label="Ubicación"
                  placeholder="Selecciona la ciudad"
                  :options="locations"
                />
                <div class="w-full flex flex-col gap-1 mb-4">
                  <label class="font-telegraf-black font-bold text-base uppercase">Año</label>
                  <div class="relative w-full">
                    <input
                      v-model="selectedYear"
                      type="text"
                      id="Nombre"
                      class="border border-[#BED2DF] bg-white text-primary rounded-lg h-9 w-full relative justify-between flex px-2 items-center"
                      placeholder=""
                      maxlength="4"
                    />
                  </div>
                </div>
                <UiSelect
                  v-model:model-value="selectedBrand"
                  class="mb-4 z-[2]"
                  label="Marca"
                  placeholder="Selecciona la marca"
                  :options="brands"
                />
                <div class="w-full">
                  <button type="button" class="btn-filter">FILTRAR</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="purchase__result pt-10">
          <div class="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6 w-full">
            <PurchaseItem
              v-for="(item, index) in machineries"
              :key="`MACHINERY_CARD_${index}`"
              :index="index"
              :machinery="item"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="purchase__service">
      <div class="container mx-auto relative">
        <h3>Otros de nuestros servicios</h3>
        <div class="service">
          <div class="service-item">
            <div class="bg-skew">
              <img class="hidden sm:block" src="~/assets/img/other-services-bg.png" />
              <img class="block sm:hidden" src="~/assets/img/other-services-mobile-bg.png" />
            </div>
            <div class="service-info">
              <SpareIcon class="service-icon" />
              <p class="service-title">REPUESTOS</p>
              <p class="service-description">Venta de repuestos genuinos y alternativos para mantenimientos preventivos y correctivos de maquinarias y vehículos.</p>
            </div>
            <div>
              <NuxtLink to="/spare"><ArrowRightBigIcon class="rotate-0" /></NuxtLink>
            </div>
          </div>
          <div class="service-item">
            <div class="bg-skew">
              <img class="hidden sm:block" src="~/assets/img/other-services-bg.png" />
              <img class="block sm:hidden" src="~/assets/img/other-services-mobile-bg.png" />
            </div>
            <div class="service-info">
              <TruckIcon class="service-icon" />
              <p class="service-title">TRANSPORTE</p>
              <p class="service-description">Vía terrestre y fluvial desde donde se encuentre a cualquier destino dentro del país.</p>
            </div>
            <div>
              <NuxtLink to="/transport" class="splide__arrow splide__arrow--prev"><ArrowRightBigIcon class="rotate-0" /></NuxtLink>
            </div>
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
      @apply flex flex-col md:flex-row w-full;
    }
    &:deep(.purchase__inner) {
      @apply w-full;
    }

    &__filter {
      @apply md:w-[280px] xl:w-[330px] md:shrink-0 md:pr-6 lg:pr-10;
      .filter {
        @apply w-full pt-4 lg:pt-10;
        &__title {
          @apply mb-4 flex flex-row justify-between items-center;
          @apply font-telegraf-black font-bold text-primary text-2xl;
        }
        &__form {
          @apply fixed z-[1200] bg-black/30 flex items-end h-full w-full top-0 left-0;
          @screen md {
            @apply relative top-auto left-auto bg-transparent h-auto;
            display: block !important;
          }
        }
        &__fields {
          @apply bg-white px-3 py-4 w-full;
          @screen md {
            @apply bg-transparent px-0 py-0;
          }
        }
      }
      .btn-filter{
        @apply h-10 flex w-full rounded-3xl items-center justify-center;
        @apply bg-primary text-white;
      }
      .btn-toggle-filter{
        @apply h-8 flex md:hidden w-auto text-base items-center justify-center gap-1 py-0;
        @apply bg-transparent text-primary border border-primary/70 rounded-md px-2;
      }
    }

    &__result {
      @apply flex w-full md:flex-1 md:justify-end pb-10 md:pl-6 lg:pl-10;
      @screen md {
        border-left: 1px solid rgb(12 42 61 / 0.3);
      }
    }
    &__service {
      @apply relative pt-[56px] pb-[86px] bg-white;
      h3 {
        @apply flex justify-center;
        @apply text-[48px] leading-[58px] mb-[46px];
        @apply font-telegraf-black font-bold text-primary text-center uppercase;
      }
      .service {
        @apply w-full sm:w-[540px] lg:w-full relative flex flex-col lg:flex-row gap-6 sm:gap-10 lg:gap-6 mx-auto;
        .bg-skew {
          @apply absolute left-0 top-0 w-full h-auto;
          img {
            @apply w-full min-h-[220px];
          }
        }
        &-item {
          @apply flex-1 grow flex py-7 pl-8 md:pl-12 lg:pl-8 pr-[40px] md:pr-[80px] lg:pr-[60px] min-h-[200px] relative flex-row items-end gap-1 lg:gap-2;
          // background: {
          //   image: url('~/assets/img/other-services-bg.png');
          //   repeat: no-repeat;
          //   size: contain;
          //   position: top center;
          // }
          a {
            @apply text-primary;
          }
        }
        &-info {
          @apply flex flex-col;
        }
        &-icon {
          @apply h-8 w-8 mb-1 lg:mb-4 shrink-0 flex relative z-10;
          @apply text-secondary;
        }
        &-title {
          @apply w-full relative mb-1 lg:mb-2;
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