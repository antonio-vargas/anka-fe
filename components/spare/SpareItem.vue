<script lang="ts" setup>
import MarkerTruckIcon from '@/components/ui/icons/MarkerTruckIcon.vue'
import RequestQuoteIcon from '@/components/ui/icons/RequestQuoteIcon.vue'

interface Props {
  index: number
}

defineProps<Props>()
</script>
<template>
  <div class="spare">
    <div class="spare__inner">
      <div class="spare__header">
        <div class="spare__image">
          <img src="~/assets/img/spare-item.jpg" />
        </div>
      </div>
      <div class="spare__body">
        <div class="spare__name">CARTUCHO REXROTH R902000535</div>
        <div class="spare__chip">
          <div class="spare__chip-item">
            KOMATSU
          </div>
          <div class="spare__chip-item">
            Cajamarca
          </div>
        </div>
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
    @apply w-[300px] h-[340px] relative;
  }

  &__body {
    @apply flex flex-col gap-3;
  }

  &__name {
    @apply text-primary text-xl leading-8 font-telegraf-black font-bold uppercase text-left min-h-[56px];
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
    @apply flex w-full gap-2 text-primary;
    &-item {
      @apply h-8 w-auto px-3 inline-flex items-center;
      @apply text-base truncate rounded-3xl border border-primary;
      &:last-child{
        @apply shrink-0;
      }
    }
  }
  &:hover {
    .spare__actions {
      @apply visible;
    }
  }
}
</style>