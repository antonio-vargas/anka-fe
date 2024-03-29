<script setup lang="ts">
import { computed, nextTick, ref, onMounted } from 'vue'
import { useOffsetPagination } from '@vueuse/core'
import { TruckIcon, SpareIcon, SearchIcon, ArrowRightBigIcon, FilterIcon } from '~/components/ui/icons'
import RentalItem from '~/components/rental/RentalItem.vue'
import UiSelect from '~/components/ui/UiSelect.vue'
import RentalModal from '~/components/ui/RentalModal.vue'
import type { MachinaryPropertyObject, MachineryCategory, IMachinery } from '~/types';

const rentalModal = ref<InstanceType<typeof RentalModal>>();
const selectedCategory = ref<MachinaryPropertyObject | null>(null)
const selectedSubcategory = ref<MachinaryPropertyObject | null>(null)
const selectedLocation = ref<MachinaryPropertyObject | null>(null)
const selectedBrand = ref<MachinaryPropertyObject | null>(null)
const selectedYear = ref<string>()
const toggleFilter = ref<boolean>(false)
const initSearch = ref<boolean>(true)
const subcategoryOptions = ref<MachinaryPropertyObject[]>([])
const page = ref<number>(1)

const { machineries, loadingMachineries, totalMachineries, getMachineries } = useMachineries();
const { brands, locations, categories, getBrands, getLocations, getCategories } = useFilter();

const {
  currentPage,
  currentPageSize,
  pageCount,
  isFirstPage,
  isLastPage,
  prev,
  next,
} = useOffsetPagination({
  total: totalMachineries.value,
  page: 1,
  pageSize: 6,
  onPageChange: async ({ currentPage, currentPageSize }) => {
    const params = `?page=${currentPage}&pageSize=6&isForRent=true`
    page.value = currentPage
    await getMachineries(params)
    return machineries.value
  },
})

onMounted(async () => {
  await getBrands()
  await getLocations()
  await getCategories()
  await getMachineries('?page=1&pageSize=6&isForRent=true')
  initSearch.value = false
})

const handleSelectCategory = (value: any) => {
  console.log('handleSelectCategory', value)
  const index = categories.value.findIndex(e => e.id === value.id)
  if (index >= 0) {
    subcategoryOptions.value = categories.value[index].children
  }
}

const disabledBtnClear = computed(() => {
  return selectedCategory.value === null &&
    selectedSubcategory.value === null &&
    selectedLocation.value === null &&
    selectedBrand.value === null &&
    selectedYear.value === null
})

const handleToggleFilter = () => {
  toggleFilter.value = !toggleFilter.value
}

const handleSearchFilter = async () => {
  let params = ''
  if (selectedCategory.value) {
    params += `&category=${selectedCategory.value?.name}`
  }
  if (selectedSubcategory.value) {
    params += `&subcategory=${selectedSubcategory.value?.name}`
  }
  if (selectedLocation.value) {
    params += `&location=${selectedLocation.value?.name}`
  }
  if (selectedBrand.value) {
    params += `&brand=${selectedBrand.value?.name}`
  }
  if (selectedYear.value) {
    params += `&year=${selectedYear.value}`
  }
  page.value = 1
  await getMachineries(`?page=${page.value}&pageSize=6${params}&isForRent=true`)
}

const handleClearFilter = async () => {
  selectedCategory.value = null
  selectedSubcategory.value = null
  selectedLocation.value = null
  selectedBrand.value = null
  await getMachineries('?page=1&pageSize=6&isForRent=true')
}

const handleNextPage = async () => {
  next()
  await nextTick()
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const handleSelectRental = (machinery: IMachinery) => {
  console.log(machinery)
  rentalModal.value?.openModal(machinery)
}

const handlePrevPage = async () => {
  prev()
  await nextTick()
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
                      onkeypress="return event.charCode >= 48 && event.charCode <= 57"
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
          class="purchase__result pt-0 md:pt-10"
          :class="[loadingMachineries || initSearch ? 'md:justify-center' : 'md:justify-start']"
        >
          <div v-if="loadingMachineries || initSearch" class="w-full flex items-center justify-center md:min-h-[600px]">
            <svg class="animate-spin h-20 w-20 text-primary mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <template v-else>
            <div
              v-if="machineries.length === 0"
              class="w-full text-center"
            >
              <SearchIcon class="text-[#B9C8D0] w-[207px] h-[207px] mx-auto mb-10" />
              <p class="text-primary text-base font-telegraf-black font-bold">NO SE ENCONTRARON RESULTADOS A TU BÚSQUEDA</p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6 w-full">
              <RentalItem
                v-for="(item, index) in machineries"
                :key="`MACHINERY_CARD_${index}`"
                :index="index"
                :machinery="item"
                @select="handleSelectRental"
              />
            </div>
            <div v-if="machineries.length > 0" class="w-full relative flex justify-center gap-3 items-center mt-6">
              <button
                class="w-9 h-9 rounded-full border border-primary"
                :class="{
                  'cursor-not-allowed opacity-60': isFirstPage
                }"
                :disabled="isFirstPage"
                @click="handlePrevPage"
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
                @click="handleNextPage"
              >
                <ArrowRightBigIcon />
              </button>
            </div>
          </template>
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
    <RentalModal ref="rentalModal" />
  </div>
</template>
<style lang="scss" scoped>
.purchase-page {
  @apply w-full relative;
  @apply bg-[#DFE6EA] border-b border-[#80A3BA];
  &:deep(.purchase__inner) {
    @apply w-full;
  }
  .purchase {
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
          @apply fixed z-[100] bg-black/30 flex items-end h-full w-full top-0 left-0;
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