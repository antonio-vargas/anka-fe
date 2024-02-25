import SpartPartService from '~/services/sparepart'
import { useRequest } from 'alova'
import { computed, ref } from 'vue'
import type { ISparePart } from '~/types'

export default function useSpareParts() {
  const spareParts = ref<ISparePart[]>([])
  const totalSpareParts = ref<number>(0)
  const {
    send: getSpareParts,
    loading: loadingSpareParts,
    onSuccess: onGetSparePartsSuccess
  } = useRequest((params: string) => SpartPartService.getSpareParts(params), {
    immediate: false,
    initialData: []
  })

  onGetSparePartsSuccess(({ data: { data, totalCount }}) => {
    spareParts.value = data
    totalSpareParts.value = totalCount
    console.log(data)
  })

  return {
    spareParts: computed(() => {
      return spareParts.value
    }),
    loadingSpareParts: computed(() => {
      return loadingSpareParts.value
    }),
    totalSpareParts: computed(() => {
      return totalSpareParts
    }),
    getSpareParts
  }
}