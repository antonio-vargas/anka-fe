<script lang="ts" setup>
import MarkerTruckIcon from '@/components/ui/icons/MarkerTruckIcon.vue'
import RequestQuoteIcon from '@/components/ui/icons/RequestQuoteIcon.vue'
</script>
<template>
  <div class="rental">
    <div class="rental__inner">
      <div class="rental__header">
        <div class="rental__image">
          <img src="~/assets/img/purchase-item.jpg" />
        </div>
        <div class="rental__actions">
          <div class="rental__name">CARGADOR FRONTAL</div>
          <button class="btn-quote" type="button">
            <RequestQuoteIcon />
            <span>Cotizar</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.rental {
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
    @apply text-primary text-2xl leading-8 font-telegraf-black font-bold uppercase text-left truncate min-h-[56px];
  }

  &__actions {
    @apply w-full relative invisible;
    .btn-quote{
      @apply flex items-center justify-center h-[42px] w-full;
      @apply bg-secondary text-white rounded-3xl text-sm font-telegraf-black font-bold uppercase;
      letter-spacing: 0.14px;
    }
  }
  &:hover {
    .spare__actions {
      @apply visible;
    }
  }
}
</style>