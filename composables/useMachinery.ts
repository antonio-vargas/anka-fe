import MachineryService from '~/services/machinery'
import { useRequest } from 'alova'
import { computed, ref } from 'vue'
import type { IMachinery } from '~/types'

export default function useMachinery() {
  const machinery = ref<IMachinery | null>(null)
  const {
    send: getMachinery,
    loading: loadingMachinery,
    onSuccess: onGetMachinerySuccess
  } = useRequest((id: string) => MachineryService.getMachinery(id), {
    immediate: false
  })

  onGetMachinerySuccess((data) => {
    machinery.value = data.data
    // totalMachineries.value = totalCount
    console.log(data.data)
  })

  return {
    machinery: computed(() => {
      return machinery.value
    }),
    loadingMachinery: computed(() => {
      return loadingMachinery.value
    }),
    getMachinery
  }
}