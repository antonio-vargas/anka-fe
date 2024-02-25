import MachineryService from '~/services/machinery'
import { useRequest } from 'alova'
import { computed, ref } from 'vue'
import type { IMachinery } from '~/types'

export default function useMachineries() {
  const machineries = ref<IMachinery[]>([])
  const totalMachineries = ref<number>(0)
  const {
    send: getMachineries,
    loading: loadingMachineries,
    onSuccess: onGetMachineriesSuccess
  } = useRequest((params: string) => MachineryService.getMachineries(params), {
    immediate: false,
    initialData: []
  })

  onGetMachineriesSuccess(({ data: { data, totalCount }}) => {
    machineries.value = data
    totalMachineries.value = totalCount
    console.log(data)
  })

  return {
    machineries: computed(() => {
      return machineries.value
    }),
    loadingMachineries: computed(() => {
      return loadingMachineries.value
    }),
    totalMachineries: computed(() => {
      return totalMachineries
    }),
    getMachineries
  }
}