<script lang="ts" setup>
import MarkerTruckIcon from '@/components/ui/icons/MarkerTruckIcon.vue'
import RequestQuoteIcon from '@/components/ui/icons/RequestQuoteIcon.vue'
import type { IMachinery } from '@/types'


const { machineries, getMachineById } = useMachinery();

interface Props {
  index: number,
  machinery: IMachinery | null;
}

const props = withDefaults(defineProps<Props>(), {
  index: 1,
  machinery: null
})


const formattedYear = computed(() => {
  if (!props.machinery) return '-'
  const [year, month, day] = props.machinery.mfg_date.split('T')[0].split('-')
  return year
})

</script>
<template>
  <div class="purchase">
    <div v-if="machinery" class="purchase__inner">
      <NuxtLink :to="`/buy/${machinery.id}`" class="purchase__header">
        <div
          v-if="machinery.images.length"
          class="purchase__image"
          :style="`background-image: url(${machinery.images[0].image_link})`"
        >
          <img class="hidden" :src="machinery.images[0].image_link" />
        </div>
        <div class="purchase__year">{{ formattedYear }}</div>
        <div class="purchase__subcategory">
          <span>{{ machinery?.category?.name || '-' }}</span>
        </div>
      </NuxtLink>
      <div class="purchase__body">
        <NuxtLink :to="`/buy/${machinery.id}`" class="purchase__name">{{ machinery.name }}</NuxtLink>
        <div class="purchase__chip">
          <div class="purchase__chip-item">
            {{ machinery?.location?.name || '-' }}
          </div>
          <div class="purchase__chip-item">
            8,500 hrs
          </div>
        </div>
      </div>
      <div class="purchase__actions">
        <button class="btn-quote" type="button">
          <RequestQuoteIcon />
          <span>Cotizar</span>
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.purchase {
  &__inner {
    @apply flex gap-3 flex-col w-[300px];
  }

  &__header {
    @apply relative rounded-lg overflow-hidden;
  }

  &__image {
    @apply w-full h-[340px] relative;
    background: {
      size: cover;
      repeat: no-repeat;
      position: top center;
    }
    @screen lg {
      background-image: none;
    }
  }

  &__year {
    @apply absolute top-3 right-3 flex gap-2 items-center py-1 px-3;
    @apply bg-white text-primary border border-primary rounded-[28px] font-telegraf-black font-bold uppercase;
  }

  &__subcategory {
    @apply absolute bottom-0 left-0 w-full p-3 pt-[120px] flex justify-start items-end;
    background: linear-gradient(0deg, #0C2A3D 17.75%, rgba(12, 42, 61, 0.00) 68.75%);
    span{
      @apply py-1 px-3;
      @apply bg-white text-primary font-telegraf-black font-bold rounded-[30px] uppercase;
    }
  }

  &__body {
    @apply flex flex-col gap-3;
  }

  &__name {
    @apply text-primary text-xl leading-8 font-telegraf-black font-bold uppercase text-left truncate ;
  }

  &__actions {
    @apply w-full relative invisible;
    .btn-quote{
      @apply flex items-center justify-center h-[42px] w-full;
      @apply bg-secondary text-white rounded-3xl text-sm font-telegraf-black font-bold uppercase;
      letter-spacing: 0.14px;
    }
  }

  &__chip {
    @apply hidden md:flex w-full gap-2 text-primary;
    &-item {
      @apply h-8 w-auto px-3 inline-flex items-center;
      @apply text-base truncate rounded-3xl border border-primary;
      &:last-child{
        @apply shrink-0;
      }
    }
  }

  &:hover {
    .purchase__actions {
      @apply visible;
    }
  }
}
</style>