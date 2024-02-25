<script setup lang="ts">
import { onMounted } from 'vue'
import HeaderSection from '~/components/layout/HeaderSection.vue'
import FooterSection from '~/components/layout/FooterSection.vue'
import WhatsappBtn from '~/components/ui/WhatsappBtn.vue'

const route = useRoute()

const isNotDetailPage = computed(() => {
  const { name = '' } = route
  if (!name) {
    return false
  }
  return !['buy-id','spare-part-id'].includes(name as string)
})

onMounted(() => {
  console.log('netro default')
})

</script>
<template>
  <div>
    <HeaderSection />
    <slot />
    <FooterSection />

    <WhatsappBtn v-if="isNotDetailPage" />
  </div>
</template>