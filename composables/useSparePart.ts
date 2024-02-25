import SpartPartService from '~/services/sparepart'
import { useRequest } from 'alova'
import { computed, ref } from 'vue'
import type { ISparePart } from '~/types'

export default function useMachinery() {
  const sparePart = ref<ISparePart | null>(null)
  const {
    send: getSparePart,
    loading: loadingSparePart,
    onSuccess: onGetSparePartSuccess
  } = useRequest((id: string) => SpartPartService.getSparePart(id), {
    immediate: false
  })

  onGetSparePartSuccess((data) => {
    sparePart.value = data.data
    // totalMachineries.value = totalCount
    console.log(data.data)
  })

  return {
    sparePart: computed(() => {
      return sparePart.value
    }),
    loadingSparePart: computed(() => {
      return loadingSparePart.value
    }),
    getSparePart
  }
}