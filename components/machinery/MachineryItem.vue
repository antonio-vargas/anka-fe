<script lang="ts" setup>
import MarkerTruckIcon from '@/components/ui/icons/MarkerTruckIcon.vue'
import RequestQuoteIcon from '@/components/ui/icons/RequestQuoteIcon.vue'
import type { IMachinery } from '@/types'

interface Props {
  index: number,
  machinery: IMachinery | null;
}

withDefaults(defineProps<Props>(), {
  index: 1,
  machinery: null
})

</script>
<template>
  <div class="machinery">
    <div v-if="machinery" class="machinery__inner">
      <NuxtLink :to="`/buy/${machinery.id}`" class="machinery__header">
        <div
          v-if="machinery.images.length"
          class="machinery__image"
          :style="`background-image: url(${machinery.images[0].image_link})`"
        >
          <img class="hidden" :src="machinery.images[0].image_link" />
        </div>
        <div class="machinery__year">{{ machinery?.location?.name || '-' }}</div>
        <div class="machinery__subcategory">
          <span>{{ machinery?.category?.name || '-' }}</span>
        </div>
      </NuxtLink>
      <div class="machinery__body">
        <NuxtLink :to="`/buy/${machinery.id}`" class="machinery__name">{{ machinery.name }}</NuxtLink>
        <div class="machinery__chip">
          <div class="machinery__chip-item">
            {{ machinery.mfg_year }}
          </div>
          <div class="machinery__chip-item">
            {{ machinery.hourmeter || 0 }} hrs
          </div>
        </div>
      </div>
      <div class="machinery__actions">
        <button class="btn-quote" type="button">
          <RequestQuoteIcon />
          <span>Cotizar</span>
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.machinery {
  &__inner {
    @apply flex gap-3 flex-col w-full;
  }

  &__header {
    @apply relative rounded-lg overflow-hidden;
  }

  &__image {
    @apply w-full h-[260px] relative;
    background: {
      size: cover;
      repeat: no-repeat;
      position: top center;
    }
    @screen lg {
      @apply h-[340px];
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
    @apply flex flex-col gap-1;
  }

  &__name {
    @apply text-primary text-base leading-4 md:text-xl md:leading-8 font-telegraf-black font-bold uppercase text-left truncate;
  }

  &__actions {
    @apply w-full relative;
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
  @screen lg {
    &__actions {
      @apply invisible;
    }
    &:hover {
      .purchase__actions {
        @apply visible;
      }
    }
  }
}
</style>