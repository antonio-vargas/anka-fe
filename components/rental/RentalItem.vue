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

defineEmits(['select'])

</script>
<template>
  <div class="rental">
    <div class="rental__inner">
      <div
        v-if="machinery?.images.length"
        class="rental__image"
        :style="`background-image: url(${machinery.images[0].image_link})`"
      >
        <img class="hidden" :src="machinery.images[0].image_link" />
      </div>
      <!-- <div class="rental__image">
        <img src="~/assets/img/purchase-item.jpg" />
      </div> -->
      <div class="rental__actions">
        <div class="rental__name">{{ machinery?.category.name || '' }}</div>
        <button class="btn-quote" type="button" @click="$emit('select', machinery)">
          <RequestQuoteIcon />
          <span>Cotizar</span>
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.rental {

  &__inner {
    @apply flex gap-3 flex-col w-full relative rounded-lg overflow-hidden;
  }

  // &__image {
  //   @apply w-full h-[340px] relative;
  // }

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
    @apply flex flex-col gap-3;
  }

  &__name {
    @apply w-full ;
    @apply text-white text-2xl font-telegraf-black font-bold uppercase text-left truncate;
  }

  &__actions {
    @apply w-full absolute invisible h-[170px] top-0 left-0 flex justify-end flex-col gap-3;
    @apply px-5 pb-3;
    background: linear-gradient(0deg, #0C2A3D 17.75%, rgba(12, 42, 61, 0.00) 100%);
    .btn-quote{
      @apply flex items-center justify-center h-[42px] w-full;
      @apply bg-secondary text-white rounded-3xl text-sm font-telegraf-black font-bold uppercase;
      letter-spacing: 0.14px;
    }
    @screen lg {
      @apply h-full gap-5;
      @apply px-5 pb-5;
    }
  }
  &:hover {
    .rental__actions {
      @apply visible;
    }
  }
}
</style>