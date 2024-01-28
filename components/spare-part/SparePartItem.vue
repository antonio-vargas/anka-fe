<script lang="ts" setup>
import RequestQuoteIcon from '@/components/ui/icons/RequestQuoteIcon.vue'
import type { ISparePart } from '@/types'

interface Props {
  index: number,
  sparePart: ISparePart | null;
}

withDefaults(defineProps<Props>(), {
  index: 1,
  sparePart: null
})

</script>
<template>
  <div class="spare">
    <div v-if="sparePart" class="spare__inner">
      <NuxtLink :to="`/spare-part/${sparePart.id}`" class="spare__header relative">
        <div
          v-if="sparePart.images.length"
          class="spare__image"
          :style="`background-image: url(${sparePart.images[0].image_link})`"
        >
          <img class="hidden" :src="sparePart.images[0].image_link" />
        </div>
        <div class="chip-item absolute bottom-2 left-2">
          {{ sparePart.brand?.name || '-' }}
        </div>
        <div class="chip-item absolute top-2 right-2">
          {{ sparePart.location?.name || '-' }}
        </div>
        <!-- <div class="spare__image">
          <img src="~/assets/img/spare-item.jpg" />
        </div> -->
      </NuxtLink>
      <div class="spare__body">
        <NuxtLink :to="`/spare-part/${sparePart.id}`" class="spare__name">{{ sparePart.name }}</NuxtLink>
        <p class="spare__code">{{ sparePart.part_number }}</p>
      </div>
      <div class="spare__actions">
        <button class="btn-quote" type="button">
          <RequestQuoteIcon />
          <span>Cotizar</span>
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.spare {
  &__inner {
    @apply flex gap-3 flex-col w-[300px];
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

  &__body {
    @apply flex flex-col gap-1;
  }

  &__name {
    @apply text-primary text-base leading-4 md:text-xl md:leading-8 font-telegraf-black font-bold uppercase text-left truncate;
  }

  &__code {
    @apply text-primary text-base leading-4 md:text-lg md:leading-5 font-telegraf-regular font-semibold uppercase text-left truncate;
  }
  .chip-item{
    @apply h-8 w-auto px-3 inline-flex items-center;
    @apply text-base truncate rounded-3xl border font-telegraf-black font-bold text-primary border-primary bg-white uppercase;
    &:last-child{
      @apply shrink-0;
    }
  }

  &__actions {
    @apply w-full relative;
    .btn-quote{
      @apply flex items-center justify-center h-9 md:h-[42px] w-full gap-1;
      @apply bg-secondary text-white rounded-3xl text-sm font-telegraf-black font-bold uppercase;
      letter-spacing: 0.14px;
    }
  }
  @screen lg {
    &__actions {
      @apply invisible;
    }
    &:hover {
      .spare__actions {
        @apply visible;
      }
    }
  }
}
</style>