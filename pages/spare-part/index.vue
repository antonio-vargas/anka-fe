<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useOffsetPagination } from '@vueuse/core'
import { TruckIcon, SpareIcon, ArrowRightBigIcon, FilterIcon, SearchIcon } from '@/components/ui/icons'
import SparePartItem from '@/components/spare-part/SparePartItem.vue'
import UiSelect from '@/components/ui/UiSelect.vue'
import type { MachinaryPropertyObject, MachineryCategory } from '@/types';

const selectedCompatibility = ref<MachinaryPropertyObject | null>(null)
const selectedLocation = ref<MachinaryPropertyObject | null>(null)
const selectedBrand = ref<MachinaryPropertyObject | null>(null)
const toggleFilter = ref<boolean>(false)
const page = ref<number>(1)

const { spareParts, loadingSpareParts, totalSpareParts, getSpareParts } = useSparePart();
const { brands, locations, compatibilities, getBrands, getLocations, getCategories } = useFilter();

const {
  currentPage,
  currentPageSize,
  pageCount,
  isFirstPage,
  isLastPage,
  prev,
  next,
} = useOffsetPagination({
  total: totalSpareParts,
  page: page.value,
  pageSize: 6,
  onPageChange: ({ currentPage, currentPageSize }) => {
    const params = `?page=${currentPage}&pageSize=6`
    page.value = currentPage
    return getSpareParts(params)
  },
})

onMounted(async () => {
  await getBrands()
  await getLocations()
  await getCategories()
  await getSpareParts('?page=1&pageSize=6')
})

const handleToggleFilter = () => {
  toggleFilter.value = !toggleFilter.value
}

const disabledBtnClear = computed(() => {
  return selectedCompatibility.value === null && selectedLocation.value === null && selectedBrand.value === null
})

const handleSearchFilter = async () => {
  let params = ''
  if (selectedCompatibility.value) {
    params += `&compatibility=${selectedCompatibility.value?.name}`
  }
  if (selectedLocation.value) {
    params += `&location=${selectedLocation.value?.name}`
  }
  if (selectedBrand.value) {
    params += `&brand=${selectedBrand.value?.name}`
  }
  page.value = 1
  await getSpareParts(`?page=${page.value}&pageSize=6${params}`)
}

const handleClearFilter = async () => {
  selectedCompatibility.value = null
  selectedLocation.value = null
  selectedBrand.value = null
  await getSpareParts('?page=1&pageSize=6')
}
</script>
<template>
  <div class="sparepart-page">
    <div class="container mx-auto px-3 lg:px-0 relative">
      <div class="sparepart__wrapper">
        <div class="sparepart__filter">
          <div class="filter">
            <div class="filter__title">
              <p class="hidden md:block">Filtrar</p>
              <button class="btn-toggle-filter" type="button" @click="handleToggleFilter"><FilterIcon />Filtrar</button>
              <div class="block md:hidden uppercase text-xs font-telegraf-regular">
                {{ spareParts.length }} RESULTADOS
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
                  v-model:model-value="selectedCompatibility"
                  class="mb-4 z-[5]"
                  label="Compatibilidad"
                  placeholder="Selecciona la compatibilidad"
                  :options="compatibilities"
                />
                <UiSelect
                  v-model:model-value="selectedLocation"
                  class="mb-4 z-[4]"
                  label="Ubicación"
                  placeholder="Selecciona la ciudad"
                  :options="locations"
                />
                <UiSelect
                  v-model:model-value="selectedBrand"
                  class="mb-4 z-[2]"
                  label="Marca"
                  placeholder="Selecciona la marca"
                  :options="brands"
                />
                <div class="w-full" @click="handleSearchFilter">
                  <button type="button" class="btn-filter">FILTRAR</button>
                </div>
                <div class="w-full" @click="handleClearFilter">
                  <button
                    type="button"
                    class="btn-clear"
                    :disabled="disabledBtnClear"
                    :class="{
                      'cursor-not-allowed opacity-50': disabledBtnClear
                    }"
                  >LIMPIAR</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="sparepart__result pt-0 md:pt-10"
          :class="{
            'md:justify-end': !loadingSpareParts,
            'md:justify-center': loadingSpareParts
          }"
        >
          <div v-if="loadingSpareParts" class="w-full text-center mb-10">
            <svg class="animate-spin h-20 w-20 text-primary mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <div
            v-if="!loadingSpareParts && spareParts.length === 0"
            class="w-full text-center"
          >
            <SearchIcon class="text-[#B9C8D0] w-[207px] h-[207px] mx-auto mb-10" />
            <p class="text-primary text-base font-telegraf-black font-bold">NO SE ENCONTRARON RESULTADOS A TU BÚSQUEDA</p>
          </div>
          <div v-if="!loadingSpareParts && spareParts.length > 0" class="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6 w-full">
            <SparePartItem
              v-for="(item, index) in spareParts"
              :key="`SPARE_PART_CARD_${index}`"
              :index="index"
              :spare-part="item"
            />
          </div>
          <div v-if="spareParts.length > 0" class="w-full relative flex justify-center gap-3 items-center mt-6">
            <button
              class="w-9 h-9 rounded-full border border-primary"
              :class="{
                'cursor-not-allowed opacity-60': isFirstPage
              }"
              :disabled="isFirstPage"
              @click="prev"
            >
              <ArrowRightBigIcon class="rotate-180" />
            </button>
            <span>{{ currentPage }} de <b>{{ pageCount }}</b></span>
            <button
              class="w-9 h-9 rounded-full border border-primary"
              :class="{
                'cursor-not-allowed opacity-60': isLastPage
              }"
              :disabled="isLastPage"
              @click="next"
            >
              <ArrowRightBigIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="sparepart__service">
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
              <NuxtLink to="/spare-part"><ArrowRightBigIcon class="rotate-0" /></NuxtLink>
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
.sparepart-page {
  @apply w-full relative;
  @apply bg-[#DFE6EA] border-b border-[#80A3BA];
  &:deep(.spare__inner) {
    @apply w-full;
  }
  .sparepart {
    &__wrapper {
      @apply flex flex-col md:flex-row w-full;
      @screen lg {
        @apply min-h-[680px];
      }
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
      .btn-clear {
        @apply h-10 flex w-full rounded-3xl items-center justify-center mt-5;
        @apply bg-gray-400 text-white;
      }
      .btn-toggle-filter{
        @apply h-8 flex md:hidden w-auto text-base items-center justify-center gap-1 py-0;
        @apply bg-transparent text-primary border border-primary/70 rounded-md px-2;
      }
    }

    &__result {
      @apply flex w-full md:flex-1 pb-10 md:pl-6 lg:pl-10 flex-col;
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