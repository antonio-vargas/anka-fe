<script setup lang="ts">
import { ref } from 'vue'
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
              class="mb-4"
              label="Categoría"
              placeholder="Selecciona la categoría"
              :options="LIST_CATEGORY"
            />
            <UiSelect
              v-model:model-value="selectedCategory"
              class="mb-4"
              label="Subcategoría"
              placeholder="Selecciona la subcategoría"
              :options="LIST_CATEGORY"
            />
            <UiSelect
              v-model:model-value="selectedCategory"
              class="mb-4"
              label="Ubicación"
              placeholder="Selecciona la ciudad"
              :options="LIST_CATEGORY"
            />
            <UiSelect
              v-model:model-value="selectedCategory"
              class="mb-4"
              label="Año"
              placeholder="Selecciona el año"
              :options="LIST_CATEGORY"
            />
            <UiSelect
              v-model:model-value="selectedCategory"
              class="mb-4"
              label="Marca"
              placeholder="Selecciona la marca"
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
  </div>
</template>
<style lang="scss" scoped>
.purchase-page {
  @apply w-full relative;
  @apply bg-[#DFE6EA] border-b border-[#80A3BA];
  .purchase {
    &__wrapper {
      @apply flex w-full;
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
  }
}
</style>