<script setup lang="ts">
import { WhatsappIcon } from '~/components/ui/icons';

interface Props {
  message: string | null;
}

const route = useRoute()
const props = withDefaults(defineProps<Props>(), {
  message: null
}) 

const DEFAULT_MESSAGE = '¡Hola! Soy Ankita 🦅, tu asistente virtual especialista en la Compra, Venta y Alquiler de Maquinarias y Vehículos. Por favor, coméntame sobre tu actual requerimiento.'

const messageCustom = computed(() => {
  return props.message || DEFAULT_MESSAGE
})

const handleWhatsapp = () => {
  const text = encodeURIComponent(messageCustom.value)
  // console.log(`https://wa.me/+51993305902?text=${text}`)
  window.open(`https://wa.me/+51982771045?text=${text}`, '_blank')
}

</script>
<template>
  <button
    class="fixed bottom-10 right-10 w-14 h-14 z-[140]"
    @click="handleWhatsapp">
    <WhatsappIcon />
  </button>
</template>