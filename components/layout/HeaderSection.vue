<script setup lang="ts">
import { computed, ref } from 'vue'
const ROUTER_NAME_HEADER = ['buy', 'buy-id', 'spare-part', 'spare-part-id']
const route = useRoute()

const toggleMenu = ref<boolean>(false)

const isCustomHeader = computed(() => {
  return ROUTER_NAME_HEADER.includes(route.name as string)
})

const handleToggleMenu = (value: boolean) => {
  toggleMenu.value = value
}

</script>
<template>
  <header class="header" :class="{'header-custom': isCustomHeader}">
    <div class="header__content container">
      <div class="header__logo">
        <NuxtLink to="/">
          <img src="~/assets/img/anka-logo.svg" alt="Anka" />
        </NuxtLink>
      </div>
      <div class="header__burger">
        <button type="button" class="btn-burger" @click="handleToggleMenu(true)">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="header__menu font-telegraf-regular">
        <ul>
          <li>
            <NuxtLink>ALQUILER</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/buy">COMPRAR</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/transport">TRANSPORTE</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/spare-part">REPUESTO</NuxtLink>
          </li>
          <li class="li-announce">
            <NuxtLink to="/announce-machine" class="btn-announce">ANUNCIA TU MAQUINA</NuxtLink>
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
  &__burger {
    @apply items-center flex lg:hidden;
    .btn-burger {
      @apply w-7 h-7 flex gap-1 flex-col justify-between;
      span {
        @apply h-1 w-full bg-primary flex rounded-sm;
      }
    }
  }
  &__logo {
    
  }
  &__menu {
    @apply items-center hidden lg:flex;
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