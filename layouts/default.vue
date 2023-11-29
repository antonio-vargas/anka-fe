<script setup lang="ts">
import { onMounted } from 'vue'
import HeaderSection from '@/components/layout/HeaderSection'
import FooterSection from '@/components/layout/FooterSection'
onMounted(() => {
  console.log('netro default')
})

</script>
<template>
  <div>
    <HeaderSection />
    <slot />
    <FooterSection />
  </div>
</template>