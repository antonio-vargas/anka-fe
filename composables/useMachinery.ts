import {useHttp} from './useHttp'
import type { IMachinery } from '@/types'

export default function useMachinery() {
  const machineries = ref<IMachinery[]>([]);
  const totalMachineries = ref<number>(0)
  const machinery = ref<IMachinery | null>(null);
  const loadingMachineries = ref(true)
  const loadingMachinery = ref(true)
  const errorEmployee = ref('')

  async function getMachineries(params: string = '') {
    console.log('ici-getMachineries')
    // loadingMachineries.value = true
    await useHttp(`machinery/search${params}`, {
      method: 'GET',
      onResponse({ response }) {
        console.log('onResponse-machinery', response._data)
        // const { data, status, total } = response._data
        machineries.value = response._data.data
        totalMachineries.value = response._data.totalCount
        loadingMachineries.value = false
      },
      onResponseError({ response }) {
        console.log('onResponseError-machinery', response)
        totalMachineries.value = 0
        // const data = response._data as ErrorCulqi
        // errorEmployee.value = data?.message || 'Hubo un error, vuelva a intentar'
        loadingMachineries.value = false
      }
    });
  }

  async function getMachineById(id: string = '') {
    loadingMachinery.value = true
    await useHttp(`machinery/${id}`, {
      method: 'GET',
      onResponse({ response }) {
        // console.log(`onResponse_machinery/${id}`, response._data)
        machinery.value = response._data
        loadingMachinery.value = false
      },
      onResponseError({ response }) {
        console.log(response)
        // const data = response._data as ErrorCulqi
        // errorEmployee.value = data?.message || 'Hubo un error, vuelva a intentar'
        loadingMachinery.value = false
      }
    });
  }

  return {
    getMachineries,
    getMachineById,
    totalMachineries: computed(() => {
      return totalMachineries.value
    }),
    machineries: computed(() => {
      return machineries.value
    }),
    loadingMachineries: computed(() => {
      return loadingMachineries.value
    }),
    machinery: computed(() => {
      return machinery.value
    }),
    loadingMachinery: computed(() => {
      return loadingMachinery.value
    }),
    errorEmployee
  };
}