<script lang="ts" setup>
import MarkerTruckIcon from '@/components/ui/icons/MarkerTruckIcon.vue'
import RequestQuoteIcon from '@/components/ui/icons/RequestQuoteIcon.vue'
</script>
<template>
  <div class="purchase">
    <div class="purchase__inner">
      <div class="purchase__header">
        <div class="purchase__image">
          <img src="~/assets/img/purchase-item.jpg" />
        </div>
        <div class="purchase__year">2021</div>
        <div class="purchase__subcategory">
          <span>Retroescabadora</span>
        </div>
      </div>
      <div class="purchase__body">
        <div class="purchase__name">NOMBRE DEL VEHÍCULO WE QEWQEWQ</div>
        <div class="purchase__chip">
          <div class="purchase__chip-item">
            Lima
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
    @apply w-[300px] h-[340px] relative;
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
    .purchase__actions {
      @apply visible;
    }
  }
}
</style>