<script setup lang="ts">
import { computed } from 'vue'
const ROUTER_NAME_HEADER = ['purchase']
const route = useRoute()
console.log(route)

const isCustomHeader = computed(() => {
  return ROUTER_NAME_HEADER.includes(route.name as string)
})

</script>
<template>
  <header class="header" :class="{'header-custom': isCustomHeader}">
    <div class="header__content container">
      <div class="header__logo">
        <img src="~/assets/img/anka-logo.svg" alt="Anka" />
      </div>
      <div class="header__menu font-telegraf-regular">
        <ul>
          <li>
            <NuxtLink>ALQUILER</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/purchase">COMPRAR</NuxtLink>
          </li>
          <li>
            <NuxtLink>TRANSPORTE</NuxtLink>
          </li>
          <li>
            <NuxtLink>REPUESTO</NuxtLink>
          </li>
          <li class="li-announce">
            <button type="button" class="btn-announce">ANUNCIA TU MAQUINA</button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  @apply w-full absolute top-0 left-0 h-auto py-3 border-b border-primary/30 z-[120];
  &.header-custom {
    @apply relative;
  }
  &__content {
    @apply flex justify-between items-center mx-auto;
  }
  &__logo {
    
  }
  &__menu {
    @apply flex items-center;
    ul {
      @apply flex items-center gap-1;
      li {
        @apply px-3 py-4 uppercase;
        a {
          @apply text-primary font-normal text-base;
        }
        .btn-announce {
          @apply py-2 px-4 inline-flex rounded-[28px];
          @apply bg-secondary text-white font-bold font-telegraf-black text-sm leading-8 tracking-[0.14px];
        }
        &.li-announce {
          @apply py-0;
        }
      }
    }
  }
} 
</style>